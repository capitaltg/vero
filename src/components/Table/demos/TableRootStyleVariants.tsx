import {
  TableRoot,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../src/TableRoot';
import type { TableRootProps } from '../types';

const rows = [
  { fruit: 'Apples', qty: 12, price: '$0.50' },
  { fruit: 'Bananas', qty: 8, price: '$0.25' },
  { fruit: 'Cherries', qty: 30, price: '$0.10' },
];

const Sample = ({ label, ...props }: { label: string } & TableRootProps) => (
  <TableRoot aria-label={label} responsive="none" {...props}>
    <TableCaption>{label}</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead scope="col">Fruit</TableHead>
        <TableHead className="text-right" scope="col">
          Qty
        </TableHead>
        <TableHead className="text-right" scope="col">
          Price
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {rows.map(row => (
        <TableRow key={row.fruit}>
          <TableHead scope="row">{row.fruit}</TableHead>
          <TableCell className="text-right">{row.qty}</TableCell>
          <TableCell className="text-right">{row.price}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </TableRoot>
);

/** The `variant`, `striped`, and `density` style options. */
export const TableRootStyleVariants = () => (
  <div className="flex flex-col gap-8">
    <Sample label="Bordered (default)" />
    <Sample striped label="Striped" />
    <Sample label="Borderless" variant="borderless" />
    <Sample density="compact" label="Compact" />
  </div>
);
