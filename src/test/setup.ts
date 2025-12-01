import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'vitest';
import 'vitest-axe/extend-expect';
import * as matchers from 'vitest-axe/matchers';

// Extend Vitest's expect with axe matchers
expect.extend(matchers);

// Cleanup after each test
afterEach(() => {
  cleanup();
});
