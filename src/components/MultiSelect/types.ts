import { HTMLAttributes } from 'react';

export interface MultiSelectOption {
  value: string;
  label: string;
}

// Pick form-related attributes from SelectHTMLAttributes that we want to support
type MultiSelectFormAttributes = Pick<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'name' | 'required' | 'autoFocus'
>;

export interface MultiSelectProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>,
    MultiSelectFormAttributes {
  options: MultiSelectOption[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  className?: string;
  listClassName?: string;
  zIndex?: number;
  isDisabled?: boolean;
  /**
   * The name attribute for form submission.
   * This is required for the multi-select value to be included in form data.
   */
  name?: string;
  /**
   * Whether the multi-select is required for form validation.
   * When true, the form cannot be submitted without at least one selection.
   */
  required?: boolean;
  /**
   * Automatically focuses the multi-select when the page loads.
   */
  autoFocus?: boolean;
}
