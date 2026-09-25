import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { tableStackVariants, tableVariants } from '../constants';
import type {
  TableCaptionProps,
  TableCellProps,
  TableHeadProps,
  TableRootProps,
  TableRowProps,
  TableSectionProps,
} from '../types';

/**
 * Tracks whether an element's content overflows horizontally, so the scroll
 * region only becomes a focusable, named region when it is actually
 * scrollable — avoiding a phantom tab stop on tables that fit.
 */
function useHorizontalOverflow(ref: React.RefObject<HTMLElement>) {
  const [overflowing, setOverflowing] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => setOverflowing(el.scrollWidth > el.clientWidth);
    measure();

    if (typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return overflowing;
}

// One-time dev-mode notice that the Table primitives are experimental. Fired
// from `TableRoot` because every table — whether composed from the
// primitives directly or rendered by the config-driven `Table` — mounts one.
let hasWarnedExperimental = false;
function warnExperimentalOnce() {
  if (hasWarnedExperimental) return;
  if (typeof process !== 'undefined' && process.env?.NODE_ENV === 'production') return;
  hasWarnedExperimental = true;
  // eslint-disable-next-line no-console
  console.warn(
    '[vero] Table is experimental: `Table`, `TableRoot`, and the other table primitives are ' +
      'exported for early feedback and may change — or be removed — without a major version ' +
      'bump. See the Storybook docs for details.',
  );
}

/**
 * @experimental Exported for early feedback; the API may change or be
 * removed without a major version bump. See `Table/PLAN.md`.
 *
 * The `<table>` element, with USWDS-inspired styling and responsive
 * (scroll / stacked) behavior. Compose with `TableCaption`, `TableHeader`,
 * `TableBody`, `TableFooter`, `TableRow`, `TableHead`, and `TableCell`.
 */
const TableRoot = React.forwardRef<HTMLTableElement, TableRootProps>(
  (
    {
      className,
      variant,
      striped,
      density,
      responsive = 'scroll',
      stackBreakpoint = 'md',
      children,
      ...props
    },
    ref,
  ) => {
    React.useEffect(() => {
      warnExperimentalOnce();
    }, []);

    const scrollRef = React.useRef<HTMLDivElement>(null);
    const overflowing = useHorizontalOverflow(scrollRef);

    // aria-label / aria-labelledby name the <table> itself (its natural
    // accessible name, alongside or instead of a <caption>).
    const ariaLabel = props['aria-label'];
    const ariaLabelledby = props['aria-labelledby'];

    const table = (
      <table
        ref={ref}
        className={cn(
          tableVariants({ variant, striped, density }),
          responsive === 'stack' && tableStackVariants[stackBreakpoint],
          className,
        )}
        {...props}
      >
        {children}
      </table>
    );

    if (responsive !== 'scroll') return table;

    // Only expose the wrapper as a focusable, named region when the content
    // actually overflows. A region needs an accessible name; when the table is
    // named only by its caption, fall back to a plain (still keyboard-
    // scrollable) container so we never emit an unnamed region.
    const hasName = Boolean(ariaLabel || ariaLabelledby);
    const regionProps = overflowing
      ? hasName
        ? {
            role: 'region',
            tabIndex: 0,
            'aria-label': ariaLabel,
            'aria-labelledby': ariaLabelledby,
          }
        : { tabIndex: 0 }
      : {};

    return (
      <div
        ref={scrollRef}
        className={cn('vero-table-scroll overflow-x-auto', overflowing && styles.focusRingVisible)}
        {...regionProps}
      >
        {table}
      </div>
    );
  },
);
TableRoot.displayName = 'TableRoot';

/**
 * @experimental Exported for early feedback; the API may change or be
 * removed without a major version bump. See `Table/PLAN.md`.
 *
 * `<caption>` for a `TableRoot`. Every table should have one (visible or
 * visually hidden via the `hidden` prop) so it has an accessible name.
 */
const TableCaption = React.forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  ({ className, hidden = false, ...props }, ref) => (
    <caption
      ref={ref}
      className={cn('vero-table-caption', hidden && 'sr-only', className)}
      {...props}
    />
  ),
);
TableCaption.displayName = 'TableCaption';

/**
 * @experimental Exported for early feedback; the API may change or be
 * removed without a major version bump. See `Table/PLAN.md`.
 *
 * `<thead>` for a `TableRoot`.
 */
const TableHeader = React.forwardRef<HTMLTableSectionElement, TableSectionProps>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={cn('vero-table-header', className)} {...props} />
  ),
);
TableHeader.displayName = 'TableHeader';

/**
 * @experimental Exported for early feedback; the API may change or be
 * removed without a major version bump. See `Table/PLAN.md`.
 *
 * `<tbody>` for a `TableRoot`. Use multiple `TableBody` blocks to create
 * visual row-group sections.
 */
const TableBody = React.forwardRef<HTMLTableSectionElement, TableSectionProps>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn('vero-table-body', className)} {...props} />
  ),
);
TableBody.displayName = 'TableBody';

/**
 * @experimental Exported for early feedback; the API may change or be
 * removed without a major version bump. See `Table/PLAN.md`.
 *
 * `<tfoot>` for a `TableRoot`.
 */
const TableFooter = React.forwardRef<HTMLTableSectionElement, TableSectionProps>(
  ({ className, ...props }, ref) => (
    <tfoot ref={ref} className={cn('vero-table-footer font-bold', className)} {...props} />
  ),
);
TableFooter.displayName = 'TableFooter';

/**
 * @experimental Exported for early feedback; the API may change or be
 * removed without a major version bump. See `Table/PLAN.md`.
 *
 * `<tr>` for a `TableRoot`.
 */
const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, ...props }, ref) => (
    <tr ref={ref} className={cn('vero-table-row', className)} {...props} />
  ),
);
TableRow.displayName = 'TableRow';

/**
 * @experimental Exported for early feedback; the API may change or be
 * removed without a major version bump. See `Table/PLAN.md`.
 *
 * `<th>` for a `TableRoot`. Set `scope="row"` on the header cell of each row.
 */
const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, scope = 'col', ...props }, ref) => (
    <th ref={ref} className={cn('vero-table-head', className)} scope={scope} {...props} />
  ),
);
TableHead.displayName = 'TableHead';

/**
 * @experimental Exported for early feedback; the API may change or be
 * removed without a major version bump. See `Table/PLAN.md`.
 *
 * `<td>` for a `TableRoot`.
 */
const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn('vero-table-cell', className)} {...props} />
  ),
);
TableCell.displayName = 'TableCell';

export {
  TableRoot,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
