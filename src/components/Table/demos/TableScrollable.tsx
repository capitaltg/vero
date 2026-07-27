import type { ColumnDef } from '@tanstack/react-table';
import { Table } from '../src/Table';

interface Metric {
  month: string;
  visitors: number;
  signups: number;
  active: number;
  churn: number;
  revenue: number;
  refunds: number;
}

const data: Metric[] = [
  {
    month: 'January',
    visitors: 12400,
    signups: 820,
    active: 9600,
    churn: 120,
    revenue: 48200,
    refunds: 900,
  },
  {
    month: 'February',
    visitors: 13850,
    signups: 910,
    active: 10250,
    churn: 140,
    revenue: 52100,
    refunds: 1100,
  },
  {
    month: 'March',
    visitors: 15020,
    signups: 1040,
    active: 11100,
    churn: 160,
    revenue: 57800,
    refunds: 750,
  },
];

const num = (n: number) => n.toLocaleString('en-US');

const columns: ColumnDef<Metric, unknown>[] = [
  { accessorKey: 'month', header: 'Month', meta: { isRowHeader: true } },
  {
    accessorKey: 'visitors',
    header: 'Visitors',
    meta: { align: 'right' },
    cell: i => num(i.getValue<number>()),
  },
  {
    accessorKey: 'signups',
    header: 'Sign-ups',
    meta: { align: 'right' },
    cell: i => num(i.getValue<number>()),
  },
  {
    accessorKey: 'active',
    header: 'Active users',
    meta: { align: 'right' },
    cell: i => num(i.getValue<number>()),
  },
  {
    accessorKey: 'churn',
    header: 'Churned',
    meta: { align: 'right' },
    cell: i => num(i.getValue<number>()),
  },
  {
    accessorKey: 'revenue',
    header: 'Revenue',
    meta: { align: 'right' },
    cell: i => `$${num(i.getValue<number>())}`,
  },
  {
    accessorKey: 'refunds',
    header: 'Refunds',
    meta: { align: 'right' },
    cell: i => `$${num(i.getValue<number>())}`,
  },
];

/**
 * Scrollable mode (the default). When the table is wider than its container it
 * gets a keyboard-focusable, labeled horizontal scroll region so keyboard-only
 * users can reach the off-screen columns. The wrapper is constrained here to
 * force the overflow.
 */
export const TableScrollable = () => (
  <div className="max-w-xl">
    <Table caption="Monthly metrics" columns={columns} data={data} />
  </div>
);
