import { useState } from 'react';
import { DataTable } from '../src/DataTable';
import type { DataTableColumn, DataTableSort } from '../types';

interface User {
  name: string;
  email: string;
  department: string;
  joinDate: string;
}

const columns: DataTableColumn<User>[] = [
  { id: 'name', header: 'Name', isSortable: true },
  { id: 'email', header: 'Email' },
  { id: 'department', header: 'Department', isSortable: true },
  { id: 'joinDate', header: 'Join Date', isSortable: true },
];

const initialData: User[] = [
  {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    department: 'Engineering',
    joinDate: '2023-01-15',
  },
  { name: 'Bob Smith', email: 'bob@example.com', department: 'Design', joinDate: '2022-06-01' },
  {
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    department: 'Engineering',
    joinDate: '2024-03-10',
  },
  {
    name: 'Diana Prince',
    email: 'diana@example.com',
    department: 'Marketing',
    joinDate: '2023-09-20',
  },
  { name: 'Eve Adams', email: 'eve@example.com', department: 'Design', joinDate: '2021-11-05' },
];

export const DataTableSorting = () => {
  const [sort, setSort] = useState<DataTableSort | undefined>();

  const sortedData = [...initialData].sort((a, b) => {
    if (!sort) return 0;
    const key = sort.column as keyof User;
    const aVal = a[key];
    const bVal = b[key];
    const cmp = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
    return sort.direction === 'asc' ? cmp : -cmp;
  });

  return (
    <div className="space-y-2">
      <DataTable columns={columns} data={sortedData} sort={sort} onSort={setSort} />
      <p className="text-sm text-muted-foreground">
        {sort ? `Sorted by ${sort.column} (${sort.direction})` : 'Click a column header to sort'}
      </p>
    </div>
  );
};
