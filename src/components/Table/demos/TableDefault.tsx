import { Table } from '../src/Table';
import { people, personColumns } from './sampleData';

/**
 * The config-driven `Table`: pass `data` + `columns` and it renders through
 * the semantic primitives. The `name` column is the row header (via
 * `meta.isRowHeader`) and the salary column is right-aligned (`meta.align`).
 */
export const TableDefault = () => (
  <Table caption="Team roster" columns={personColumns} data={people} />
);
