import { useId } from 'react';

export type UseCheckboxAriaOptions = {
  label?: React.ReactNode;
  description?: string;
  'aria-label'?: string;
};

export type UseCheckboxAriaReturn = {
  ariaProps: {
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
  };
  labelId: string;
  descriptionId: string;
};

/**
 * Hook for managing ARIA attributes for checkboxes with external labels.
 *
 * When no explicit aria-label is provided, this hook generates IDs for the label
 * and description elements and creates appropriate aria-labelledby and aria-describedby
 * attributes to ensure screen readers can properly announce the checkbox.
 *
 * @param options - Configuration options
 * @returns ARIA props and generated IDs for label and description elements
 */
export function useCheckboxAria({
  label,
  description,
  'aria-label': ariaLabel,
}: UseCheckboxAriaOptions = {}): UseCheckboxAriaReturn {
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
