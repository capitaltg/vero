// Experimental: the Table component (and its primitives) is exported for early
// feedback. v1 is feature-complete and tested, but the API may still change — or
// be removed — without a major version bump. See `PLAN.md` in this folder for
// status and the v2+ roadmap. Each export carries its own `@experimental` tag.
export { Table } from './src/Table';
export {
  TableRoot,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './src/TableRoot';

export type {
  TableProps,
  TableCaptionProps,
  TableCellProps,
  TableHeadProps,
  TableRootProps,
  TableResponsive,
  TableRowProps,
  TableSectionProps,
  TableStackBreakpoint,
} from './types';
