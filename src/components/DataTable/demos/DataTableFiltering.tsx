import { useMemo } from 'react';
import { useDataSource } from '@/hooks/useDataSource';
import type { DataFetcherParams } from '@/hooks/useDataSource';
import { useDataTableFilters } from '@/hooks/useDataTableFilters';
import { applyDataTableFilters } from '@/lib/dataTableFilters';
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
  isActive: boolean;
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
  isActive: i % 7 !== 0,
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
    id: 'email',
    header: 'Email',
    filter: { type: 'text', placeholder: 'Search email', showOperator: true },
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
    id: 'isActive',
    header: 'Active',
    filter: { type: 'boolean', trueLabel: 'Yes', falseLabel: 'No' },
    cell: row => (row.isActive ? 'Yes' : 'No'),
  },
  {
    id: 'joinedAt',
    header: 'Joined',
    isSortable: true,
    filter: { type: 'dateRange' },
    cell: row => row.joinedAt.toLocaleDateString(),
  },
];

/**
 * Local fetcher: applies filters + sort + pagination against an in-memory dataset.
 * The `applyDataTableFilters` helper reuses the same filter semantics as the UI,
 * so you never have to re-implement the matching logic.
 */
async function fetchUsers(params: DataFetcherParams) {
  await new Promise(resolve => setTimeout(resolve, 250));

  let rows = applyDataTableFilters(allUsers, params.filters);

  if (params.sort) {
    const key = params.sort.column as keyof User;
    rows = [...rows].sort((a, b) => {
      const av = a[key];
      const bv = b[key];
      const cmp = av < bv ? -1 : av > bv ? 1 : 0;
      return params.sort!.direction === 'asc' ? cmp : -cmp;
    });
  }

  const start = (params.page - 1) * params.pageSize;
  return {
    data: rows.slice(start, start + params.pageSize),
    totalItems: rows.length,
  };
}

export const DataTableFiltering = () => {
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
    <div className="space-y-4">
      <DataTableFilters {...filterProps} />
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
