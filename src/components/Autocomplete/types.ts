import { ButtonHTMLAttributes } from 'react';

export interface AutocompleteOption {
  value: string;
  label: string;
}

// Pick form-related attributes from SelectHTMLAttributes that we want to support
type AutocompleteFormAttributes = Pick<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'name' | 'required' | 'autoFocus'
>;

export interface AutocompleteProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'disabled'>,
    AutocompleteFormAttributes {
  // Async function to fetch options
  loadOptions?: (inputValue: string) => Promise<AutocompleteOption[]>;
  // Static options (used if loadOptions is not provided)
  options?: AutocompleteOption[];
  value: string;
  onChange: (value: string) => void;
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
