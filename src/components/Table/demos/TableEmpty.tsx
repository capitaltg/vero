import { Table } from '../src/Table';
import { personColumns, type Person } from './sampleData';

/** When `data` is empty, the `emptyState` content spans the full width. */
export const TableEmpty = () => (
  <Table
    caption="Team roster"
    columns={personColumns}
    data={[] as Person[]}
    emptyState="No team members found."
  />
);
