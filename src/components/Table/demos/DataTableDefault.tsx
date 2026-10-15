import { DataTable } from '../src/DataTable';
import { people, personColumns } from './sampleData';

/**
 * The config-driven `DataTable`: pass `data` + `columns` and it renders through
 * the semantic primitives. The `name` column is the row header (via
 * `meta.isRowHeader`) and the salary column is right-aligned (`meta.align`).
 */
export const DataTableDefault = () => (
  <DataTable caption="Team roster" columns={personColumns} data={people} />
);
