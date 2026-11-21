import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, expect, vi } from 'vitest';
import 'vitest-axe/extend-expect';
import * as matchers from 'vitest-axe/matchers';

// Extend Vitest's expect with axe matchers
expect.extend(matchers);

// Silence the one-time "Table is experimental" and "Navbar is experimental" dev
// warnings so they don't clutter test output (each has dedicated coverage in its
// component's tests). Remove each when its component is promoted to stable.
const EXPERIMENTAL_WARNINGS = ['[vero] Table is experimental', '[vero] Navbar is experimental'];
const originalWarn = console.warn;
vi.spyOn(console, 'warn').mockImplementation((...args: unknown[]) => {
  const [message] = args;
  if (
    typeof message === 'string' &&
    EXPERIMENTAL_WARNINGS.some(prefix => message.startsWith(prefix))
  )
    return;
  originalWarn(...args);
});

// Cleanup after each test
afterEach(() => {
  cleanup();
});
