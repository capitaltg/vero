import { DataTable } from '../src/DataTable';
import { people, personColumns } from './sampleData';

/**
 * `stickyHeader` pins the column headers while the rows scroll past them. The
 * table needs a scrolling ancestor for that — the page itself, or a
 * height-constrained container like the one here. Pair it with
 * `responsive="none"` so the default horizontal scroll wrapper doesn't become
 * the (non-scrolling) sticky context.
 */
export const DataTableStickyHeader = () => (
  <div className="max-h-64 overflow-y-auto">
    <DataTable
      captionHidden
      stickyHeader
      caption="Team roster"
      columns={personColumns}
      data={[...people, ...people]}
      responsive="none"
    />
  </div>
);
