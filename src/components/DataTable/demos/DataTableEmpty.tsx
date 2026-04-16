import { useState } from 'react';
import { DataTable } from '../src/DataTable';
import type { DataTableColumn } from '../types';

interface Row {
  name: string;
  email: string;
}

const columns: DataTableColumn<Row>[] = [
  { id: 'name', header: 'Name' },
  { id: 'email', header: 'Email' },
];

export const DataTableEmpty = () => {
  const [isLoading, setIsLoading] = useState(false);

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Empty state</h3>
        <DataTable columns={columns} data={[]} />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Custom empty message</h3>
        <DataTable
          columns={columns}
          data={[]}
          emptyMessage={
            <div className="space-y-1 py-4">
              <p className="font-medium">No users found</p>
              <p className="text-sm text-muted-foreground">Try adjusting your search or filters.</p>
            </div>
          }
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Loading state</h3>
        <button
          className="rounded-sm border border-input bg-background px-3 py-1.5 text-sm
            hover:bg-muted"
          type="button"
          onClick={simulateLoading}
        >
          Simulate loading
        </button>
        <DataTable columns={columns} data={[]} isLoading={isLoading} />
      </div>
    </div>
  );
};
