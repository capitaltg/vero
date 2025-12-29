import { ButtonHTMLAttributes } from 'react';

// Pick form-related attributes from SelectHTMLAttributes that we want to support
type AutocompleteFormAttributes = Pick<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'name' | 'required' | 'autoFocus'
>;

export interface AutocompleteProps<T, K extends keyof T, L extends keyof T>
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'disabled' | 'value'>,
    AutocompleteFormAttributes {
  /**
   * Async function to fetch options based on user input.
   * Receives the current input value and returns a promise that resolves to an array of options.
   * If provided, the component will use async loading instead of static options.
   */
  loadOptions?: (inputValue: string) => Promise<T[]>;
  /**
   * Static array of options to display.
   * Used when loadOptions is not provided. The component will filter these options based on user input.
   */
  options?: T[];
  /**
   * The currently selected value. Must match the value of one of the options using the valueKey.
   * Use an empty string ('') to represent no selection.
   */
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
  /**
   * Callback function invoked when the selected value changes.
   * @param value - The selected value from the option object.
   * @param item - The full option object, or undefined when clearing the selection.
   */
  onChange: (value: T[K], item?: T) => void;
  /**
   * Placeholder text displayed when no option is selected.
   * @default 'Select an option...'
   */
  placeholder?: string;
  /**
   * Message displayed when no options match the search input.
   * @default 'No results found'
   */
  emptyMessage?: string;
  /**
   * Additional CSS classes to apply to the trigger button.
   */
  className?: string;
  /**
   * Additional CSS classes to apply to the options list container.
   */
  listClassName?: string;
  /**
   * Maximum number of suggestions to display in the dropdown.
   * @default 10
   */
  maxSuggestions?: number;
  /**
   * Debounce delay for async searches in milliseconds.
   * Prevents excessive API calls by waiting for the user to stop typing.
   * @default 300
   */
  debounceMs?: number;
  /**
   * Minimum number of characters required before triggering an async search.
   * @default 2
   */
  minSearch?: number;
  /**
   * Message displayed while loading options asynchronously.
   * @default 'Loading...'
   */
  loadingMessage?: string;
  /**
   * Message displayed when an async fetch fails.
   * @default 'Failed to load options'
   */
  errorMessage?: string;
  /**
   * Z-index value for the popover dropdown.
   * If not provided, uses the default z-index from the theme.
   */
  zIndex?: number;
  /**
   * Whether the component is disabled.
   * When true, the autocomplete cannot be interacted with.
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Custom render function for each option in the dropdown.
   * Receives the option object and whether it's currently selected.
   * If not provided, defaults to rendering a Check icon and the option label.
   * @param option - The option object of type T.
   * @param isSelected - Whether this option is currently selected.
   * @returns A React node to render for this option.
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
