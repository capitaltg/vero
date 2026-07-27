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
 * Visual row-group sections. Each `<TableBody>` is a section introduced by a
 * spanning group header (`scope="colgroup"`). Static grouping — no collapsing
 * or aggregation (those are planned for a later phase).
 */
export const TableRootRowGroups = () => (
  <TableRoot aria-label="Employees by department">
    <TableCaption>Employees by department</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead scope="col">Name</TableHead>
        <TableHead scope="col">Role</TableHead>
        <TableHead scope="col">Location</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableHead className="bg-muted" colSpan={3} scope="colgroup">
          Engineering
        </TableHead>
      </TableRow>
      <TableRow>
        <TableHead scope="row">Ada Lovelace</TableHead>
        <TableCell>Engineer</TableCell>
        <TableCell>London</TableCell>
      </TableRow>
      <TableRow>
        <TableHead scope="row">Grace Hopper</TableHead>
        <TableCell>Engineer</TableCell>
        <TableCell>New York</TableCell>
      </TableRow>
    </TableBody>
    <TableBody>
      <TableRow>
        <TableHead className="bg-muted" colSpan={3} scope="colgroup">
          Research
        </TableHead>
      </TableRow>
      <TableRow>
        <TableHead scope="row">Alan Turing</TableHead>
        <TableCell>Researcher</TableCell>
        <TableCell>Manchester</TableCell>
      </TableRow>
    </TableBody>
  </TableRoot>
);
