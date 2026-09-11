import type { VariantProps } from 'class-variance-authority';
import type { ColumnDef, OnChangeFn, RowData, SortingState } from '@tanstack/react-table';
import type {
  HTMLAttributes,
  ReactNode,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from 'react';
import type { tableVariants } from './constants';

/**
 * Extra per-column configuration understood by {@link DataTable}. Set on a
 * column via `ColumnDef.meta`, e.g. `{ meta: { isRowHeader: true } }`.
 *
 * This augments TanStack Table's own `ColumnMeta` interface so the fields are
 * available wherever a `ColumnDef` is typed.
 */
declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    /**
     * When true, this column's cells render as `<th scope="row">` instead of
     * `<td>`, making them row headers for assistive technology. Designate
     * exactly one column per table as the row header for the best experience.
     */
    isRowHeader?: boolean;
    /**
     * Horizontal alignment of the column's header and cells.
     * @default 'left'
     */
    align?: 'left' | 'center' | 'right';
    /**
     * Label used to prefix this column's cells when the table is displayed in
     * stacked (card) mode. Defaults to the column's header text when it is a
     * plain string, otherwise the column id.
     */
    stackedLabel?: string;
  }
}

/** Responsive behavior for a table on narrow viewports. */
export type TableResponsive = 'scroll' | 'stack' | 'none';

/** Breakpoint at which a stacked table returns to a normal grid layout. */
export type TableStackBreakpoint = 'sm' | 'md' | 'lg';

/**
 * How a stacked (card) table presents each card, mirroring the USWDS
 * `usa-table--stacked` / `usa-table--stacked-header` variants.
 * - `default`: every cell is labelled with its column header.
 * - `headers`: the first cell of each card becomes the card's heading and
 *   drops its own label.
 */
export type TableStackedStyle = 'default' | 'headers';

type TableVariantProps = VariantProps<typeof tableVariants>;

export interface TableProps
  extends Omit<TableHTMLAttributes<HTMLTableElement>, 'aria-label' | 'aria-labelledby'>,
    TableVariantProps {
  /**
   * How the table adapts to narrow viewports.
   * - `scroll` (default): wrap the table in a keyboard-focusable horizontal
   *   scroll region.
   * - `stack`: collapse rows into stacked cards below `stackBreakpoint`.
   * - `none`: no responsive treatment.
   * @default 'scroll'
   */
  responsive?: TableResponsive;
  /**
   * Breakpoint at which a `stack` table returns to a normal grid layout.
   * @default 'md'
   */
  stackBreakpoint?: TableStackBreakpoint;
  /**
   * How each card is presented when the table is stacked. `headers` promotes
   * the first cell of every row to the card's heading (USWDS
   * `usa-table--stacked-header`). Ignored unless `responsive="stack"`.
   * @default 'default'
   */
  stackedStyle?: TableStackedStyle;
  /**
   * The table's `<caption>` and accessible name. A convenience for the common
   * case; compose {@link TableCaption} yourself when the caption needs its own
   * markup or has to sit somewhere specific.
   */
  caption?: ReactNode;
  /** Visually hide {@link caption} while keeping it available to screen readers. */
  captionHidden?: boolean;
  /**
   * Accessible name for the scroll region (used when `responsive="scroll"`).
   * A table should always have an accessible name via a `<caption>`; provide
   * this so the scroll region is also named for screen-reader users.
   */
  'aria-label'?: string;
  /** Id of an element that labels the scroll region. */
  'aria-labelledby'?: string;
}

export type TableCaptionProps = HTMLAttributes<HTMLTableCaptionElement> & {
  /**
   * Visually hide the caption while keeping it available to assistive
   * technology, so the table still has an accessible name without a visible
   * title.
   * @default false
   */
  hidden?: boolean;
};

export type TableSectionProps = HTMLAttributes<HTMLTableSectionElement>;
export type TableRowProps = HTMLAttributes<HTMLTableRowElement>;

export interface TableHeadProps extends ThHTMLAttributes<HTMLTableCellElement> {
  /**
   * The header's scope. Use `col` for column headers, `row` for row headers,
   * and `colgroup`/`rowgroup` for headers that span a group.
   * @default 'col'
   */
  scope?: 'col' | 'row' | 'colgroup' | 'rowgroup';
  /**
   * Label shown above this cell's value when the table is stacked. Body cells
   * that leave it unset inherit their column header's text automatically.
   */
  'data-label'?: string;
}

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  /**
   * Label shown above this cell's value when the table is stacked. Cells that
   * leave it unset inherit their column header's text automatically.
   */
  'data-label'?: string;
}

export interface DataTableProps<TData> extends TableVariantProps {
  /** The rows to render. */
  data: TData[];
  /** TanStack Table column definitions. */
  columns: ColumnDef<TData, unknown>[];
  /**
   * The table's caption / accessible name. Strongly recommended — every table
   * should have one.
   */
  caption?: ReactNode;
  /** Visually hide the caption while keeping it available to screen readers. */
  captionHidden?: boolean;
  /**
   * Explicit accessible name, used when {@link caption} is not provided (for
   * example when a visible heading already describes the table).
   */
  'aria-label'?: string;
  /** Id of an element that labels the table. */
  'aria-labelledby'?: string;
  /**
   * Enable column sorting. Individual columns can opt out with
   * `enableSorting: false` in their `ColumnDef`.
   * @default false
   */
  enableSorting?: boolean;
  /** Initial (uncontrolled) sorting state. */
  initialSorting?: SortingState;
  /** Controlled sorting state. */
  sorting?: SortingState;
  /** Called when the sorting state changes (controlled mode). */
  onSortingChange?: OnChangeFn<SortingState>;
  /**
   * How the table adapts to narrow viewports.
   * @default 'scroll'
   */
  responsive?: TableResponsive;
  /**
   * Breakpoint at which a `stack` table returns to a normal grid layout.
   * @default 'md'
   */
  stackBreakpoint?: TableStackBreakpoint;
  /**
   * How each card is presented when the table is stacked. `headers` promotes
   * the first cell of every row to the card's heading (USWDS
   * `usa-table--stacked-header`). Ignored unless `responsive="stack"`.
   * @default 'default'
   */
  stackedStyle?: TableStackedStyle;
  /** Content shown when `data` is empty. */
  emptyState?: ReactNode;
  /** Optional footer content rendered in a `<tfoot>`. */
  footer?: ReactNode;
  /** Returns a stable id for a row (forwarded to TanStack `getRowId`). */
  getRowId?: (row: TData, index: number) => string;
  /** Additional class names for the `<table>` element. */
  className?: string;
}
