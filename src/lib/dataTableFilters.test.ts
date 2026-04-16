import { describe, expect, it } from 'vitest';
import { applyDataTableFilters, matchesFilter } from './dataTableFilters';

describe('matchesFilter', () => {
  describe('text', () => {
    it('contains matches case-insensitively', () => {
      expect(matchesFilter('Alice', { type: 'text', value: 'ali', operator: 'contains' })).toBe(
        true,
      );
      expect(matchesFilter('Bob', { type: 'text', value: 'ali', operator: 'contains' })).toBe(
        false,
      );
    });

    it('equals requires exact match (case-insensitive)', () => {
      expect(matchesFilter('Alice', { type: 'text', value: 'alice', operator: 'equals' })).toBe(
        true,
      );
      expect(matchesFilter('Alice', { type: 'text', value: 'alic', operator: 'equals' })).toBe(
        false,
      );
    });

    it('startsWith and endsWith work', () => {
      expect(matchesFilter('Alice', { type: 'text', value: 'ali', operator: 'startsWith' })).toBe(
        true,
      );
      expect(matchesFilter('Alice', { type: 'text', value: 'ice', operator: 'endsWith' })).toBe(
        true,
      );
      expect(matchesFilter('Alice', { type: 'text', value: 'xyz', operator: 'startsWith' })).toBe(
        false,
      );
    });

    it('coerces non-string cells', () => {
      expect(matchesFilter(42, { type: 'text', value: '4', operator: 'contains' })).toBe(true);
    });
  });

  describe('number', () => {
    it('eq/neq/gt/gte/lt/lte', () => {
      expect(matchesFilter(5, { type: 'number', value: 5, operator: 'eq' })).toBe(true);
      expect(matchesFilter(5, { type: 'number', value: 6, operator: 'neq' })).toBe(true);
      expect(matchesFilter(10, { type: 'number', value: 5, operator: 'gt' })).toBe(true);
      expect(matchesFilter(5, { type: 'number', value: 5, operator: 'gte' })).toBe(true);
      expect(matchesFilter(4, { type: 'number', value: 5, operator: 'lt' })).toBe(true);
      expect(matchesFilter(5, { type: 'number', value: 5, operator: 'lte' })).toBe(true);
    });

    it('between respects both bounds', () => {
      const filter = {
        type: 'number' as const,
        value: 5,
        valueMax: 10,
        operator: 'between' as const,
      };
      expect(matchesFilter(7, filter)).toBe(true);
      expect(matchesFilter(5, filter)).toBe(true);
      expect(matchesFilter(10, filter)).toBe(true);
      expect(matchesFilter(4, filter)).toBe(false);
      expect(matchesFilter(11, filter)).toBe(false);
    });

    it('between with only one bound set', () => {
      const onlyMin = {
        type: 'number' as const,
        value: 5,
        valueMax: null,
        operator: 'between' as const,
      };
      expect(matchesFilter(100, onlyMin)).toBe(true);
      expect(matchesFilter(4, onlyMin)).toBe(false);
    });

    it('rejects non-numeric cells', () => {
      expect(matchesFilter('hello', { type: 'number', value: 5, operator: 'eq' })).toBe(false);
    });

    it('coerces numeric strings', () => {
      expect(matchesFilter('5', { type: 'number', value: 5, operator: 'eq' })).toBe(true);
    });

    it('returns false when value is null', () => {
      expect(matchesFilter(5, { type: 'number', value: null, operator: 'eq' })).toBe(false);
    });
  });

  describe('boolean / select / multiSelect', () => {
    it('boolean compares strictly', () => {
      expect(matchesFilter(true, { type: 'boolean', value: true })).toBe(true);
      expect(matchesFilter(false, { type: 'boolean', value: true })).toBe(false);
    });

    it('select compares strictly', () => {
      expect(matchesFilter('admin', { type: 'select', value: 'admin' })).toBe(true);
      expect(matchesFilter('user', { type: 'select', value: 'admin' })).toBe(false);
    });

    it('multiSelect matches if cell is in the value list', () => {
      expect(matchesFilter('admin', { type: 'multiSelect', value: ['admin', 'user'] })).toBe(true);
      expect(matchesFilter('guest', { type: 'multiSelect', value: ['admin', 'user'] })).toBe(false);
    });
  });

  describe('date / dateRange', () => {
    it('date matches same calendar day', () => {
      const target = new Date(2025, 0, 15, 10, 0);
      const cell = new Date(2025, 0, 15, 23, 59);
      expect(matchesFilter(cell, { type: 'date', value: target })).toBe(true);

      const otherDay = new Date(2025, 0, 16, 10, 0);
      expect(matchesFilter(otherDay, { type: 'date', value: target })).toBe(false);
    });

    it('dateRange respects both bounds', () => {
      const filter = {
        type: 'dateRange' as const,
        value: { from: new Date(2025, 0, 1), to: new Date(2025, 0, 31) },
      };
      expect(matchesFilter(new Date(2025, 0, 15), filter)).toBe(true);
      expect(matchesFilter(new Date(2024, 11, 31), filter)).toBe(false);
      expect(matchesFilter(new Date(2025, 1, 1), filter)).toBe(false);
    });

    it('dateRange rejects non-Date cells', () => {
      expect(
        matchesFilter('2025-01-15', {
          type: 'dateRange',
          value: { from: new Date(2025, 0, 1) },
        }),
      ).toBe(false);
    });
  });
});

describe('applyDataTableFilters', () => {
  interface User {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
    role: string;
  }

  const users: User[] = [
    { id: 1, name: 'Alice', age: 30, isActive: true, role: 'admin' },
    { id: 2, name: 'Bob', age: 40, isActive: false, role: 'user' },
    { id: 3, name: 'Charlie', age: 25, isActive: true, role: 'user' },
  ];

  it('returns all rows when filters are empty or undefined', () => {
    expect(applyDataTableFilters(users, undefined)).toEqual(users);
    expect(applyDataTableFilters(users, [])).toEqual(users);
  });

  it('filters by a single text filter', () => {
    const result = applyDataTableFilters(users, [
      { columnId: 'name', value: { type: 'text', value: 'li', operator: 'contains' } },
    ]);
    expect(result.map(u => u.name)).toEqual(['Alice', 'Charlie']);
  });

  it('combines filters with AND semantics', () => {
    const result = applyDataTableFilters(users, [
      { columnId: 'isActive', value: { type: 'boolean', value: true } },
      { columnId: 'age', value: { type: 'number', value: 28, operator: 'gt' } },
    ]);
    expect(result.map(u => u.name)).toEqual(['Alice']);
  });

  it('uses columnId as the row property key', () => {
    const result = applyDataTableFilters(users, [
      { columnId: 'role', value: { type: 'select', value: 'admin' } },
    ]);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Alice');
  });

  it('returns empty when no rows match', () => {
    const result = applyDataTableFilters(users, [
      { columnId: 'role', value: { type: 'select', value: 'nobody' } },
    ]);
    expect(result).toEqual([]);
  });
});
