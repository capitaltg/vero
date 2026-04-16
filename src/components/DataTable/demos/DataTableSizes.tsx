import { DataTable } from '../src/DataTable';
import type { DataTableColumn } from '../types';

interface Row {
  name: string;
  email: string;
  role: string;
}

const columns: DataTableColumn<Row>[] = [
  { id: 'name', header: 'Name' },
  { id: 'email', header: 'Email' },
  { id: 'role', header: 'Role' },
];

const data: Row[] = [
  { name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { name: 'Bob Smith', email: 'bob@example.com', role: 'Editor' },
  { name: 'Charlie Brown', email: 'charlie@example.com', role: 'Viewer' },
];

export const DataTableSizes = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Small</h3>
        <DataTable columns={columns} data={data} size="sm" />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Default</h3>
        <DataTable columns={columns} data={data} size="default" />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Large</h3>
        <DataTable columns={columns} data={data} size="lg" />
      </div>
    </div>
  );
};
