import type { VariantProps } from 'class-variance-authority';
import type {
  ColumnDef,
  ColumnMeta,
  OnChangeFn,
  RowData,
  SortingState,
} from '@tanstack/react-table';
import type {
  HTMLAttributes,
  ReactNode,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from 'react';
import type { tableVariants } from './constants';

/**
 * @experimental Exported for early feedback; the API may change or be
 * removed without a major version bump. See https://capitaltg.github.io/vero/
 *
 * Extra per-column configuration understood by {@link DataTable}, set on a
 * column via `meta`, e.g. `{ meta: { isRowHeader: true } }`.
 *
 * Vero deliberately does not augment TanStack Table's global `ColumnMeta`
 * interface: that would add these fields to every app that imports Vero and
 * break apps that define their own `ColumnMeta` fields with the same names.
 * Type your columns as {@link DataTableColumnDef} instead. To get these fields
 * on `ColumnMeta` everywhere (for example with `createColumnHelper`), opt in
 * from your own app:
 *
 * ```ts
 * declare module '@tanstack/react-table' {
 *   interface ColumnMeta<TData extends RowData, TValue> extends DataTableColumnMeta {}
 * }
 * ```
 */
export interface DataTableColumnMeta {
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
   * Label shown above this column's cells when the table is stacked (card)
   * mode. Defaults to the column's header text when it is a plain string,
   * otherwise the column id.
   */
  stackedLabel?: string;
}

/**
 * @experimental Exported for early feedback; the API may change or be
 * removed without a major version bump. See https://capitaltg.github.io/vero/
 *
 * A TanStack Table `ColumnDef` whose `meta` also accepts
 * {@link DataTableColumnMeta}. Type your column array with it to get
 * autocomplete and typo checking on the `DataTable` options:
 *
 * ```ts
 * const columns: DataTableColumnDef<Person>[] = [
 *   { accessorKey: 'name', header: 'Name', meta: { isRowHeader: true } },
 * ];
 * ```
 *
 * Plain `ColumnDef` arrays (and `createColumnHelper` output) are accepted too.
 */
export type DataTableColumnDef<TData extends RowData, TValue = unknown> = TData extends unknown
  ? // Distributes over TanStack's `ColumnDef` union, so accessor, display and
    // group columns keep their own shapes.
    WithDataTableMeta<ColumnDef<TData, TValue>, TData, TValue>
  : never;

/** Replaces a column variant's `meta` (and a group's `columns`) with Vero's. */
type WithDataTableMeta<TDef, TData extends RowData, TValue> = TDef extends unknown
  ? Omit<TDef, 'meta' | 'columns'> & {
      // Vero's options win over same-named fields an app adds to `ColumnMeta`,
      // while the app's other fields stay available.
      meta?: Omit<ColumnMeta<TData, TValue>, keyof DataTableColumnMeta> & DataTableColumnMeta;
    } & (TDef extends { columns?: unknown }
        ? // `any`, as TanStack's own group columns use: each child has its own
          // value type, and `unknown` would reject them.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          { columns?: DataTableColumnDef<TData, any>[] }
        : unknown)
  : never;

/**
 * @experimental Exported for early feedback; the API may change or be
 * removed without a major version bump. See https://capitaltg.github.io/vero/
 *
 * Responsive behavior for a table on narrow viewports.
 */
export type TableResponsive = 'scroll' | 'stack' | 'none';

/**
 * @experimental Exported for early feedback; the API may change or be
 * removed without a major version bump. See https://capitaltg.github.io/vero/
 *
 * Breakpoint at which a stacked table returns to a normal grid layout.
 */
export type TableStackBreakpoint = 'sm' | 'md' | 'lg';

/**
 * @experimental Exported for early feedback; the API may change or be
 * removed without a major version bump. See https://capitaltg.github.io/vero/
 *
 * How a stacked (card) table presents each card, mirroring the USWDS
 * `usa-table--stacked` / `usa-table--stacked-header` variants.
 * - `default`: every cell is labelled with its column header.
 * - `headers`: the first cell of each card becomes the card's heading and
 *   drops its own label.
 */
export type TableStackedStyle = 'default' | 'headers';

type TableVariantProps = VariantProps<typeof tableVariants>;

/**
 * @experimental Exported for early feedback; the API may change or be
 * removed without a major version bump. See https://capitaltg.github.io/vero/
 */
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

/**
 * @experimental Exported for early feedback; the API may change or be
 * removed without a major version bump. See https://capitaltg.github.io/vero/
 */
export type TableCaptionProps = HTMLAttributes<HTMLTableCaptionElement> & {
  /**
   * Visually hide the caption while keeping it available to assistive
   * technology, so the table still has an accessible name without a visible
   * title.
   * @default false
   */
  hidden?: boolean;
};

/**
 * @experimental Exported for early feedback; the API may change or be
 * removed without a major version bump. See https://capitaltg.github.io/vero/
 */
export type TableSectionProps = HTMLAttributes<HTMLTableSectionElement>;

/**
 * @experimental Exported for early feedback; the API may change or be
 * removed without a major version bump. See https://capitaltg.github.io/vero/
 */
export type TableRowProps = HTMLAttributes<HTMLTableRowElement>;

/**
 * @experimental Exported for early feedback; the API may change or be
 * removed without a major version bump. See https://capitaltg.github.io/vero/
 */
export interface TableHeadProps extends ThHTMLAttributes<HTMLTableCellElement> {
  /**
   * The header's scope. Use `col` for column headers, `row` for row headers,
   * and `colgroup`/`rowgroup` for headers that span a group.
   * @default 'col'
   */
  scope?: 'col' | 'row' | 'colgroup' | 'rowgroup';
  /**
   * Label shown above this cell's value when the table is stacked — normally
   * its column header. Only used for row headers in the body (`scope="row"`);
   * rendered only while the table is stacked and below its breakpoint.
   */
  label?: ReactNode;
}

/**
 * @experimental Exported for early feedback; the API may change or be
 * removed without a major version bump. See https://capitaltg.github.io/vero/
 */
export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  /**
   * Label shown above this cell's value when the table is stacked — normally
   * its column header. Rendered only while the table is stacked and below its
   * breakpoint. {@link DataTable} fills it in from the column definitions.
   */
  label?: ReactNode;
}

/**
 * @experimental Exported for early feedback; the API may change or be
 * removed without a major version bump. See https://capitaltg.github.io/vero/
 */
export interface DataTableProps<TData> extends TableVariantProps {
  /** The rows to render. */
  data: TData[];
  /**
   * TanStack Table column definitions. Type them as {@link DataTableColumnDef}
   * to get checking on the `meta` options; plain `ColumnDef` arrays and
   * `createColumnHelper` output work too.
   */
  // `any` is what TanStack recommends for a column array: each column has its
  // own value type, and `unknown` would reject typed (e.g. helper) columns.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: DataTableColumnDef<TData, any>[];
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
