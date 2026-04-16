import type { DataTableActiveFilter, DataTableSort } from '@/components/DataTable/types';
import { useCallback, useEffect, useRef, useState } from 'react';

export interface DataFetcherParams {
  /** Current page (1-indexed) */
  page: number;
  /** Items per page */
  pageSize: number;
  /** Current sort state */
  sort?: DataTableSort;
  /** Current search query (only set when non-empty) */
  search?: string;
  /** Current column filters (only set when non-empty) */
  filters?: DataTableActiveFilter[];
}

export interface DataFetcherResult<T> {
  /** Page of data */
  data: T[];
  /** Total number of items across all pages */
  totalItems: number;
}

export type DataFetcher<T> = (params: DataFetcherParams) => Promise<DataFetcherResult<T>>;

export interface UseDataSourceOptions {
  /** Initial page size. @default 10 */
  initialPageSize?: number;
  /** Initial sort state */
  initialSort?: DataTableSort;
  /**
   * External filter state — typically from `useDataTableFilters().activeFilters`.
   * Changes trigger a refetch and reset to page 1. Pass a stable reference
   * (memoized) to avoid unnecessary refetches.
   */
  filters?: DataTableActiveFilter[];
  /** Debounce delay for search changes in milliseconds. @default 300 */
  debounceMs?: number;
}

export interface UseDataSourceReturn<T> {
  /** Current page of data */
  data: T[];
  /** Total items across all pages */
  totalItems: number;
  /** Whether a fetch is in progress */
  isLoading: boolean;
  /** Error from the most recent fetch, or null */
  error: Error | null;
  /** Current page (1-indexed) */
  page: number;
  /** Current page size */
  pageSize: number;
  /** Current sort state */
  sort?: DataTableSort;
  /** Current search query */
  search: string;
  /** Navigate to a page */
  onPageChange: (page: number) => void;
  /** Change page size (resets to page 1) */
  onPageSizeChange: (pageSize: number) => void;
  /** Change sort (resets to page 1) */
  onSort: (sort: DataTableSort) => void;
  /** Update search query (resets to page 1, fetch is debounced) */
  onSearchChange: (search: string) => void;
  /** Re-fetch the current page */
  refresh: () => void;
}

/**
 * Hook that connects an async data fetcher to DataTable state.
 *
 * Manages pagination, sorting, and search state. Automatically fetches
 * data when any parameter changes. Search changes are debounced.
 *
 * Filter state is external — typically owned by `useDataTableFilters` and
 * passed in via `options.filters`. Changes to filters reset to page 1
 * and trigger a refetch.
 *
 * @example
 * ```tsx
 * const filters = useDataTableFilters();
 * const source = useDataSource(fetchUsers, { filters: filters.activeFilters });
 * ```
 */
export function useDataSource<T>(
  fetcher: DataFetcher<T>,
  options: UseDataSourceOptions = {},
): UseDataSourceReturn<T> {
  const { initialPageSize = 10, initialSort, debounceMs = 300, filters } = options;

  const [data, setData] = useState<T[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [sort, setSort] = useState<DataTableSort | undefined>(initialSort);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Track the latest request so stale responses are discarded
  const requestIdRef = useRef(0);

  // Keep a stable reference to the fetcher so effect dependencies stay simple
  const fetcherRef = useRef(fetcher);
  fetcherRef.current = fetcher;

  // Reset to page 1 whenever the external filters reference changes
  const filtersRef = useRef(filters);
  useEffect(() => {
    if (filtersRef.current !== filters) {
      filtersRef.current = filters;
      setPage(1);
    }
  }, [filters]);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, debounceMs);
    return () => clearTimeout(timer);
  }, [search, debounceMs]);

  // Fetch data when params change
  useEffect(() => {
    const currentRequestId = ++requestIdRef.current;
    setIsLoading(true);
    setError(null);

    const params: DataFetcherParams = {
      page,
      pageSize,
      sort,
      search: debouncedSearch || undefined,
      filters: filters && filters.length > 0 ? filters : undefined,
    };

    fetcherRef
      .current(params)
      .then(result => {
        if (currentRequestId === requestIdRef.current) {
          setData(result.data);
          setTotalItems(result.totalItems);
          setIsLoading(false);
        }
      })
      .catch(err => {
        if (currentRequestId === requestIdRef.current) {
          setError(err instanceof Error ? err : new Error(String(err)));
          setIsLoading(false);
        }
      });
  }, [page, pageSize, sort, debouncedSearch, filters]);

  const onPageChange = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  const onPageSizeChange = useCallback((newPageSize: number) => {
    setPageSize(newPageSize);
    setPage(1);
  }, []);

  const onSort = useCallback((newSort: DataTableSort) => {
    setSort(newSort);
    setPage(1);
  }, []);

  const onSearchChange = useCallback((newSearch: string) => {
    setSearch(newSearch);
    setPage(1);
  }, []);

  const refresh = useCallback(() => {
    const currentRequestId = ++requestIdRef.current;
    setIsLoading(true);
    setError(null);

    const params: DataFetcherParams = {
      page,
      pageSize,
      sort,
      search: debouncedSearch || undefined,
      filters: filters && filters.length > 0 ? filters : undefined,
    };

    fetcherRef
      .current(params)
      .then(result => {
        if (currentRequestId === requestIdRef.current) {
          setData(result.data);
          setTotalItems(result.totalItems);
          setIsLoading(false);
        }
      })
      .catch(err => {
        if (currentRequestId === requestIdRef.current) {
          setError(err instanceof Error ? err : new Error(String(err)));
          setIsLoading(false);
        }
      });
  }, [page, pageSize, sort, debouncedSearch, filters]);

  return {
    data,
    totalItems,
    isLoading,
    error,
    page,
    pageSize,
    sort,
    search,
    onPageChange,
    onPageSizeChange,
    onSort,
    onSearchChange,
    refresh,
  };
}
