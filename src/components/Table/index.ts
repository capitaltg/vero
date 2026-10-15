// Experimental: the table components are exported for early feedback. v1 is
// feature-complete and tested, but the API may still change — or be removed —
// without a major version bump. See `PLAN.md` in this folder for status and the
// v2+ roadmap. Each export carries its own `@experimental` tag.
export { DataTable } from './src/DataTable';
export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './src/Table';

export type {
  DataTableProps,
  TableCaptionProps,
  TableCellProps,
  TableHeadProps,
  TableProps,
  TableResponsive,
  TableRowProps,
  TableSectionProps,
  TableStackBreakpoint,
  TableStackedStyle,
} from './types';
