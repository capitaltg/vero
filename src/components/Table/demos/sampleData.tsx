import type { ColumnDef } from '@tanstack/react-table';

export interface Person {
  name: string;
  role: string;
  location: string;
  startDate: string;
  salary: number;
}

export const people: Person[] = [
  {
    name: 'Ada Lovelace',
    role: 'Engineer',
    location: 'London',
    startDate: '2019-03-11',
    salary: 145000,
  },
  {
    name: 'Alan Turing',
    role: 'Researcher',
    location: 'Manchester',
    startDate: '2017-06-23',
    salary: 162000,
  },
  {
    name: 'Grace Hopper',
    role: 'Engineer',
    location: 'New York',
    startDate: '2015-12-09',
    salary: 158000,
  },
  {
    name: 'Katherine Johnson',
    role: 'Analyst',
    location: 'Hampton',
    startDate: '2018-08-26',
    salary: 139000,
  },
  {
    name: 'Mary Jackson',
    role: 'Engineer',
    location: 'Hampton',
    startDate: '2020-04-09',
    salary: 141000,
  },
];

const currency = (value: number) =>
  value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

/** Flat columns. The `name` column is marked as the row header. */
export const personColumns: ColumnDef<Person, unknown>[] = [
  { accessorKey: 'name', header: 'Name', meta: { isRowHeader: true } },
  { accessorKey: 'role', header: 'Role' },
  { accessorKey: 'location', header: 'Location' },
  { accessorKey: 'startDate', header: 'Start date' },
  {
    accessorKey: 'salary',
    header: 'Salary',
    meta: { align: 'right' },
    cell: info => currency(info.getValue<number>()),
  },
];

/** Grouped columns — produces multi-level column headers. */
export const groupedPersonColumns: ColumnDef<Person, unknown>[] = [
  { accessorKey: 'name', header: 'Name', meta: { isRowHeader: true } },
  {
    header: 'Employment',
    columns: [
      { accessorKey: 'role', header: 'Role' },
      { accessorKey: 'startDate', header: 'Start date' },
    ],
  },
  {
    header: 'Location & pay',
    columns: [
      { accessorKey: 'location', header: 'Location' },
      {
        accessorKey: 'salary',
        header: 'Salary',
        meta: { align: 'right' },
        cell: info => currency(info.getValue<number>()),
      },
    ],
  },
];
