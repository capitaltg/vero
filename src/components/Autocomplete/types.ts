import { ButtonHTMLAttributes } from 'react';

type AutocompleteFormAttributes = Pick<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'name' | 'required' | 'autoFocus'
>;

export interface AutocompleteProps<T>
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
   * The currently selected value as a string.
   * Use an empty string ('') to represent no selection.
   */
  value: string;
  /**
   * Derives the unique string value for an option, used for selection matching and onChange.
   * Required unless all options are uniquely identifiable by another means.
   */
  getOptionValue?: (option: T) => string;
  /**
   * Derives the display label for an option.
   * Used as the default label in the dropdown and trigger, and as the field searched when
   * filtering static options. If not provided, filtering falls back to the option value string.
   */
  getOptionLabel?: (option: T) => string;
  /**
   * Callback function invoked when the selected value changes.
   * @param value - The selected option's value as a string, or empty string when clearing.
   * @param item - The full option object, or undefined when clearing the selection.
   */
  onChange: (value: string, item?: T) => void;
  /**
   * Custom render function for the selected value shown in the trigger button.
   * Receives the full selected option object. Falls back to getOptionLabel, then the raw value string.
   * @param option - The currently selected option object.
   * @returns A React node to render inside the trigger.
   */

  renderValue?: (option: T) => React.ReactNode;
  /**
   * Custom render function for each option in the dropdown.
   * Receives the option object and whether it's currently selected.
   * If not provided, defaults to rendering a Check icon and the getOptionLabel value.
   * @param isSelected - Whether this option is currently selected.
   * @returns A React node to render for this option.
   */
  renderOption?: (option: T, isSelected: boolean) => React.ReactNode;
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
   * Additional class names for the popover content (e.g. to set min-width or width).
   */
  popoverClassName?: string;
  /**
   * Z-index value for the popover dropdown.
   * If not provided, uses the default z-index from the theme.
   */
  zIndex?: number;
  /**
   * Whether the component is disabled.
   * @default false
   */
  isDisabled?: boolean;
  /**
   * The name attribute for form submission.
   */
  name?: string;
  /**
   * Whether the autocomplete is required for form validation.
   */
  required?: boolean;
  /**
   * Automatically focuses the autocomplete when the page loads.
   */
  autoFocus?: boolean;
}
