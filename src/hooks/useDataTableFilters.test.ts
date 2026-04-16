import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useDataTableFilters } from './useDataTableFilters';

describe('useDataTableFilters', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('starts with empty filter state', () => {
    const { result } = renderHook(() => useDataTableFilters());
    expect(result.current.filters).toEqual({});
    expect(result.current.debouncedFilters).toEqual({});
    expect(result.current.activeFilters).toEqual([]);
  });

  it('accepts initial filters', () => {
    const initialFilters = {
      status: { type: 'select' as const, value: 'active' },
    };
    const { result } = renderHook(() => useDataTableFilters({ initialFilters }));
    expect(result.current.filters).toEqual(initialFilters);
    expect(result.current.debouncedFilters).toEqual(initialFilters);
  });

  it('commits click-based filters immediately (no debounce)', () => {
    const { result } = renderHook(() => useDataTableFilters({ debounceMs: 300 }));

    act(() => {
      result.current.setFilter('status', { type: 'select', value: 'active' });
    });

    expect(result.current.filters.status).toEqual({ type: 'select', value: 'active' });
    expect(result.current.debouncedFilters.status).toEqual({
      type: 'select',
      value: 'active',
    });
  });

  it('debounces text filter changes', () => {
    const { result } = renderHook(() => useDataTableFilters({ debounceMs: 300 }));

    act(() => {
      result.current.setFilter('name', {
        type: 'text',
        value: 'ali',
        operator: 'contains',
      });
    });

    // Live state updates immediately
    expect(result.current.filters.name).toEqual({
      type: 'text',
      value: 'ali',
      operator: 'contains',
    });
    // Debounced state has NOT updated yet
    expect(result.current.debouncedFilters.name).toBeUndefined();

    // Advance past debounce
    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current.debouncedFilters.name).toEqual({
      type: 'text',
      value: 'ali',
      operator: 'contains',
    });
  });

  it('debounces number filter changes', () => {
    const { result } = renderHook(() => useDataTableFilters({ debounceMs: 300 }));

    act(() => {
      result.current.setFilter('age', {
        type: 'number',
        value: 25,
        operator: 'gt',
      });
    });

    expect(result.current.debouncedFilters.age).toBeUndefined();

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current.debouncedFilters.age).toEqual({
      type: 'number',
      value: 25,
      operator: 'gt',
    });
  });

  it('coalesces rapid text changes into a single debounced commit', () => {
    const { result } = renderHook(() => useDataTableFilters({ debounceMs: 300 }));

    act(() => {
      result.current.setFilter('name', { type: 'text', value: 'a', operator: 'contains' });
    });
    act(() => {
      vi.advanceTimersByTime(100);
      result.current.setFilter('name', { type: 'text', value: 'al', operator: 'contains' });
    });
    act(() => {
      vi.advanceTimersByTime(100);
      result.current.setFilter('name', { type: 'text', value: 'ali', operator: 'contains' });
    });

    expect(result.current.debouncedFilters.name).toBeUndefined();

    act(() => {
      vi.advanceTimersByTime(300);
    });

    // Only the final value is committed
    expect(result.current.debouncedFilters.name).toEqual({
      type: 'text',
      value: 'ali',
      operator: 'contains',
    });
  });

  it('click-based filter change cancels pending text debounce', () => {
    const { result } = renderHook(() => useDataTableFilters({ debounceMs: 300 }));

    act(() => {
      result.current.setFilter('name', { type: 'text', value: 'ali', operator: 'contains' });
    });
    act(() => {
      result.current.setFilter('status', { type: 'select', value: 'active' });
    });

    // The click-based filter commits immediately, and since setDebouncedFilters was called
    // synchronously with the full latest state, the text filter is committed now too.
    expect(result.current.debouncedFilters).toEqual({
      name: { type: 'text', value: 'ali', operator: 'contains' },
      status: { type: 'select', value: 'active' },
    });
  });

  it('clearFilter removes a single column', () => {
    const { result } = renderHook(() => useDataTableFilters());

    act(() => {
      result.current.setFilter('status', { type: 'select', value: 'active' });
      result.current.setFilter('role', { type: 'select', value: 'admin' });
    });

    expect(Object.keys(result.current.debouncedFilters)).toEqual(['status', 'role']);

    act(() => {
      result.current.clearFilter('status');
    });

    expect(result.current.debouncedFilters).toEqual({
      role: { type: 'select', value: 'admin' },
    });
  });

  it('clearAll removes every filter immediately', () => {
    const { result } = renderHook(() => useDataTableFilters({ debounceMs: 300 }));

    act(() => {
      result.current.setFilter('status', { type: 'select', value: 'active' });
      result.current.setFilter('name', { type: 'text', value: 'ali', operator: 'contains' });
    });

    act(() => {
      result.current.clearAll();
    });

    expect(result.current.filters).toEqual({});
    expect(result.current.debouncedFilters).toEqual({});
  });

  it('exposes activeFilters as an array', () => {
    const { result } = renderHook(() => useDataTableFilters());

    act(() => {
      result.current.setFilter('status', { type: 'select', value: 'active' });
      result.current.setFilter('count', { type: 'number', value: 5, operator: 'eq' });
    });

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current.activeFilters).toEqual(
      expect.arrayContaining([
        { columnId: 'status', value: { type: 'select', value: 'active' } },
        { columnId: 'count', value: { type: 'number', value: 5, operator: 'eq' } },
      ]),
    );
    expect(result.current.activeFilters).toHaveLength(2);
  });

  it('passing undefined removes the filter', () => {
    const { result } = renderHook(() => useDataTableFilters());

    act(() => {
      result.current.setFilter('status', { type: 'select', value: 'active' });
    });
    expect(result.current.filters.status).toBeDefined();

    act(() => {
      result.current.setFilter('status', undefined);
    });
    expect(result.current.filters.status).toBeUndefined();
    expect(result.current.debouncedFilters.status).toBeUndefined();
  });

  it('clears pending debounce timer on unmount', () => {
    const { result, unmount } = renderHook(() => useDataTableFilters({ debounceMs: 300 }));

    act(() => {
      result.current.setFilter('name', { type: 'text', value: 'ali', operator: 'contains' });
    });

    unmount();

    // Advance past when the timer would have fired; no error should occur.
    expect(() => {
      vi.advanceTimersByTime(500);
    }).not.toThrow();
  });
});
