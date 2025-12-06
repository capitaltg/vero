import { useId } from 'react';

export type UseAriaLabelledOptions = {
  label?: React.ReactNode;
  description?: string;
  'aria-label'?: string;
};

export type UseAriaLabelledReturn = {
  ariaProps: {
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
  };
  labelId: string;
  descriptionId: string;
};

/**
 * Hook for managing ARIA attributes for form controls with external labels.
 *
 * When no explicit aria-label is provided, this hook generates IDs for the label
 * and description elements and creates appropriate aria-labelledby and aria-describedby
 * attributes to ensure screen readers can properly announce the form control.
 *
 * This hook can be used with checkboxes, radio buttons, and other form controls
 * that have labels positioned outside the control element.
 *
 * @param options - Configuration options
 * @returns ARIA props and generated IDs for label and description elements
 */
export function useAriaLabelled({
  label,
  description,
  'aria-label': ariaLabel,
}: UseAriaLabelledOptions = {}): UseAriaLabelledReturn {
  const labelId = useId();
  const descriptionId = useId();

  // Use aria-labelledby/aria-describedby when no explicit aria-label is provided
  const ariaProps = ariaLabel
    ? { 'aria-label': ariaLabel }
    : {
        ...(label && { 'aria-labelledby': labelId }),
        ...(description && { 'aria-describedby': descriptionId }),
      };

  return {
    ariaProps,
    labelId,
    descriptionId,
  };
}
