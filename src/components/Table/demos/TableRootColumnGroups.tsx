import {
  TableRoot,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../src/TableRoot';

/**
 * Multi-level column headers. Group headers span their child columns with
 * `colSpan` and use `scope="colgroup"`; the leaf headers use `scope="col"`.
 */
export const TableRootColumnGroups = () => (
  <TableRoot aria-label="Regional sales by half">
    <TableCaption>Regional sales by half</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead rowSpan={2} scope="col">
          Region
        </TableHead>
        <TableHead className="text-center" colSpan={2} scope="colgroup">
          First half
        </TableHead>
        <TableHead className="text-center" colSpan={2} scope="colgroup">
          Second half
        </TableHead>
      </TableRow>
      <TableRow>
        <TableHead className="text-right" scope="col">
          Q1
        </TableHead>
        <TableHead className="text-right" scope="col">
          Q2
        </TableHead>
        <TableHead className="text-right" scope="col">
          Q3
        </TableHead>
        <TableHead className="text-right" scope="col">
          Q4
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableHead scope="row">North</TableHead>
        <TableCell className="text-right">$120k</TableCell>
        <TableCell className="text-right">$140k</TableCell>
        <TableCell className="text-right">$132k</TableCell>
        <TableCell className="text-right">$158k</TableCell>
      </TableRow>
      <TableRow>
        <TableHead scope="row">South</TableHead>
        <TableCell className="text-right">$98k</TableCell>
        <TableCell className="text-right">$112k</TableCell>
        <TableCell className="text-right">$105k</TableCell>
        <TableCell className="text-right">$121k</TableCell>
      </TableRow>
    </TableBody>
  </TableRoot>
);
