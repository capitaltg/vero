import { Table } from '../src/Table';
import { people, personColumns } from './sampleData';

/**
 * Sorting enabled. Each sortable header is a real `<button>`; the `<th>` carries
 * `aria-sort`, and sort changes are announced via a polite live region. Click a
 * header (or focus it and press Enter/Space) to cycle ascending → descending →
 * unsorted.
 */
export const TableSortable = () => (
  <Table
    enableSorting
    caption="Team roster (sortable)"
    columns={personColumns}
    data={people}
    initialSorting={[{ id: 'name', desc: false }]}
  />
);
