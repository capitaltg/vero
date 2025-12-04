import { useId } from 'react';

export type UseRadioAriaOptions = {
  label?: React.ReactNode;
  description?: string;
  'aria-label'?: string;
};

export type UseRadioAriaReturn = {
  ariaProps: {
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
  };
  labelId: string;
  descriptionId: string;
};

/**
 * Hook for managing ARIA attributes for radio buttons with external labels.
 *
 * When no explicit aria-label is provided, this hook generates IDs for the label
 * and description elements and creates appropriate aria-labelledby and aria-describedby
 * attributes to ensure screen readers can properly announce the radio button.
 *
 * @param options - Configuration options
 * @returns ARIA props and generated IDs for label and description elements
 */
export function useRadioAria({
  label,
  description,
  'aria-label': ariaLabel,
}: UseRadioAriaOptions = {}): UseRadioAriaReturn {
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
