import { HTMLAttributes } from 'react';

export interface MultiSelectOption {
  /** The value stored in the `value` array. The search matches this, not the label. */
  value: string;
  /** The text shown in the list and on the selected chip. */
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
  /** The options to choose from, in order. */
  options: MultiSelectOption[];
  /** The selected options' values, in the order they were chosen. */
  value: string[];
  /**
   * Called with the new array of values when the user selects or deselects an option, or
   * removes a chip.
   */
  onChange: (value: string[]) => void;
  /** Text on the trigger when nothing is selected. Defaults to `Select items...`. */
  placeholder?: string;
  /** Placeholder for the search field in the list. Defaults to `Search items...`. */
  searchPlaceholder?: string;
  /** Text shown when the search matches no options. Defaults to `No items found`. */
  emptyMessage?: string;
  /** Classes for the trigger, merged after the defaults. */
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
   * Disables the multi-select. The trigger stays focusable and is marked `aria-disabled`,
   * so screen reader users can still find it, but it doesn't open. Defaults to `false`.
   */
  isDisabled?: boolean;
  /**
   * The name of a hidden input that holds the selected values, joined with commas, so
   * they're submitted with a form.
   */
  name?: string;
  /**
   * Adds `required` to the hidden input. Browsers don't validate hidden inputs, so this
   * doesn't stop a form from submitting, and the trigger doesn't get `aria-required`.
   * Check the value yourself, and show the requirement and any error with `FormItem`.
   */
  required?: boolean;
  /**
   * Automatically focuses the multi-select when the page loads.
   */
  autoFocus?: boolean;
}
