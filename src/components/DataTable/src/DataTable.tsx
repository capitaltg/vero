import { cn } from '@/lib/utils';
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';
import * as React from 'react';
import { ReactNode } from 'react';
import { cellPadding, dataTableVariants } from '../constants';
import type { DataTableColumn, DataTableProps } from '../types';
import { DataTablePagination } from './DataTablePagination';

function SortIcon({ direction }: { direction?: 'asc' | 'desc' }) {
  if (direction === 'asc') return <ArrowUp className="h-4 w-4" />;
  if (direction === 'desc') return <ArrowDown className="h-4 w-4" />;
  return <ArrowUpDown className="h-4 w-4 opacity-30" />;
}

function DataTableInner<T>(
  {
    columns,
    data,
    sort,
    onSort,
    pagination,
    isLoading = false,
    loadingMessage = 'Loading…',
    emptyMessage = 'No results',
    getRowId,
    onRowClick,
    className,
    variant,
    size,
    ...props
  }: DataTableProps<T>,
  ref: React.ForwardedRef<HTMLTableElement>,
) {
  const resolvedSize = size ?? 'default';
  const resolvedVariant = variant ?? 'default';
  const padding = cellPadding[resolvedSize];

  const getCellValue = (row: T, column: DataTableColumn<T>): ReactNode => {
    if (column.cell) return column.cell(row);
    const key = column.accessor ?? column.id;
    return (row as Record<string, ReactNode>)[key] ?? null;
  };

  const handleSort = (column: DataTableColumn<T>) => {
    if (!column.isSortable || !onSort) return;
    const direction = sort?.column === column.id && sort.direction === 'asc' ? 'desc' : 'asc';
    onSort({ column: column.id, direction });
  };

  const totalColumns = columns.length;

  return (
    <div className="w-full space-y-4">
      <div className="overflow-x-auto rounded-md border">
        <table ref={ref} className={cn(dataTableVariants({ variant, size }), className)} {...props}>
          <thead>
            <tr className="bg-muted/50 border-b">
              {columns.map(column => {
                const isSortable = column.isSortable && !!onSort;
                const isActive = sort?.column === column.id;

                return (
                  <th
                    key={column.id}
                    aria-sort={
                      isActive
                        ? sort!.direction === 'asc'
                          ? 'ascending'
                          : 'descending'
                        : undefined
                    }
                    className={cn(
                      'text-left font-medium text-muted-foreground',
                      padding,
                      isSortable && 'cursor-pointer select-none',
                      resolvedVariant === 'bordered' && 'border',
                      column.headerClassName,
                    )}
                    role="columnheader"
                    tabIndex={isSortable ? 0 : undefined}
                    onClick={isSortable ? () => handleSort(column) : undefined}
                    onKeyDown={
                      isSortable
                        ? (e: React.KeyboardEvent) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              handleSort(column);
                            }
                          }
                        : undefined
                    }
                  >
                    <div className="flex items-center gap-1">
                      {column.header}
                      {isSortable ? (
                        <SortIcon direction={isActive ? sort!.direction : undefined} />
                      ) : null}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr aria-busy="true">
                <td
                  aria-live="polite"
                  className={cn('text-center text-muted-foreground', padding)}
                  colSpan={totalColumns}
                >
                  {loadingMessage}
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td
                  className={cn('text-center text-muted-foreground', padding)}
                  colSpan={totalColumns}
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row, index) => {
                const rowId = getRowId ? getRowId(row, index) : String(index);

                return (
                  <tr
                    key={rowId}
                    className={cn(
                      'hover:bg-muted/50 border-b transition-colors',
                      resolvedVariant === 'striped' && index % 2 === 1 && 'bg-muted/30',
                      onRowClick && 'cursor-pointer',
                    )}
                    onClick={onRowClick ? () => onRowClick(row) : undefined}
                  >
                    {columns.map(column => (
                      <td
                        key={column.id}
                        className={cn(
                          padding,
                          resolvedVariant === 'bordered' && 'border',
                          column.className,
                        )}
                      >
                        {getCellValue(row, column)}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {pagination ? <DataTablePagination {...pagination} /> : null}
    </div>
  );
}

const DataTable = React.forwardRef(DataTableInner) as <T>(
  props: DataTableProps<T> & React.RefAttributes<HTMLTableElement>,
) => React.ReactElement | null;

(DataTable as { displayName?: string }).displayName = 'DataTable';

export { DataTable };
