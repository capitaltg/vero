import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, expect, vi } from 'vitest';
import 'vitest-axe/extend-expect';
import * as matchers from 'vitest-axe/matchers';

// Extend Vitest's expect with axe matchers
expect.extend(matchers);

// Silence the one-time "[vero] <Name> is experimental" dev warnings so they don't
// clutter test output (warnExperimental has its own tests in src/lib).
const originalWarn = console.warn;
vi.spyOn(console, 'warn').mockImplementation((...args: unknown[]) => {
  if (typeof args[0] === 'string' && /^\[vero\] \w+ is experimental/.test(args[0])) return;
  originalWarn(...args);
});

// Cleanup after each test
afterEach(() => {
  cleanup();
});
