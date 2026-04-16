import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import * as React from 'react';
import { DataTablePaginationProps } from '../types';

const DataTablePagination = React.forwardRef<HTMLElement, DataTablePaginationProps>(
  (
    {
      page,
      pageSize,
      totalItems,
      onPageChange,
      onPageSizeChange,
      pageSizeOptions = [10, 20, 50, 100],
      className,
      ...props
    },
    ref,
  ) => {
    const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
    const startItem = totalItems === 0 ? 0 : (page - 1) * pageSize + 1;
    const endItem = Math.min(page * pageSize, totalItems);

    const buttonClass = cn(
      'inline-flex h-8 w-8 items-center justify-center rounded-sm border text-sm',
      styles.focusRingVisible,
    );

    return (
      <nav
        ref={ref}
        aria-label="Pagination"
        className={cn('flex items-center justify-between', className)}
        {...props}
      >
        <p className="text-sm text-muted-foreground">
          {totalItems === 0 ? (
            'No results'
          ) : (
            <>
              Showing <span className="font-medium">{startItem}</span> to{' '}
              <span className="font-medium">{endItem}</span> of{' '}
              <span className="font-medium">{totalItems}</span> results
            </>
          )}
        </p>

        <div className="flex items-center gap-4">
          {onPageSizeChange ? (
            <div className="flex items-center gap-2">
              <label className="text-sm text-muted-foreground" htmlFor="page-size-select">
                Rows per page
              </label>
              <select
                className="h-8 rounded-sm border border-input bg-background px-2 text-sm"
                id="page-size-select"
                value={pageSize}
                onChange={e => onPageSizeChange(Number(e.target.value))}
              >
                {pageSizeOptions.map(size => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          ) : null}

          <div className="flex items-center gap-1">
            <button
              aria-label="Go to first page"
              className={cn(
                buttonClass,
                page <= 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-muted',
              )}
              disabled={page <= 1}
              type="button"
              onClick={() => onPageChange(1)}
            >
              <ChevronsLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Go to previous page"
              className={cn(
                buttonClass,
                page <= 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-muted',
              )}
              disabled={page <= 1}
              type="button"
              onClick={() => onPageChange(page - 1)}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <span className="px-2 text-sm text-muted-foreground">
              Page {page} of {totalPages}
            </span>

            <button
              aria-label="Go to next page"
              className={cn(
                buttonClass,
                page >= totalPages ? 'cursor-not-allowed opacity-50' : 'hover:bg-muted',
              )}
              disabled={page >= totalPages}
              type="button"
              onClick={() => onPageChange(page + 1)}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <button
              aria-label="Go to last page"
              className={cn(
                buttonClass,
                page >= totalPages ? 'cursor-not-allowed opacity-50' : 'hover:bg-muted',
              )}
              disabled={page >= totalPages}
              type="button"
              onClick={() => onPageChange(totalPages)}
            >
              <ChevronsRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </nav>
    );
  },
);
DataTablePagination.displayName = 'DataTablePagination';

export { DataTablePagination };
