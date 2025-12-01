import type { AxeResults } from 'axe-core';
import { expect } from 'vitest';

/**
 * Helper function to assert no accessibility violations with proper typing.
 * The toHaveNoViolations matcher is added at runtime but TypeScript doesn't recognize it
 * due to type compatibility issues between vitest-axe and Vitest 4.
 *
 * @param results - The AxeResults object from an axe accessibility check
 */
export function expectNoViolations(results: AxeResults) {
  // @ts-expect-error - vitest-axe extends expect at runtime but types aren't fully compatible
  return expect(results).toHaveNoViolations();
}
