import { ButtonHTMLAttributes } from 'react';

// Pick form-related attributes from SelectHTMLAttributes that we want to support
type AutocompleteFormAttributes = Pick<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'name' | 'required' | 'autoFocus'
>;

export interface AutocompleteProps<T, K extends keyof T, L extends keyof T>
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'disabled' | 'value'>,
    AutocompleteFormAttributes {
  // Async function to fetch options
  loadOptions?: (inputValue: string) => Promise<T[]>;
  // Static options (used if loadOptions is not provided)
  options?: T[];
  value: T[K] | '';
  /**
   * The key to use for the value property in option objects.
   * Must be a key of T.
   */
  valueKey: K;
  /**
   * The key to use for the label property in option objects.
   * Must be a key of T.
   */
  labelKey: L;
  onChange: (value: T[K]) => void;
  placeholder?: string;
  emptyMessage?: string;
  className?: string;
  listClassName?: string;
  maxSuggestions?: number;
  // Debounce delay for async searches (in milliseconds)
  debounceMs?: number;
  // Minimum characters before triggering async search
  minSearch?: number;
  // Loading message
  loadingMessage?: string;
  // Error message when async fetch fails
  errorMessage?: string;
  // Z-index for the popover
  zIndex?: number;
  // Whether the component is disabled
  isDisabled?: boolean;
  /**
   * Custom render function for each option.
   * Receives the option of type T and returns a React node.
   * If not provided, defaults to rendering a Check icon and the option label.
   */
  renderOption?: (option: T, isSelected: boolean) => React.ReactNode;
  /**
   * The name attribute for form submission.
   * This is required for the autocomplete value to be included in form data.
   */
  name?: string;
  /**
   * Whether the autocomplete is required for form validation.
   * When true, the form cannot be submitted without a selection.
   */
  required?: boolean;
  /**
   * Automatically focuses the autocomplete when the page loads.
   */
  autoFocus?: boolean;
}
