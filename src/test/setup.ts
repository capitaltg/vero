import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, expect, vi } from 'vitest';
import 'vitest-axe/extend-expect';
import * as matchers from 'vitest-axe/matchers';

// Extend Vitest's expect with axe matchers
expect.extend(matchers);

// Silence the one-time "Table is experimental" dev warning so it doesn't clutter
// test output (it has dedicated coverage in TableRoot.test.tsx). Remove when Table
// is promoted to stable.
const originalWarn = console.warn;
vi.spyOn(console, 'warn').mockImplementation((...args: unknown[]) => {
  if (typeof args[0] === 'string' && args[0].startsWith('[vero] Table is experimental')) return;
  originalWarn(...args);
});

// Cleanup after each test
afterEach(() => {
  cleanup();
});
