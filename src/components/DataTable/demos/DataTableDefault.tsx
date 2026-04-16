import { DataTable } from '../src/DataTable';
import type { DataTableColumn } from '../types';

interface User {
  name: string;
  email: string;
  role: string;
  status: string;
}

const columns: DataTableColumn<User>[] = [
  { id: 'name', header: 'Name' },
  { id: 'email', header: 'Email' },
  { id: 'role', header: 'Role' },
  { id: 'status', header: 'Status' },
];

const data: User[] = [
  { name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active' },
  { name: 'Charlie Brown', email: 'charlie@example.com', role: 'Viewer', status: 'Inactive' },
  { name: 'Diana Prince', email: 'diana@example.com', role: 'Editor', status: 'Active' },
  { name: 'Eve Adams', email: 'eve@example.com', role: 'Viewer', status: 'Active' },
];

export const DataTableDefault = () => {
  return <DataTable columns={columns} data={data} />;
};
