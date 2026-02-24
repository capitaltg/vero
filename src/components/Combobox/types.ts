import { ButtonHTMLAttributes } from 'react';

export interface ComboboxOption {
  value: string;
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
  options: ComboboxOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  /**
   * Custom filter function for search. Receives the option's value and current search string.
   * Return 0 to hide the item, or a positive number to show it (higher = better match rank).
   * When not provided, default filtering matches by both value and label (case-insensitive substring).
   */
  filter?: (value: string, search: string) => number;
  className?: string;
  listClassName?: string;
  zIndex?: number;
  isDisabled?: boolean;
  /**
   * The name attribute for form submission.
   * This is required for the combobox value to be included in form data.
   */
  name?: string;
  /**
   * Whether the combobox is required for form validation.
   * When true, the form cannot be submitted without a selection.
   */
  required?: boolean;
  /**
   * Automatically focuses the combobox when the page loads.
   */
  autoFocus?: boolean;
}
