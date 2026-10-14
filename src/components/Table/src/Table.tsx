import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as React from 'react';
import {
  tableCaptionClasses,
  tableCellVariants,
  tableStackClasses,
  tableStripeClass,
  tableVariants,
  type TableStackClasses,
} from '../constants';
import type {
  TableCaptionProps,
  TableCellProps,
  TableHeadProps,
  TableProps,
  TableRowProps,
  TableSectionProps,
  TableStackedStyle,
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

/** Settings `Table` shares with the primitives inside it. */
interface TableContextValue {
  variant: 'bordered' | 'borderless';
  striped: boolean;
  density: 'default' | 'compact';
  stickyHeader: boolean;
  /** The stacked classes for this table's breakpoint, or null when not stacked. */
  stack: TableStackClasses | null;
  stackedStyle: TableStackedStyle;
}

const TableContext = React.createContext<TableContextValue>({
  variant: 'bordered',
  striped: false,
  density: 'default',
  stickyHeader: false,
  stack: null,
  stackedStyle: 'default',
});

/** Which section of the table a row or cell sits in. */
type TableSection = 'head' | 'body' | 'foot';

const TableSectionContext = React.createContext<TableSection | null>(null);

/**
 * Classes for a `<th>` or `<td>` from its table's settings and section, plus
 * the stacked label element when the table is stacked and the cell has one.
 */
function useCellStyles(kind: 'th' | 'td', label: React.ReactNode) {
  const { variant, striped, density, stickyHeader, stack, stackedStyle } =
    React.useContext(TableContext);
  const section = React.useContext(TableSectionContext);

  const stacked = stack && section === 'body' ? stack : null;
  const headings = stackedStyle === 'headers';
  const hasLabel = stacked != null && label != null;
  const stripe =
    striped && kind === 'td' && section === 'body'
      ? (stacked?.stripe ?? tableStripeClass)
      : undefined;

  return {
    className: cn(
      tableCellVariants({ kind, section, variant, density, stickyHeader }),
      stripe,
      stacked && [
        stacked.cell,
        kind === 'th' && stacked.headerCell,
        hasLabel && stacked.labelledCell,
        headings && stacked.headingCell,
      ],
    ),
    labelElement: hasLabel ? (
      <span
        className={cn('vero-table-stacked-label', stacked.label, headings && stacked.headingLabel)}
      >
        {label}
      </span>
    ) : null,
  };
}

/** The stacked classes for a row or section, or null when they don't apply. */
function useStackClasses(section: TableSection) {
  const { stack } = React.useContext(TableContext);
  const current = React.useContext(TableSectionContext);
  return stack && current === section ? stack : null;
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
    const context = React.useMemo<TableContextValue>(
      () => ({
        variant: variant ?? 'bordered',
        striped: striped ?? false,
        density: density ?? 'default',
        stickyHeader: stickyHeader ?? false,
        stack: stacked ? tableStackClasses[stackBreakpoint] : null,
        stackedStyle,
      }),
      [variant, striped, density, stickyHeader, stacked, stackBreakpoint, stackedStyle],
    );

    // The <caption> names the table itself. The scroll region needs its own
    // name, so it reuses an explicit aria-label when there is one and falls
    // back to the caption's text.
    const captionText = typeof caption === 'string' ? caption : undefined;
    const regionLabel = props['aria-label'] ?? captionText;
    const ariaLabelledby = props['aria-labelledby'];

    const table = (
      <table
        ref={ref}
        className={cn(tableVariants({ variant, striped, density, stickyHeader }), className)}
        {...props}
      >
        {caption != null ? <TableCaption hidden={captionHidden}>{caption}</TableCaption> : null}
        {/* Reset the section so a table nested in a cell starts fresh. */}
        <TableContext.Provider value={context}>
          <TableSectionContext.Provider value={null}>{children}</TableSectionContext.Provider>
        </TableContext.Provider>
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
      className={cn('vero-table-caption', tableCaptionClasses, hidden && 'sr-only', className)}
      {...props}
    />
  ),
);
TableCaption.displayName = 'TableCaption';

const TableHeader = React.forwardRef<HTMLTableSectionElement, TableSectionProps>(
  ({ className, ...props }, ref) => {
    // The header sets the section rather than sitting in one, so it reads the
    // table's stacked classes directly.
    const { stack } = React.useContext(TableContext);
    return (
      <TableSectionContext.Provider value="head">
        <thead ref={ref} className={cn('vero-table-header', stack?.header, className)} {...props} />
      </TableSectionContext.Provider>
    );
  },
);
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<HTMLTableSectionElement, TableSectionProps>(
  ({ className, ...props }, ref) => (
    <TableSectionContext.Provider value="body">
      <tbody ref={ref} className={cn('vero-table-body', className)} {...props} />
    </TableSectionContext.Provider>
  ),
);
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<HTMLTableSectionElement, TableSectionProps>(
  ({ className, ...props }, ref) => (
    <TableSectionContext.Provider value="foot">
      <tfoot ref={ref} className={cn('vero-table-footer font-bold', className)} {...props} />
    </TableSectionContext.Provider>
  ),
);
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, ...props }, ref) => {
    const stacked = useStackClasses('body');
    return <tr ref={ref} className={cn('vero-table-row', stacked?.row, className)} {...props} />;
  },
);
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, scope = 'col', label, children, ...props }, ref) => {
    const cell = useCellStyles('th', label);
    return (
      <th
        ref={ref}
        className={cn('vero-table-head', cell.className, className)}
        scope={scope}
        {...props}
      >
        {cell.labelElement}
        {children}
      </th>
    );
  },
);
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, label, children, ...props }, ref) => {
    const cell = useCellStyles('td', label);
    return (
      <td ref={ref} className={cn('vero-table-cell', cell.className, className)} {...props}>
        {cell.labelElement}
        {children}
      </td>
    );
  },
);
TableCell.displayName = 'TableCell';

export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow };
