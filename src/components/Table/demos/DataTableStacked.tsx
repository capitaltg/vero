import { DataTable } from '../src/DataTable';
import { people, personColumns } from './sampleData';

/**
 * Stacked (card) mode — the USWDS `usa-table--stacked` variant. Below the
 * `stackBreakpoint` (default `md`) each row collapses into a card and every
 * cell is labelled with its column header, so the data stays perceivable
 * without horizontal scrolling. `DataTable` fills those labels in from the
 * column definitions; there is nothing extra to wire up. Resize the preview
 * narrow to see it reflow.
 *
 * Note: below the breakpoint the grid's row/column semantics are traded for the
 * card layout, so the per-cell labels carry the meaning — and because the header
 * row is hidden there, sortable headers are only reachable at wider widths.
 * Prefer this mode for record-style data; use `responsive="scroll"` for
 * wide/numeric tables.
 */
export const DataTableStacked = () => (
  <DataTable
    caption="Team roster (stacked on narrow screens)"
    columns={personColumns}
    data={people}
    responsive="stack"
    stackBreakpoint="md"
  />
);
