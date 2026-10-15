import { DataTable } from '../src/DataTable';
import { people, personColumns } from './sampleData';

/**
 * `stackedStyle="headers"` (USWDS `usa-table--stacked-header`). Below the
 * breakpoint the first cell of each row becomes the card's heading — here the
 * person's name — and the remaining cells keep their column labels.
 */
export const DataTableStackedHeaders = () => (
  <DataTable
    caption="Team roster (stacked with card headings)"
    columns={personColumns}
    data={people}
    responsive="stack"
    stackedStyle="headers"
  />
);
