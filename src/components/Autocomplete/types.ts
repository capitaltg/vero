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
   * Without it, every option's value is an empty string, so pass it whenever there are options.
   */
  getOptionValue?: (option: T) => string;
  /**
   * Derives the display label for an option.
   * Used as the default label in the dropdown and trigger, and as the field searched when
   * filtering static options. If not provided, filtering falls back to the option value string.
   */
  getOptionLabel?: (option: T) => string;
  /**
   * Called when the selection changes, with the selected option's value and the option itself.
   * Clearing the selection calls it with `''` and `undefined`.
   */
  onChange: (value: string, item?: T) => void;
  /**
   * Custom render function for the selected value shown in the trigger button.
   * Receives the full selected option object. Falls back to getOptionLabel, then the raw value string.
   */
  renderValue?: (option: T) => React.ReactNode;
  /**
   * Custom render function for each option in the dropdown.
   * Receives the option object and whether it's currently selected.
   * If not provided, defaults to rendering a Check icon and the getOptionLabel value.
   */
  renderOption?: (option: T, isSelected: boolean) => React.ReactNode;
  /**
   * Text shown on the trigger when no option is selected, and in the search input. Defaults to
   * `Select an option...`.
   */
  placeholder?: string;
  /** Message displayed when no options match the search input. Defaults to `No results found`. */
  emptyMessage?: string;
  /** Classes for the wrapper around the trigger button, merged after the defaults. */
  className?: string;
  /** Classes for the options list, merged after the defaults. */
  listClassName?: string;
  /** Maximum number of suggestions to display in the dropdown. Defaults to `10`. */
  maxSuggestions?: number;
  /** Debounce delay for async searches in milliseconds. Defaults to `300`. */
  debounceMs?: number;
  /** Minimum number of characters required before an async search. Defaults to `2`. */
  minSearch?: number;
  /** Message displayed while loading options asynchronously. Defaults to `Loading...`. */
  loadingMessage?: string;
  /** Message displayed when an async fetch fails. Defaults to `Failed to load options`. */
  errorMessage?: string;
  /**
   * Additional class names for the popover content (e.g. to set min-width or width).
   */
  popoverClassName?: string;
  /**
   * The popover's z-index. Defaults to the `dropdown` value from `configureZIndex`, which
   * starts at `50`.
   */
  zIndex?: number;
  /**
   * Disables the trigger. It stays focusable and is marked `aria-disabled`, but the list
   * doesn't open. Defaults to `false`.
   */
  isDisabled?: boolean;
  /**
   * The name for form submission. When set, a hidden input submits the selected value.
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
