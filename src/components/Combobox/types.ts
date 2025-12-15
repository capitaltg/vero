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
