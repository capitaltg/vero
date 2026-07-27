import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type Column,
  type OnChangeFn,
  type SortingState,
} from '@tanstack/react-table';
import { ArrowDown, ArrowUp, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';
import { tableStackLabelVisibility } from '../constants';
import type { TableProps } from '../types';
import {
  TableRoot,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './TableRoot';

const alignClass = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
} as const;

const alignJustify = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
} as const;

/** Best-effort human label for a column (its string header, else its id). */
function getColumnLabel<TData>(column: Column<TData, unknown>): string {
  const header = column.columnDef.header;
  return typeof header === 'string' ? header : column.id;
}

/** Label shown in front of a cell's value in stacked (card) mode. */
function getStackLabel<TData>(column: Column<TData, unknown>): string {
  return column.columnDef.meta?.stackedLabel ?? getColumnLabel(column);
}

function SortIcon({ state }: { state: false | 'asc' | 'desc' }) {
  const Icon = state === 'asc' ? ArrowUp : state === 'desc' ? ArrowDown : ChevronsUpDown;
  return (
    <Icon aria-hidden="true" className={cn('ml-1 h-4 w-4 shrink-0', !state && 'opacity-50')} />
  );
}

function TableInner<TData>(
  {
    data,
    columns,
    caption,
    captionHidden = false,
    enableSorting = false,
    initialSorting,
    sorting: controlledSorting,
    onSortingChange,
    responsive = 'scroll',
    stackBreakpoint = 'md',
    variant,
    striped,
    density,
    emptyState = 'No data available',
    footer,
    getRowId,
    className,
    ...props
  }: TableProps<TData>,
  ref: React.ForwardedRef<HTMLTableElement>,
) {
  const ariaLabelProp = props['aria-label'];
  const ariaLabelledby = props['aria-labelledby'];

  const [internalSorting, setInternalSorting] = React.useState<SortingState>(initialSorting ?? []);
  const isControlled = controlledSorting !== undefined;
  const sorting = isControlled ? controlledSorting : internalSorting;

  const handleSortingChange: OnChangeFn<SortingState> = React.useCallback(
    updater => {
      if (!isControlled) {
        setInternalSorting(prev => (typeof updater === 'function' ? updater(prev) : updater));
      }
      onSortingChange?.(updater);
    },
    [isControlled, onSortingChange],
  );

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    enableSorting,
    onSortingChange: handleSortingChange,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    getRowId,
  });

  // Announce sort changes to screen readers via a polite live region.
  const [announcement, setAnnouncement] = React.useState('');
  const hasMounted = React.useRef(false);
  React.useEffect(() => {
    if (!enableSorting) return;
    // Don't announce the initial (possibly pre-sorted) state on mount.
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    if (sorting.length === 0) {
      setAnnouncement('TableRoot is no longer sorted');
      return;
    }
    const primary = sorting[0];
    const column = table.getColumn(primary.id);
    const label = column ? getColumnLabel(column) : primary.id;
    setAnnouncement(`Sorted by ${label}, ${primary.desc ? 'descending' : 'ascending'}`);
  }, [sorting, enableSorting, table]);

  const rows = table.getRowModel().rows;
  const leafColumnCount = table.getVisibleLeafColumns().length;

  // Name the scroll region after the caption text (when it's a plain string) or
  // an explicit aria-label. A non-string caption still names the <table> via
  // <caption>; the region then stays a plain focusable scroll container.
  const captionText = typeof caption === 'string' ? caption : undefined;
  const regionLabel = ariaLabelProp ?? captionText;

  return (
    <>
      <TableRoot
        ref={ref}
        aria-label={regionLabel}
        aria-labelledby={ariaLabelledby}
        className={className}
        density={density}
        responsive={responsive}
        stackBreakpoint={stackBreakpoint}
        striped={striped}
        variant={variant}
      >
        {caption != null ? <TableCaption hidden={captionHidden}>{caption}</TableCaption> : null}

        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                const canSort = enableSorting && header.column.getCanSort();
                const sorted = header.column.getIsSorted();
                const align = header.column.columnDef.meta?.align ?? 'left';
                const scope = header.colSpan > 1 ? 'colgroup' : 'col';

                // A placeholder header exists only to keep grouped columns
                // aligned (e.g. the top-left corner above an ungrouped column).
                // Render it as an empty, hidden cell so it doesn't register as
                // an empty table header for assistive tech.
                if (header.isPlaceholder) {
                  return (
                    <td
                      key={header.id}
                      aria-hidden="true"
                      className="bg-muted"
                      colSpan={header.colSpan}
                    />
                  );
                }

                return (
                  <TableHead
                    key={header.id}
                    aria-sort={
                      !canSort
                        ? undefined
                        : sorted === 'asc'
                          ? 'ascending'
                          : sorted === 'desc'
                            ? 'descending'
                            : 'none'
                    }
                    className={alignClass[align]}
                    colSpan={header.colSpan}
                    scope={scope}
                  >
                    {canSort ? (
                      <button
                        className={cn(
                          'inline-flex w-full items-center font-bold',
                          alignJustify[align],
                          styles.focusRingVisible,
                        )}
                        type="button"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        <SortIcon state={sorted} />
                      </button>
                    ) : (
                      flexRender(header.column.columnDef.header, header.getContext())
                    )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {rows.length === 0 ? (
            <TableRow>
              <TableCell className="text-center text-muted-foreground" colSpan={leafColumnCount}>
                {emptyState}
              </TableCell>
            </TableRow>
          ) : (
            rows.map(row => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map(cell => {
                  const isRowHeader = cell.column.columnDef.meta?.isRowHeader;
                  const align = cell.column.columnDef.meta?.align ?? 'left';
                  const value = flexRender(cell.column.columnDef.cell, cell.getContext());
                  const content =
                    responsive === 'stack' ? (
                      <>
                        <span
                          className={cn(
                            'vero-table-stacked-label mr-4 font-bold text-foreground',
                            tableStackLabelVisibility[stackBreakpoint],
                          )}
                        >
                          {getStackLabel(cell.column)}
                        </span>
                        <span className="vero-table-cell-value">{value}</span>
                      </>
                    ) : (
                      value
                    );

                  return isRowHeader ? (
                    <TableHead key={cell.id} className={alignClass[align]} scope="row">
                      {content}
                    </TableHead>
                  ) : (
                    <TableCell key={cell.id} className={alignClass[align]}>
                      {content}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          )}
        </TableBody>

        {footer != null ? (
          <TableFooter>
            <TableRow>
              <TableCell colSpan={leafColumnCount}>{footer}</TableCell>
            </TableRow>
          </TableFooter>
        ) : null}
      </TableRoot>

      <div aria-live="polite" className="sr-only" role="status">
        {announcement}
      </div>
    </>
  );
}

const TableBase = React.forwardRef(TableInner);
TableBase.displayName = 'Table';

// forwardRef erases the generic, so re-assert it (same pattern as Autocomplete).
const Table = TableBase as unknown as <TData>(
  props: TableProps<TData> & { ref?: React.ForwardedRef<HTMLTableElement> },
) => React.ReactElement;

export { Table };
