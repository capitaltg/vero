import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { useComposedRefs } from '@radix-ui/react-compose-refs';
import * as React from 'react';
import { tableStackVariants, tableVariants } from '../constants';
import type {
  TableCaptionProps,
  TableCellProps,
  TableHeadProps,
  TableProps,
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

/**
 * Marks the `data-label` attributes this component set itself, so a later pass
 * can refresh them without clobbering labels the consumer supplied.
 */
const AUTO_LABEL_ATTR = 'data-vero-auto-label';

/**
 * Copies each column header's text onto the body cells below it as
 * `data-label`, which stacked mode renders above the cell's value. This is what
 * makes `responsive="stack"` work for hand-composed tables with no extra
 * markup; cells that already carry an explicit `data-label` are left alone.
 *
 * Runs on every render (tables are small, and the labels have to follow header
 * or row changes) and only touches an attribute React does not manage.
 */
function useStackedLabels(ref: React.RefObject<HTMLTableElement>, enabled: boolean) {
  React.useEffect(() => {
    if (!enabled) return;
    const table = ref.current;
    if (!table) return;

    // `:scope >` keeps a nested table's own rows out of this table's labels.
    const headerRows = table.querySelectorAll<HTMLTableRowElement>(':scope > thead > tr');
    if (headerRows.length === 0) return;

    const cellsOf = (row: HTMLTableRowElement) =>
      row.querySelectorAll<HTMLTableCellElement>(':scope > th, :scope > td');
    const spanOf = (cell: HTMLTableCellElement) => Number(cell.getAttribute('colspan') ?? '1') || 1;

    // The last header row holds the leaf columns the body cells line up with.
    const labels: string[] = [];
    for (const cell of cellsOf(headerRows[headerRows.length - 1])) {
      const text = cell.textContent?.trim() ?? '';
      for (let i = 0; i < spanOf(cell); i += 1) labels.push(text);
    }

    for (const row of table.querySelectorAll<HTMLTableRowElement>(':scope > tbody > tr')) {
      let column = 0;
      for (const cell of cellsOf(row)) {
        const label = labels[column];
        const span = spanOf(cell);
        column += span;

        // Spanning cells (row-group headings, empty states) label nothing.
        if (span > 1) continue;
        if (cell.hasAttribute('data-label') && !cell.hasAttribute(AUTO_LABEL_ATTR)) continue;

        if (label) {
          cell.setAttribute('data-label', label);
          cell.setAttribute(AUTO_LABEL_ATTR, '');
        } else if (cell.hasAttribute(AUTO_LABEL_ATTR)) {
          cell.removeAttribute('data-label');
          cell.removeAttribute(AUTO_LABEL_ATTR);
        }
      }
    }
  });
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    {
      className,
      variant,
      striped,
      density,
      stickyHeader,
      responsive = 'scroll',
      stackBreakpoint = 'md',
      stackedStyle = 'default',
      caption,
      captionHidden = false,
      children,
      ...props
    },
    ref,
  ) => {
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const overflowing = useHorizontalOverflow(scrollRef);

    const stacked = responsive === 'stack';
    const tableRef = React.useRef<HTMLTableElement>(null);
    const composedRef = useComposedRefs(ref, tableRef);
    useStackedLabels(tableRef, stacked);

    // The <caption> names the table itself. The scroll region needs its own
    // name, so it reuses an explicit aria-label when there is one and falls
    // back to the caption's text.
    const captionText = typeof caption === 'string' ? caption : undefined;
    const regionLabel = props['aria-label'] ?? captionText;
    const ariaLabelledby = props['aria-labelledby'];

    const table = (
      <table
        ref={composedRef}
        className={cn(
          tableVariants({ variant, striped, density, stickyHeader }),
          stacked && tableStackVariants[stackBreakpoint],
          className,
        )}
        data-stacked-style={stacked ? stackedStyle : undefined}
        {...props}
      >
        {caption != null ? <TableCaption hidden={captionHidden}>{caption}</TableCaption> : null}
        {children}
      </table>
    );

    if (responsive !== 'scroll') return table;

    // Only expose the wrapper as a focusable, named region when the content
    // actually overflows. A region needs an accessible name, so when there is
    // nothing to name it with — no aria-label, no plain-text caption — fall
    // back to a plain (still keyboard-scrollable) container rather than emit an
    // unnamed region.
    const hasName = Boolean(regionLabel || ariaLabelledby);
    const regionProps = overflowing
      ? hasName
        ? {
            role: 'region',
            tabIndex: 0,
            'aria-label': regionLabel,
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
Table.displayName = 'Table';

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

export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow };
