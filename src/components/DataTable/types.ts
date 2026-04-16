import { HTMLAttributes, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
import { dataTableVariants } from './constants';

/** An option for a select or multi-select filter */
export interface DataTableFilterOption {
  value: string;
  label: string;
}

/** Text filter operators. Defaults to `contains` when not specified. */
export type DataTableTextOperator = 'contains' | 'equals' | 'startsWith' | 'endsWith';

/** Numeric comparison operators */
export type DataTableNumberOperator = 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'between';

/** Discriminated union describing how a column's filter input is rendered. */
export type DataTableFilterConfig =
  | {
      type: 'text';
      placeholder?: string;
      /** Show an operator selector (contains/equals/startsWith/endsWith). @default false */
      showOperator?: boolean;
    }
  | {
      type: 'number';
      placeholder?: string;
      /** Show an operator selector (=, ≠, >, ≥, <, ≤, between). @default true */
      showOperator?: boolean;
      min?: number;
      max?: number;
      step?: number;
    }
  | {
      type: 'boolean';
      /** Label for the true option. @default "Yes" */
      trueLabel?: string;
      /** Label for the false option. @default "No" */
      falseLabel?: string;
      /** Label for the "any" option that clears the filter. @default "Any" */
      anyLabel?: string;
    }
  | {
      type: 'select';
      options: DataTableFilterOption[];
      placeholder?: string;
      /** When true, uses a searchable Combobox. @default false */
      searchable?: boolean;
    }
  | {
      type: 'multiSelect';
      options: DataTableFilterOption[];
      placeholder?: string;
    }
  | {
      type: 'date';
      placeholder?: string;
    }
  | {
      type: 'dateRange';
      placeholder?: { from?: string; to?: string };
    };

/** Discriminated union of filter values stored in filter state. */
export type DataTableFilterValue =
  | { type: 'text'; value: string; operator: DataTableTextOperator }
  | {
      type: 'number';
      value: number | null;
      valueMax?: number | null;
      operator: DataTableNumberOperator;
    }
  | { type: 'boolean'; value: boolean }
  | { type: 'select'; value: string }
  | { type: 'multiSelect'; value: string[] }
  | { type: 'date'; value: Date }
  | { type: 'dateRange'; value: { from?: Date; to?: Date } };

/** A single active filter emitted to consumers (fetchers, URL sync, etc.) */
export interface DataTableActiveFilter {
  /** The column id this filter applies to */
  columnId: string;
  /** The filter value and metadata */
  value: DataTableFilterValue;
}

/** Filter state: map of columnId to filter value. Columns without a filter are omitted. */
export type DataTableFilterState = Record<string, DataTableFilterValue>;

export interface DataTableColumn<T> {
  /** Unique identifier for the column. Also used as the default property key for accessing row data. */
  id: string;
  /** Column header text */
  header: string;
  /** Custom cell renderer. When not provided, reads from the row using `accessor` or `id`. */
  cell?: (row: T) => ReactNode;
  /** Property key to read from the row object. Defaults to `id`. */
  accessor?: string;
  /** Whether this column supports sorting */
  isSortable?: boolean;
  /** Filter configuration for this column. When omitted, the column is not filterable. */
  filter?: DataTableFilterConfig;
  /** Additional className applied to each cell in this column */
  className?: string;
  /** Additional className applied to the header cell */
  headerClassName?: string;
}

export interface DataTableSort {
  /** The id of the sorted column */
  column: string;
  /** Sort direction */
  direction: 'asc' | 'desc';
}

export interface DataTablePaginationState {
  /** Current page (1-indexed) */
  page: number;
  /** Number of items per page */
  pageSize: number;
  /** Total number of items across all pages */
  totalItems: number;
  /** Callback when the page changes */
  onPageChange: (page: number) => void;
  /** Callback when the page size changes. When provided, a page-size selector is rendered. */
  onPageSizeChange?: (pageSize: number) => void;
  /** Page size options for the selector. Defaults to [10, 20, 50, 100]. */
  pageSizeOptions?: number[];
}

export interface DataTableProps<T>
  extends Omit<HTMLAttributes<HTMLTableElement>, 'children'>,
    VariantProps<typeof dataTableVariants> {
  /** Column definitions */
  columns: DataTableColumn<T>[];
  /** Row data to display */
  data: T[];
  /** Current sort state */
  sort?: DataTableSort;
  /** Callback when a sortable column header is clicked */
  onSort?: (sort: DataTableSort) => void;
  /** Pagination configuration. When provided, pagination controls are rendered below the table. */
  pagination?: DataTablePaginationState;
  /** Whether data is currently loading */
  isLoading?: boolean;
  /** Content to display while loading. Accepts strings or React nodes (spinners, skeletons, etc). Defaults to "Loading…". */
  loadingMessage?: ReactNode;
  /** Content to display when data is empty. Defaults to "No results". */
  emptyMessage?: ReactNode;
  /** Derive a unique key for each row. Defaults to the row index. */
  getRowId?: (row: T, index: number) => string;
  /** Callback when a row is clicked */
  onRowClick?: (row: T) => void;
  /** Additional className for the table element */
  className?: string;
}

export interface DataTablePaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Current page (1-indexed) */
  page: number;
  /** Number of items per page */
  pageSize: number;
  /** Total number of items across all pages */
  totalItems: number;
  /** Callback when page changes */
  onPageChange: (page: number) => void;
  /** Callback when page size changes */
  onPageSizeChange?: (pageSize: number) => void;
  /** Available page size options. Defaults to [10, 20, 50, 100]. */
  pageSizeOptions?: number[];
  /** Additional className */
  className?: string;
}

/**
 * Layout variant for `DataTableFilters`.
 * - `popover` — compact trigger button + dropdown, with active-filter badges rendered inline.
 * - `inline` — filter controls rendered directly in a stacked form, suitable for a sidebar.
 */
export type DataTableFiltersLayout = 'popover' | 'inline';

export interface DataTableFiltersProps<T> extends HTMLAttributes<HTMLDivElement> {
  /** Column definitions; columns with a `filter` config will render a filter control. */
  columns: DataTableColumn<T>[];
  /** Current filter state, keyed by column id. */
  filters: DataTableFilterState;
  /** Callback when a column's filter value changes. Passing `undefined` clears the filter. */
  onFilterChange: (columnId: string, value: DataTableFilterValue | undefined) => void;
  /** Clear all filters at once */
  onClearAll?: () => void;
  /** How to present the filter controls. @default "popover" */
  layout?: DataTableFiltersLayout;
  /** Heading shown above the filter controls. Pass `null` to hide. @default "Filters" */
  heading?: ReactNode;
  /** Button label shown on the popover trigger. Ignored when `layout === "inline"`. @default "Filters" */
  triggerLabel?: string;
  /** Additional className applied to the wrapper */
  className?: string;
}
