import { useMemo } from 'react';
import { useDataSource } from '@/hooks/useDataSource';
import type { DataFetcherParams } from '@/hooks/useDataSource';
import { useDataTableFilters } from '@/hooks/useDataTableFilters';
import { DataTable } from '../src/DataTable';
import { DataTableFilters } from '../src/DataTableFilters';
import type { DataTableColumn } from '../types';

interface User {
  id: number;
  name: string;
  email: string;
  department: string;
  status: string;
  age: number;
  joinedAt: Date;
}

const departments = ['Engineering', 'Design', 'Marketing', 'Sales', 'Support'];
const statuses = ['active', 'invited', 'suspended'];

const allUsers: User[] = Array.from({ length: 200 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  department: departments[i % departments.length],
  status: statuses[i % statuses.length],
  age: 22 + (i % 40),
  joinedAt: new Date(2020, 0, 1 + i * 3),
}));

const columns: DataTableColumn<User>[] = [
  { id: 'id', header: 'ID', isSortable: true },
  {
    id: 'name',
    header: 'Name',
    isSortable: true,
    filter: { type: 'text', placeholder: 'Search name' },
  },
  {
    id: 'department',
    header: 'Department',
    isSortable: true,
    filter: {
      type: 'select',
      searchable: true,
      options: departments.map(d => ({ value: d, label: d })),
    },
  },
  {
    id: 'status',
    header: 'Status',
    filter: {
      type: 'multiSelect',
      options: statuses.map(s => ({ value: s, label: s[0].toUpperCase() + s.slice(1) })),
    },
  },
  {
    id: 'age',
    header: 'Age',
    isSortable: true,
    filter: { type: 'number', min: 0, max: 120 },
  },
  {
    id: 'joinedAt',
    header: 'Joined',
    isSortable: true,
    filter: { type: 'dateRange' },
    cell: row => row.joinedAt.toLocaleDateString(),
  },
];

// ---------------------------------------------------------------------------
// 1. Adapter: translate DataFetcherParams → your API's query shape.
//
// DataTable produces a normalized, JSON-serializable `DataTableActiveFilter[]`.
// You decide how to turn that into a request. Here the shape is a flat list of
// `{ field, op, value }` conditions — similar to what many search APIs accept.
// Swap it for URL params, GraphQL variables, an Elasticsearch DSL, or whatever
// your backend uses.
// ---------------------------------------------------------------------------

type ApiOp =
  | 'eq'
  | 'neq'
  | 'gt'
  | 'gte'
  | 'lt'
  | 'lte'
  | 'contains'
  | 'equals'
  | 'startsWith'
  | 'endsWith'
  | 'in'
  | 'between';

interface ApiCondition {
  field: string;
  op: ApiOp;
  value?: string | number | boolean | Date;
  values?: string[];
  from?: number | Date;
  to?: number | Date;
}

interface ApiQuery {
  page: number;
  pageSize: number;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
  conditions: ApiCondition[];
}

function toApiQuery(params: DataFetcherParams): ApiQuery {
  const conditions: ApiCondition[] = [];

  for (const { columnId, value } of params.filters ?? []) {
    switch (value.type) {
      case 'text':
        conditions.push({ field: columnId, op: value.operator, value: value.value });
        break;
      case 'number': {
        if (value.operator === 'between') {
          conditions.push({
            field: columnId,
            op: 'between',
            from: value.value ?? undefined,
            to: value.valueMax ?? undefined,
          });
        } else if (value.value != null) {
          conditions.push({ field: columnId, op: value.operator, value: value.value });
        }
        break;
      }
      case 'boolean':
      case 'select':
        conditions.push({ field: columnId, op: 'eq', value: value.value });
        break;
      case 'multiSelect':
        conditions.push({ field: columnId, op: 'in', values: value.value });
        break;
      case 'date':
        conditions.push({ field: columnId, op: 'eq', value: value.value });
        break;
      case 'dateRange':
        conditions.push({
          field: columnId,
          op: 'between',
          from: value.value.from,
          to: value.value.to,
        });
        break;
    }
  }

  return {
    page: params.page,
    pageSize: params.pageSize,
    sortBy: params.sort?.column,
    sortDir: params.sort?.direction,
    conditions,
  };
}

