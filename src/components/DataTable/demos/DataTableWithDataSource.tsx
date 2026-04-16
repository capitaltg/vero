import { useDataSource } from '@/hooks/useDataSource';
import type { DataFetcherParams } from '@/hooks/useDataSource';
import { DataTable } from '../src/DataTable';
import type { DataTableColumn } from '../types';

interface User {
  id: number;
  name: string;
  email: string;
  department: string;
  status: string;
}

const columns: DataTableColumn<User>[] = [
  { id: 'id', header: 'ID', isSortable: true },
  { id: 'name', header: 'Name', isSortable: true },
  { id: 'email', header: 'Email' },
  { id: 'department', header: 'Department', isSortable: true },
  { id: 'status', header: 'Status' },
];

// Simulate a database of 200 users
const allUsers: User[] = Array.from({ length: 200 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  department: ['Engineering', 'Design', 'Marketing', 'Sales', 'Support'][i % 5],
  status: i % 7 === 0 ? 'Inactive' : 'Active',
}));

/**
 * Simulated API fetcher that mimics a real backend with sorting, search, and pagination.
 * Replace this with a real `fetch()` call in production.
 */
async function fetchUsers(params: DataFetcherParams) {
  // Simulate network latency
  await new Promise(resolve => setTimeout(resolve, 400));

  let filtered = [...allUsers];

  // Apply search
  if (params.search) {
    const q = params.search.toLowerCase();
    filtered = filtered.filter(
      u =>
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.department.toLowerCase().includes(q),
    );
  }

  // Apply sorting
  if (params.sort) {
    const key = params.sort.column as keyof User;
    filtered.sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];
      const cmp = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      return params.sort!.direction === 'asc' ? cmp : -cmp;
    });
  }

  // Apply pagination
  const start = (params.page - 1) * params.pageSize;
  const data = filtered.slice(start, start + params.pageSize);

  return { data, totalItems: filtered.length };
}

export const DataTableWithDataSource = () => {
  const source = useDataSource(fetchUsers, {
    initialPageSize: 10,
    initialSort: { column: 'id', direction: 'asc' },
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <input
          className="h-10 w-72 rounded-sm border border-input bg-background px-3 text-sm
            placeholder:text-muted-foreground"
          placeholder="Search users..."
          type="search"
          value={source.search}
          onChange={e => source.onSearchChange(e.target.value)}
        />
        {source.error ? (
          <p className="text-sm text-destructive">Error: {source.error.message}</p>
        ) : null}
      </div>

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
