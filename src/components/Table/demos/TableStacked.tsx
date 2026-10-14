import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../src/Table';

/**
 * Stacked (card) mode with the primitives. Below the breakpoint each row
 * becomes a card, and each body cell shows its `label` above its value — pass
 * the column header, or anything more specific (see the "Change" column).
 * `DataTable` fills the labels in from its column definitions for you.
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
        <TableHead label="Quarter" scope="row">
          Q1
        </TableHead>
        <TableCell className="text-right" label="Revenue">
          $1.2M
        </TableCell>
        <TableCell className="text-right" label="Change vs. Q4">
          +4%
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHead label="Quarter" scope="row">
          Q2
        </TableHead>
        <TableCell className="text-right" label="Revenue">
          $1.4M
        </TableCell>
        <TableCell className="text-right" label="Change vs. Q1">
          +17%
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHead label="Quarter" scope="row">
          Q3
        </TableHead>
        <TableCell className="text-right" label="Revenue">
          $1.3M
        </TableCell>
        <TableCell className="text-right" label="Change vs. Q2">
          −7%
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
