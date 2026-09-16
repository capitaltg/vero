import { DataTable } from '../src/DataTable';
import { groupedPersonColumns, people } from './sampleData';

/**
 * Nested `columns` in the column definitions produce multi-level headers, with
 * the correct `colSpan` and `scope="colgroup"` applied automatically.
 */
export const DataTableColumnGroups = () => (
  <DataTable caption="Team roster (grouped columns)" columns={groupedPersonColumns} data={people} />
);
