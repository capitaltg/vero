import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../src/Table';

/**
 * A small, static table composed from the primitives — no `data`/`columns`
 * config needed. Note `scope="col"` on the column headers and `scope="row"` on
 * the first cell of each body row.
 */
export const TableBasic = () => (
  <Table caption="Quarterly revenue">
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
        <TableCell className="text-right">+4%</TableCell>
      </TableRow>
      <TableRow>
        <TableHead scope="row">Q2</TableHead>
        <TableCell className="text-right">$1.4M</TableCell>
        <TableCell className="text-right">+17%</TableCell>
      </TableRow>
      <TableRow>
        <TableHead scope="row">Q3</TableHead>
        <TableCell className="text-right">$1.3M</TableCell>
        <TableCell className="text-right">−7%</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
