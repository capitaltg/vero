import { DataTable } from '../src/DataTable';
import type { DataTableColumn } from '../types';

interface Row {
  name: string;
  value: string;
  change: string;
}

const columns: DataTableColumn<Row>[] = [
  { id: 'name', header: 'Metric' },
  { id: 'value', header: 'Value' },
  { id: 'change', header: 'Change' },
];

const data: Row[] = [
  { name: 'Revenue', value: '$142,500', change: '+12.3%' },
  { name: 'Users', value: '8,420', change: '+5.7%' },
  { name: 'Orders', value: '1,230', change: '-2.1%' },
  { name: 'Conversion', value: '3.2%', change: '+0.4%' },
];

export const DataTableVariants = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Default</h3>
        <DataTable columns={columns} data={data} />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Striped</h3>
        <DataTable columns={columns} data={data} variant="striped" />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Bordered</h3>
        <DataTable columns={columns} data={data} variant="bordered" />
      </div>
    </div>
  );
};
