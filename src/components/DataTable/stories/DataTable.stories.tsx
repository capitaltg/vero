import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from '../src/DataTable';
import { DataTableCustomCells } from '../demos/DataTableCustomCells';
import { DataTableDefault } from '../demos/DataTableDefault';
import { DataTableEmpty } from '../demos/DataTableEmpty';
import { DataTableFiltering } from '../demos/DataTableFiltering';
import { DataTableFilteringSidebar } from '../demos/DataTableFilteringSidebar';
import { DataTablePaginated } from '../demos/DataTablePaginated';
import { DataTableSizes } from '../demos/DataTableSizes';
import { DataTableSorting } from '../demos/DataTableSorting';
import { DataTableVariants } from '../demos/DataTableVariants';
import { DataTableWithDataSource } from '../demos/DataTableWithDataSource';

import sourceCustomCells from '../demos/DataTableCustomCells.tsx?raw';
import sourceDefault from '../demos/DataTableDefault.tsx?raw';
import sourceEmpty from '../demos/DataTableEmpty.tsx?raw';
import sourceFiltering from '../demos/DataTableFiltering.tsx?raw';
import sourceFilteringSidebar from '../demos/DataTableFilteringSidebar.tsx?raw';
import sourcePaginated from '../demos/DataTablePaginated.tsx?raw';
import sourceSizes from '../demos/DataTableSizes.tsx?raw';
import sourceSorting from '../demos/DataTableSorting.tsx?raw';
import sourceVariants from '../demos/DataTableVariants.tsx?raw';
import sourceWithDataSource from '../demos/DataTableWithDataSource.tsx?raw';

const meta = {
  title: 'Data & Display/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'object',
      description:
        'Array of column definitions. Each column has an `id`, `header` text, and optionally a `cell` renderer, `accessor`, and `isSortable` flag.',
    },
    data: {
      control: 'object',
      description:
        'Array of row objects. The table reads values using each column’s `accessor` or `id`.',
    },
    variant: {
      control: 'select',
      options: ['default', 'striped', 'bordered'],
      description: 'Visual variant of the table.',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
      description: 'Controls cell padding. `sm` is compact, `lg` is spacious.',
    },
    sort: {
      control: 'object',
      description: 'Current sort state: `{ column: string, direction: "asc" | "desc" }`.',
    },
    onSort: {
      description:
        'Callback fired when a sortable column header is clicked. Receives the new sort state. Only columns with `isSortable: true` trigger this.',
      action: 'sort changed',
    },
    pagination: {
      control: 'object',
      description:
        'Pagination configuration. Includes `page`, `pageSize`, `totalItems`, `onPageChange`, and optional `onPageSizeChange`. When provided, pagination controls render below the table.',
    },
    isLoading: {
      control: 'boolean',
      description: 'When true, shows a loading indicator in the table body.',
    },
    emptyMessage: {
      control: 'text',
      description: 'Content shown when the data array is empty. Accepts strings or React nodes.',
    },
    loadingMessage: {
      control: 'text',
      description:
        'Content shown while `isLoading` is true. Accepts strings or React nodes (e.g. spinners, skeleton rows). Defaults to `"Loading…"`.',
    },
    onRowClick: {
      description: 'Callback fired when a data row is clicked. Receives the row object.',
      action: 'row clicked',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for the table element.',
    },
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic table rendering columns and rows from data.
 * Column values are read using each column’s `id` as the property key by default.
 */
export const Default: Story = {
  render: () => <DataTableDefault />,
  args: {
    columns: [],
    data: [],
  },
  parameters: {
    docs: {
      source: {
        code: sourceDefault,
        language: 'tsx',
      },
    },
  },
};

/**
 * Click column headers to sort. Mark columns with `isSortable: true` and provide an
 * `onSort` callback. The table manages visual indicators; you control the data order.
 */
export const Sorting: Story = {
  render: () => <DataTableSorting />,
  args: {
    columns: [],
    data: [],
  },
  parameters: {
    docs: {
      source: {
        code: sourceSorting,
        language: 'tsx',
      },
    },
  },
};

/**
 * Pass a `pagination` prop to render page controls below the table.
 * Includes first/prev/next/last buttons, page info, and an optional page-size selector.
 */
export const Paginated: Story = {
  render: () => <DataTablePaginated />,
  args: {
    columns: [],
    data: [],
  },
  parameters: {
    docs: {
      source: {
        code: sourcePaginated,
        language: 'tsx',
      },
    },
  },
};

/**
 * Full integration with `useDataSource` — the hook manages pagination, sorting, search,
 * loading state, and stale-request handling. Plug in any async fetcher (API call, database
 * query, etc.) and the hook returns everything DataTable needs.
 *
 * This demo uses a simulated API with 200 users, 400ms latency, sorting, and search.
 */
export const WithDataSource: Story = {
  render: () => <DataTableWithDataSource />,
  args: {
    columns: [],
    data: [],
  },
  parameters: {
    docs: {
      source: {
        code: sourceWithDataSource,
        language: 'tsx',
      },
    },
  },
};

