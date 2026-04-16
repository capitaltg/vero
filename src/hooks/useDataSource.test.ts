import { act, renderHook, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useDataSource } from './useDataSource';

interface TestItem {
  id: number;
  name: string;
}

describe('useDataSource', () => {
  const mockData: TestItem[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];

  const mockFetcher = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
    mockFetcher.mockResolvedValue({ data: mockData, totalItems: 50 });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('fetches data on mount', async () => {
    vi.useRealTimers();
    const { result } = renderHook(() => useDataSource(mockFetcher));

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toEqual(mockData);
    expect(result.current.totalItems).toBe(50);
    expect(mockFetcher).toHaveBeenCalledWith({
      page: 1,
      pageSize: 10,
      sort: undefined,
      search: undefined,
    });
  });

  it('uses initial options', async () => {
    vi.useRealTimers();
    const initialSort = { column: 'name', direction: 'asc' as const };

    const { result } = renderHook(() =>
      useDataSource(mockFetcher, { initialPageSize: 25, initialSort }),
    );

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.pageSize).toBe(25);
    expect(result.current.sort).toEqual(initialSort);
    expect(mockFetcher).toHaveBeenCalledWith({
      page: 1,
      pageSize: 25,
      sort: initialSort,
      search: undefined,
    });
  });

  it('refetches when page changes', async () => {
    vi.useRealTimers();
    const { result } = renderHook(() => useDataSource(mockFetcher));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    act(() => {
      result.current.onPageChange(3);
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.page).toBe(3);
    expect(mockFetcher).toHaveBeenLastCalledWith(expect.objectContaining({ page: 3 }));
  });

  it('resets to page 1 when page size changes', async () => {
    vi.useRealTimers();
    const { result } = renderHook(() => useDataSource(mockFetcher));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    act(() => {
      result.current.onPageChange(3);
    });

    await waitFor(() => {
      expect(result.current.page).toBe(3);
    });

    act(() => {
      result.current.onPageSizeChange(25);
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.page).toBe(1);
    expect(result.current.pageSize).toBe(25);
  });

  it('resets to page 1 when sort changes', async () => {
    vi.useRealTimers();
    const { result } = renderHook(() => useDataSource(mockFetcher));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    act(() => {
      result.current.onPageChange(3);
    });

    await waitFor(() => {
      expect(result.current.page).toBe(3);
    });

    act(() => {
      result.current.onSort({ column: 'name', direction: 'desc' });
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.page).toBe(1);
    expect(result.current.sort).toEqual({ column: 'name', direction: 'desc' });
  });

  it('debounces search changes', async () => {
    const { result } = renderHook(() => useDataSource(mockFetcher, { debounceMs: 300 }));

    // Wait for initial fetch
    await act(async () => {
      vi.advanceTimersByTime(0);
      await vi.runAllTimersAsync();
    });

    mockFetcher.mockClear();

    act(() => {
      result.current.onSearchChange('ali');
    });

    // Should not have fetched yet
    expect(mockFetcher).not.toHaveBeenCalled();

    // Advance past debounce
    await act(async () => {
      vi.advanceTimersByTime(300);
      await vi.runAllTimersAsync();
    });

    expect(mockFetcher).toHaveBeenCalledWith(expect.objectContaining({ search: 'ali' }));
  });

  it('resets to page 1 when search changes', async () => {
    const { result } = renderHook(() => useDataSource(mockFetcher, { debounceMs: 300 }));

    // Wait for initial fetch
    await act(async () => {
      vi.advanceTimersByTime(0);
      await vi.runAllTimersAsync();
    });

    act(() => {
      result.current.onSearchChange('test');
    });

    expect(result.current.page).toBe(1);
    expect(result.current.search).toBe('test');
  });

  it('handles fetch errors', async () => {
    vi.useRealTimers();
    const error = new Error('Network error');
    mockFetcher.mockRejectedValueOnce(error);

    const { result } = renderHook(() => useDataSource(mockFetcher));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.error).toEqual(error);
    expect(result.current.data).toEqual([]);
  });

  it('converts non-Error thrown values to Error objects', async () => {
    vi.useRealTimers();
    mockFetcher.mockRejectedValueOnce('string error');

    const { result } = renderHook(() => useDataSource(mockFetcher));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error?.message).toBe('string error');
  });

  it('clears error on successful fetch', async () => {
    vi.useRealTimers();
    mockFetcher.mockRejectedValueOnce(new Error('fail'));

    const { result } = renderHook(() => useDataSource(mockFetcher));

    await waitFor(() => {
      expect(result.current.error).not.toBeNull();
    });

    mockFetcher.mockResolvedValueOnce({ data: mockData, totalItems: 50 });

    act(() => {
      result.current.onPageChange(2);
    });

    await waitFor(() => {
      expect(result.current.error).toBeNull();
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toEqual(mockData);
  });

  it('discards stale responses', async () => {
    vi.useRealTimers();
    const staleData = [{ id: 99, name: 'Stale' }];
    const freshData = [{ id: 1, name: 'Fresh' }];

    // First call resolves slowly
    let resolveFirst: (value: { data: TestItem[]; totalItems: number }) => void;
    const firstPromise = new Promise<{ data: TestItem[]; totalItems: number }>(resolve => {
      resolveFirst = resolve;
    });

    mockFetcher
      .mockReturnValueOnce(firstPromise)
      .mockResolvedValueOnce({ data: freshData, totalItems: 1 });

    const { result } = renderHook(() => useDataSource(mockFetcher));

    // Trigger a second fetch before the first completes
    act(() => {
      result.current.onPageChange(2);
    });

    // Now resolve the first (stale) request
    resolveFirst!({ data: staleData, totalItems: 1 });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    // Should have the fresh data, not the stale data
    expect(result.current.data).toEqual(freshData);
  });

  it('refresh re-fetches current state', async () => {
    vi.useRealTimers();
    const { result } = renderHook(() => useDataSource(mockFetcher));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    const callCount = mockFetcher.mock.calls.length;

    act(() => {
      result.current.refresh();
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(mockFetcher.mock.calls.length).toBe(callCount + 1);
  });

  it('exposes search state immediately', async () => {
    vi.useRealTimers();
    const { result } = renderHook(() => useDataSource(mockFetcher));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    act(() => {
      result.current.onSearchChange('hello');
    });

    // Search is set immediately (even though fetch is debounced)
    expect(result.current.search).toBe('hello');
  });

  describe('filters', () => {
    it('passes filters through to the fetcher', async () => {
      vi.useRealTimers();
      const filters = [{ columnId: 'status', value: { type: 'select' as const, value: 'active' } }];
      const { result } = renderHook(() => useDataSource(mockFetcher, { filters }));

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      expect(mockFetcher).toHaveBeenCalledWith(expect.objectContaining({ filters }));
    });

    it('omits filters from fetcher params when the array is empty', async () => {
      vi.useRealTimers();
      const emptyFilters: never[] = [];
      const { result } = renderHook(() => useDataSource(mockFetcher, { filters: emptyFilters }));

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      expect(mockFetcher).toHaveBeenCalledWith(expect.objectContaining({ filters: undefined }));
    });

    it('refetches and resets to page 1 when the filters reference changes', async () => {
      vi.useRealTimers();
      const initialFilters = [
        { columnId: 'status', value: { type: 'select' as const, value: 'active' } },
      ];

      const { result, rerender } = renderHook(
        ({ filters }) => useDataSource(mockFetcher, { filters }),
        { initialProps: { filters: initialFilters } },
      );

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      act(() => {
        result.current.onPageChange(3);
      });

      await waitFor(() => {
        expect(result.current.page).toBe(3);
      });

      const nextFilters = [
        { columnId: 'role', value: { type: 'select' as const, value: 'admin' } },
      ];
      rerender({ filters: nextFilters });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      expect(result.current.page).toBe(1);
      expect(mockFetcher).toHaveBeenLastCalledWith(
        expect.objectContaining({ page: 1, filters: nextFilters }),
      );
    });

    it('does not refetch when filters reference stays stable across renders', async () => {
      vi.useRealTimers();
      const filters = [{ columnId: 'status', value: { type: 'select' as const, value: 'active' } }];

      const { result, rerender } = renderHook(() => useDataSource(mockFetcher, { filters }));

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      const callCount = mockFetcher.mock.calls.length;
      rerender();
      rerender();

      expect(mockFetcher.mock.calls.length).toBe(callCount);
    });
  });
});
