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

const TableHeader = React.forwardRef<HTMLTableSectionElement, TableSectionProps>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={cn('vero-table-header', className)} {...props} />
  ),
);
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<HTMLTableSectionElement, TableSectionProps>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn('vero-table-body', className)} {...props} />
  ),
);
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<HTMLTableSectionElement, TableSectionProps>(
  ({ className, ...props }, ref) => (
    <tfoot ref={ref} className={cn('vero-table-footer font-bold', className)} {...props} />
  ),
);
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, ...props }, ref) => (
    <tr ref={ref} className={cn('vero-table-row', className)} {...props} />
  ),
);
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, scope = 'col', ...props }, ref) => (
    <th ref={ref} className={cn('vero-table-head', className)} scope={scope} {...props} />
  ),
);
TableHead.displayName = 'TableHead';

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
