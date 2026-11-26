import { ButtonHTMLAttributes } from 'react';

export interface ComboboxOption {
  /** The value stored and passed to `onChange`. */
  value: string;
  /** The text shown in the list and on the trigger. */
  label: string;
}

// Pick form-related attributes from SelectHTMLAttributes that we want to support
type ComboboxFormAttributes = Pick<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'name' | 'required' | 'autoFocus'
>;

export interface ComboboxProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'disabled'>,
    ComboboxFormAttributes {
  /** The options to choose from, in order. */
  options: ComboboxOption[];
  /** The selected option's `value`, or `''` for none. */
  value: string;
  /**
   * Called with the chosen option's `value`. Choosing the selected option again clears it,
   * so this is called with `''`.
   */
  onChange: (value: string) => void;
  /** Text on the trigger when nothing is selected. Defaults to `Select an item...`. */
  placeholder?: string;
  /** Placeholder for the search field in the list. Defaults to `Search items...`. */
  searchPlaceholder?: string;
  /** Text shown when the search matches no options. Defaults to `No items found`. */
  emptyMessage?: string;
  /**
   * Custom filter function for search. Receives the option's value and current search string.
   * Return 0 to hide the item, or a positive number to show it (higher = better match rank).
   * When not provided, default filtering matches by both value and label (case-insensitive substring).
   */
  filter?: (value: string, search: string) => number;
  /** Classes for the trigger button, merged after the defaults. */
  className?: string;
  /** Classes for the scrolling options list. */
  listClassName?: string;
  /** Additional class names for the popover content (e.g. to set min-width or width). */
  popoverClassName?: string;
  /**
   * Z-index value for the popover dropdown.
   * If not provided, uses the default z-index from the theme.
   */
  zIndex?: number;
  /**
   * Disables the combobox. The trigger stays focusable and is marked `aria-disabled`, so
   * screen reader users can still find it, but it doesn't open. Defaults to `false`.
   */
  isDisabled?: boolean;
  /**
   * The name of a hidden input that holds the selected value, so it's submitted with a
   * form.
   */
  name?: string;
  /**
   * Adds `required` to the hidden input. Browsers don't validate hidden inputs, so this
   * doesn't stop a form from submitting, and the trigger doesn't get `aria-required`.
   * Check the value yourself, and show the requirement and any error with `FormItem`.
   */
  required?: boolean;
  /**
   * Automatically focuses the combobox when the page loads.
   */
  autoFocus?: boolean;
}
