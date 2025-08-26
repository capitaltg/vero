import { ZIndexConfig } from '@/types/z-index';

/**
 * Z-Index Configuration
 *
 * This allows consuming applications to customize default z-index values
 * for all overlay components in the library
 */

// Default z-index values
const DEFAULT_Z_INDEX: ZIndexConfig = {
  popover: 50,
  tooltip: 50,
  overlay: 50,
  dialog: 50,
  dropdown: 50,
};

// Global z-index configuration
let zIndexConfig: ZIndexConfig = { ...DEFAULT_Z_INDEX };

/**
 * Configure default z-index values for all overlay components
 *
 * @example
 * ```tsx
 * import { configureZIndex } from '@capitaltg/vero';
 *
 * // Set custom z-index values for your app
 * configureZIndex({
 *   popover: 1000,
 *   tooltip: 2000,
 *   overlay: 2500,
 *   dialog: 3000,
 *   dropdown: 1500,
 * });
 * ```
 */
export function configureZIndex(config: Partial<ZIndexConfig>): void {
  zIndexConfig = { ...zIndexConfig, ...config };
}

/**
 * Get the current z-index configuration
 */
export function getZIndexConfig(): ZIndexConfig {
  return { ...zIndexConfig };
}

/**
 * Reset z-index configuration to defaults
 */
export function resetZIndexConfig(): void {
  zIndexConfig = { ...DEFAULT_Z_INDEX };
}

/**
 * Get z-index value for a specific component type
 * Falls back to the configured default if no override is provided
 */
export function getZIndex(type: keyof ZIndexConfig, override?: number): number {
  return override ?? zIndexConfig[type];
}
