import * as React from 'react';

/**
 * Validates that a form control has either a label or aria-label, but not both.
 *
 * @param componentName - The name of the component (e.g., 'Radio', 'Checkbox') for error messages
 * @param label - The label prop value
 * @param ariaLabel - The aria-label prop value
 * @throws Error if validation fails
 */
export function validateFormControlProps(
  componentName: string,
  label?: React.ReactNode,
  ariaLabel?: string,
): void {
  if (!label && !ariaLabel) {
    throw new Error(`${componentName} must have either a label prop or an aria-label attribute`);
  }
  if (label && ariaLabel) {
    throw new Error(
      `${componentName} must have either a label prop or an aria-label attribute, but not both`,
    );
  }
}
