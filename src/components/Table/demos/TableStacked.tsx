import { Table } from '../src/Table';
import { people, personColumns } from './sampleData';

/**
 * Stacked (card) mode. Below the `stackBreakpoint` (default `md`) each row
 * collapses into a card and every cell is prefixed with its column label, so
 * the data stays perceivable without horizontal scrolling. Resize the preview
 * narrow to see it reflow.
 *
 * Note: below the breakpoint the grid's row/column semantics are traded for the
 * card layout, so the per-cell labels carry the meaning. Prefer this mode for
 * record-style data; use `responsive="scroll"` for wide/numeric tables.
 */
export const TableStacked = () => (
  <Table
    caption="Team roster (stacked on narrow screens)"
    columns={personColumns}
    data={people}
    responsive="stack"
    stackBreakpoint="md"
  />
);