// ---------------------------------------------------------------------------
// 2. Simulated backend — executes the adapter's query directly.
//
// In production this is a network call:
//
//     const res = await fetch('/api/users', {
//       method: 'POST',
//       headers: { 'content-type': 'application/json' },
//       body: JSON.stringify(toApiQuery(params)),
//     });
//     return res.json();
//
// For a GET-style API, serialize to a query string instead:
//
//     const res = await fetch(`/api/users?${new URLSearchParams(toApiQuery(params))}`);
//
// The function below mimics what a backend would do — evaluate conditions
// server-side. It shows that the adapter's shape is all the server needs.
// ---------------------------------------------------------------------------

function evaluateCondition(cell: unknown, c: ApiCondition): boolean {
  if (c.op === 'in') {
    return (c.values ?? []).includes(String(cell));
  }
  if (c.op === 'between') {
    if (c.from instanceof Date || c.to instanceof Date) {
      if (!(cell instanceof Date)) return false;
      if (c.from instanceof Date && cell < c.from) return false;
      if (c.to instanceof Date && cell > c.to) return false;
      return true;
    }
    const n = Number(cell);
    if (typeof c.from === 'number' && n < c.from) return false;
    if (typeof c.to === 'number' && n > c.to) return false;
    return true;
  }

  const v = c.value;
  switch (c.op) {
    case 'eq':
      return cell === v;
    case 'neq':
      return cell !== v;
    case 'gt':
      return typeof v === 'number' && Number(cell) > v;
    case 'gte':
      return typeof v === 'number' && Number(cell) >= v;
    case 'lt':
      return typeof v === 'number' && Number(cell) < v;
    case 'lte':
      return typeof v === 'number' && Number(cell) <= v;
    case 'contains':
      return String(cell ?? '')
        .toLowerCase()
        .includes(String(v).toLowerCase());
    case 'equals':
      return String(cell ?? '').toLowerCase() === String(v).toLowerCase();
    case 'startsWith':
      return String(cell ?? '')
        .toLowerCase()
        .startsWith(String(v).toLowerCase());
    case 'endsWith':
      return String(cell ?? '')
        .toLowerCase()
        .endsWith(String(v).toLowerCase());
  }
  return true;
}

async function queryApi(query: ApiQuery): Promise<{ data: User[]; totalItems: number }> {
  await new Promise(resolve => setTimeout(resolve, 250));

  let rows = allUsers.filter(row =>
    query.conditions.every(c =>
      evaluateCondition((row as unknown as Record<string, unknown>)[c.field], c),
    ),
  );

  if (query.sortBy) {
    const key = query.sortBy as keyof User;
    rows = [...rows].sort((a, b) => {
      const av = a[key];
      const bv = b[key];
      const cmp = av < bv ? -1 : av > bv ? 1 : 0;
      return query.sortDir === 'asc' ? cmp : -cmp;
    });
  }

  const start = (query.page - 1) * query.pageSize;
  return {
    data: rows.slice(start, start + query.pageSize),
    totalItems: rows.length,
  };
}

// The fetcher is the only place that talks to your backend. It runs the
// adapter and hands the translated query to the API. `useDataSource` is
// agnostic — it never sees the backend-specific shape.
async function fetchUsers(params: DataFetcherParams) {
  return queryApi(toApiQuery(params));
}

export const DataTableFilteringSidebar = () => {
  const filterState = useDataTableFilters();

  const source = useDataSource(fetchUsers, {
    initialPageSize: 10,
    initialSort: { column: 'id', direction: 'asc' },
    filters: filterState.activeFilters,
  });

  const filterProps = useMemo(
    () => ({
      columns,
      filters: filterState.filters,
      onFilterChange: filterState.setFilter,
      onClearAll: filterState.clearAll,
    }),
    [filterState.filters, filterState.setFilter, filterState.clearAll],
  );

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[240px_1fr]">
      <aside className="rounded-md border p-4">
        <DataTableFilters
          {...filterProps}
          heading={<h2 className="text-base font-semibold">Refine results</h2>}
          layout="inline"
        />
      </aside>

      <DataTable
        columns={columns}
        data={source.data}
        getRowId={row => String(row.id)}
        isLoading={source.isLoading}
        pagination={{
          page: source.page,
          pageSize: source.pageSize,
          totalItems: source.totalItems,
          onPageChange: source.onPageChange,
          onPageSizeChange: source.onPageSizeChange,
        }}
        sort={source.sort}
        onSort={source.onSort}
      />
    </div>
  );
};
