import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../src/Table';

/**
 * Stacked (card) mode with the primitives. `responsive="stack"` is all that's
 * needed: below the breakpoint each row becomes a card and every cell is
 * labelled with its column header, which `Table` reads from the header row
 * for you. Pass `data-label` on a cell to override the derived label (see the
 * "Change" column).
 */
export const TableStacked = () => (
  <Table caption="Quarterly revenue" responsive="stack">
    <TableHeader>
      <TableRow>
        <TableHead scope="col">Quarter</TableHead>
        <TableHead className="text-right" scope="col">
          Revenue
        </TableHead>
        <TableHead className="text-right" scope="col">
          Change
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableHead scope="row">Q1</TableHead>
        <TableCell className="text-right">$1.2M</TableCell>
        <TableCell className="text-right" data-label="Change vs. Q4">
          +4%
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHead scope="row">Q2</TableHead>
        <TableCell className="text-right">$1.4M</TableCell>
        <TableCell className="text-right" data-label="Change vs. Q1">
          +17%
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHead scope="row">Q3</TableHead>
        <TableCell className="text-right">$1.3M</TableCell>
        <TableCell className="text-right" data-label="Change vs. Q2">
          −7%
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
