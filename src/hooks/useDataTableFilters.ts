import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type {
  DataTableActiveFilter,
  DataTableFilterState,
  DataTableFilterValue,
} from '@/components/DataTable/types';

export interface UseDataTableFiltersOptions {
  /** Initial filter state, keyed by column id. */
  initialFilters?: DataTableFilterState;
  /**
   * Debounce delay applied to `text` and `number` filter changes, in ms.
   * Click-based filters (boolean, select, multiSelect, date, dateRange) commit immediately.
   * @default 300
   */
  debounceMs?: number;
}

export interface UseDataTableFiltersReturn {
  /** Live filter state — what the UI reads. Updates immediately on every change. */
  filters: DataTableFilterState;
  /**
   * Debounced filter state — what downstream consumers (fetchers) should read.
   * Text/number changes lag by `debounceMs`; other types commit immediately.
   */
  debouncedFilters: DataTableFilterState;
  /** Debounced filters as an array, convenient for passing to a fetcher. */
  activeFilters: DataTableActiveFilter[];
  /** Set or clear a column's filter. Passing `undefined` removes it. */
  setFilter: (columnId: string, value: DataTableFilterValue | undefined) => void;
  /** Clear a single column's filter. */
  clearFilter: (columnId: string) => void;
  /** Clear every filter. */
  clearAll: () => void;
}

/**
 * Manages filter state for a DataTable. Text and number filters are debounced so that
 * typing doesn't fire a fetch on every keystroke. Click-based filters (boolean, select,
 * multiSelect, date, dateRange) commit to the debounced state immediately.
 *
 * Pair with `useDataSource` to wire filters through to an async fetcher:
 *
 * ```tsx
 * const filters = useDataTableFilters();
 * const source = useDataSource(fetchUsers, { filters: filters.activeFilters });
 * ```
 */
export function useDataTableFilters(
  options: UseDataTableFiltersOptions = {},
): UseDataTableFiltersReturn {
  const { initialFilters = {}, debounceMs = 300 } = options;

  const [filters, setFiltersState] = useState<DataTableFilterState>(initialFilters);
  const [debouncedFilters, setDebouncedFilters] = useState<DataTableFilterState>(initialFilters);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    [],
  );

  const commitNow = useCallback((next: DataTableFilterState) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setDebouncedFilters(next);
  }, []);

  const scheduleCommit = useCallback(
    (next: DataTableFilterState) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setDebouncedFilters(next);
        timerRef.current = null;
      }, debounceMs);
    },
    [debounceMs],
  );

  const setFilter = useCallback(
    (columnId: string, value: DataTableFilterValue | undefined) => {
      setFiltersState(prev => {
        const next = { ...prev };
        if (value === undefined) {
          delete next[columnId];
        } else {
          next[columnId] = value;
        }

        const shouldDebounce =
          value !== undefined && (value.type === 'text' || value.type === 'number');
        if (shouldDebounce) scheduleCommit(next);
        else commitNow(next);

        return next;
      });
    },
    [commitNow, scheduleCommit],
  );

  const clearFilter = useCallback(
    (columnId: string) => setFilter(columnId, undefined),
    [setFilter],
  );

  const clearAll = useCallback(() => {
    setFiltersState({});
    commitNow({});
  }, [commitNow]);

  const activeFilters = useMemo<DataTableActiveFilter[]>(
    () =>
      Object.entries(debouncedFilters).map(([columnId, value]) => ({
        columnId,
        value,
      })),
    [debouncedFilters],
  );

  return {
    filters,
    debouncedFilters,
    activeFilters,
    setFilter,
    clearFilter,
    clearAll,
  };
}
