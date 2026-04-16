import type { DataTableActiveFilter, DataTableFilterValue } from '@/components/DataTable/types';

/**
 * Test whether a cell value satisfies a single filter.
 *
 * Use this as a building block when writing custom client-side filtering logic
 * (e.g. when your row shape doesn't map column ids to object keys directly).
 * Most callers want `applyDataTableFilters` instead.
 */
export function matchesFilter(cell: unknown, value: DataTableFilterValue): boolean {
  switch (value.type) {
    case 'text': {
      const haystack = String(cell ?? '').toLowerCase();
      const needle = value.value.toLowerCase();
      switch (value.operator) {
        case 'contains':
          return haystack.includes(needle);
        case 'equals':
          return haystack === needle;
        case 'startsWith':
          return haystack.startsWith(needle);
        case 'endsWith':
          return haystack.endsWith(needle);
      }
      return true;
    }
    case 'number': {
      const n = typeof cell === 'number' ? cell : Number(cell);
      if (Number.isNaN(n)) return false;
      switch (value.operator) {
        case 'eq':
          return value.value != null && n === value.value;
        case 'neq':
          return value.value != null && n !== value.value;
        case 'gt':
          return value.value != null && n > value.value;
        case 'gte':
          return value.value != null && n >= value.value;
        case 'lt':
          return value.value != null && n < value.value;
        case 'lte':
          return value.value != null && n <= value.value;
        case 'between': {
          if (value.value != null && n < value.value) return false;
          if (value.valueMax != null && n > value.valueMax) return false;
          return true;
        }
      }
      return true;
    }
    case 'boolean':
      return cell === value.value;
    case 'select':
      return cell === value.value;
    case 'multiSelect':
      return value.value.includes(String(cell));
    case 'date': {
      if (!(cell instanceof Date)) return false;
      return cell.toDateString() === value.value.toDateString();
    }
    case 'dateRange': {
      if (!(cell instanceof Date)) return false;
      if (value.value.from && cell < value.value.from) return false;
      if (value.value.to && cell > value.value.to) return false;
      return true;
    }
  }
}

/**
 * Apply a `DataTableActiveFilter[]` to an in-memory dataset. Each filter's `columnId`
 * is used as the property key on each row.
 *
 * For remote data sources, **don't use this** — write an adapter that converts the
 * same `DataTableActiveFilter[]` into your backend's query shape (REST params, POST
 * body, GraphQL variables, etc.). The filter structure is JSON-serializable, so it
 * travels over the wire as-is.
 *
 * @example
 * ```ts
 * const rows = applyDataTableFilters(allUsers, source.filters);
 * ```
 */
export function applyDataTableFilters<T>(
  rows: T[],
  filters: DataTableActiveFilter[] | undefined,
): T[] {
  if (!filters || filters.length === 0) return rows;
  return rows.filter(row =>
    filters.every(({ columnId, value }) => {
      const cell = (row as unknown as Record<string, unknown>)[columnId];
      return matchesFilter(cell, value);
    }),
  );
}