/**
 * Type-aware filtering per column. Add a `filter` config to any column and
 * `DataTableFilters` renders the appropriate input automatically:
 *
 * | Type          | Input rendered                                                                    |
 * | ------------- | --------------------------------------------------------------------------------- |
 * | `text`        | Input, optionally with an operator selector (`contains`/`equals`/`startsWith`/`endsWith`) |
 * | `number`      | Number Input with an operator selector (`=`, `≠`, `>`, `≥`, `<`, `≤`, `between`)   |
 * | `boolean`     | Tri-state RadioGroup (Any / Yes / No) with configurable labels                    |
 * | `select`      | Select — or a searchable Combobox when `searchable: true`                         |
 * | `multiSelect` | Tagged MultiSelect                                                                |
 * | `date`        | DatePicker                                                                        |
 * | `dateRange`   | DateRangePicker                                                                   |
 *
 * ### Architecture
 *
 * ```
 * useDataTableFilters ──► DataTableFilters (UI)
 *         │
 *         └──► activeFilters: DataTableActiveFilter[]
 *                      │
 *                      ▼
 *              useDataSource.filters
 *                      │
 *                      ▼
 *              fetcher(DataFetcherParams) ──► your backend / local data
 * ```
 *
 * - **`useDataTableFilters`** — owns filter state. Text/number inputs are debounced
 *   (300ms default); click-based filters commit immediately.
 * - **`DataTableFilters`** — pure UI that reads column metadata. Two layouts: `popover`
 *   (default, compact) and `inline` (for sidebars — see the "FilteringSidebar" story).
 * - **`useDataSource`** — re-fetches when filters change and resets to page 1.
 * - **Fetcher** — the single place your code touches the data source. For local data,
 *   use `applyDataTableFilters(rows, params.filters)`. For remote data, write an
 *   adapter that translates the JSON-serializable `DataTableActiveFilter[]` into your
 *   API's query shape (see the "FilteringSidebar" story for a full adapter example).
 *
 * ### Accessibility (WCAG 2.1 AA)
 *
 * The filter bar is a labelled `region`, every control has a `Label` associated via
 * `htmlFor`, the popover trigger exposes `aria-expanded` and `aria-haspopup="dialog"`,
 * Radix traps focus in the popover and closes it on Escape, every active-filter
 * badge has a keyboard-accessible remove button with an explicit `aria-label`, and
 * an `aria-live="polite"` region announces the current filter count.
 */
export const Filtering: Story = {
  render: () => <DataTableFiltering />,
  args: {
    columns: [],
    data: [],
  },
  parameters: {
    docs: {
      source: {
        code: sourceFiltering,
        language: 'tsx',
      },
    },
  },
};

/**
 * Sidebar layout with a remote-adapter pattern. The same filter state, column
 * metadata, and `useDataSource` hook are reused — only two things differ from the
 * "Filtering" story:
 *
 * 1. **`layout="inline"`** on `DataTableFilters` renders the controls directly in a
 *    stacked form (no popover, no active-filter badges). Pair with a custom `heading`
 *    node to get a proper sidebar heading.
 *
 * 2. **Adapter pattern** — the fetcher runs a `toApiQuery(params)` function that
 *    translates `DataFetcherParams` into the backend's query shape, then sends it.
 *    The DataTable never sees backend-specific fields; the backend never sees
 *    DataTable internals. `DataTableActiveFilter[]` is JSON-serializable, so the same
 *    code works for GET (via `URLSearchParams`) or POST (JSON body).
 *
 * ```ts
 * async function fetchUsers(params: DataFetcherParams) {
 *   const query = toApiQuery(params);                          // adapter
 *   const res = await fetch('/api/users', {                    // transport
 *     method: 'POST',
 *     body: JSON.stringify(query),
 *   });
 *   return res.json();
 * }
 * ```
 *
 * The demo's simulated backend evaluates the adapter's query shape directly,
 * demonstrating that `DataTableActiveFilter[]` → backend query is a one-way,
 * lossless translation.
 */
export const FilteringSidebar: Story = {
  render: () => <DataTableFilteringSidebar />,
  args: {
    columns: [],
    data: [],
  },
  parameters: {
    docs: {
      source: {
        code: sourceFilteringSidebar,
        language: 'tsx',
      },
    },
  },
};

/**
 * Use the `cell` property on a column to render custom content — badges, icons,
 * formatted values, or interactive elements. The cell function receives the full row object.
 */
export const CustomCells: Story = {
  render: () => <DataTableCustomCells />,
  args: {
    columns: [],
    data: [],
  },
  parameters: {
    docs: {
      source: {
        code: sourceCustomCells,
        language: 'tsx',
      },
    },
  },
};

/**
 * Three visual variants: `default` (clean dividers), `striped` (alternating row colors),
 * and `bordered` (cell-level borders).
 */
export const Variants: Story = {
  render: () => <DataTableVariants />,
  args: {
    columns: [],
    data: [],
  },
  parameters: {
    docs: {
      source: {
        code: sourceVariants,
        language: 'tsx',
      },
    },
  },
};

/**
 * Three size options that control cell padding: `sm` for dense data, `default` for
 * standard use, and `lg` for spacious layouts.
 */
export const Sizes: Story = {
  render: () => <DataTableSizes />,
  args: {
    columns: [],
    data: [],
  },
  parameters: {
    docs: {
      source: {
        code: sourceSizes,
        language: 'tsx',
      },
    },
  },
};

/**
 * Empty and loading states. The table shows "No results" by default when data is empty,
 * or a custom `emptyMessage` (string or React node).
 *
 * When `isLoading` is true, the table body is replaced by a loading row marked with
 * `aria-busy="true"` and an `aria-live="polite"` cell so assistive tech announces the
 * change. The default message is `"Loading…"`; override with `loadingMessage` to render
 * any React node — a spinner, skeleton rows, or a progress indicator.
 *
 * ```tsx
 * <DataTable
 *   columns={columns}
 *   data={[]}
 *   isLoading
 *   loadingMessage={<Spinner label="Fetching users…" />}
 * />
 * ```
 */
export const EmptyAndLoading: Story = {
  render: () => <DataTableEmpty />,
  args: {
    columns: [],
    data: [],
  },
  parameters: {
    docs: {
      source: {
        code: sourceEmpty,
        language: 'tsx',
      },
    },
  },
};
