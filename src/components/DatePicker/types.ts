import { ButtonHTMLAttributes } from 'react';

// Pick form-related attributes from SelectHTMLAttributes that we want to support
type DatePickerFormAttributes = Pick<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'name' | 'required' | 'autoFocus'
>;

export interface DatePickerProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'disabled' | 'value'>,
    DatePickerFormAttributes {
  value?: Date;
  startMonth?: Date;
  endMonth?: Date;
  /**
   * The earliest date a user can select, inclusive.
   * Days before this are disabled in the calendar. When `startMonth` is not
   * set, navigation is also limited to this date's month.
   */
  minDate?: Date;
  /**
   * The latest date a user can select, inclusive.
   * Days after this are disabled in the calendar. When `endMonth` is not
   * set, navigation is also limited to this date's month.
   */
  maxDate?: Date;
  onChange: (date?: Date) => void;
  placeholder?: string;
  className?: string;
  zIndex?: number;
  isDisabled?: boolean;
  /**
   * The name attribute for form submission.
   * This is required for the date picker value to be included in form data.
   */
  name?: string;
  /**
   * Whether the date picker is required for form validation.
   * When true, the form cannot be submitted without a date selection.
   */
  required?: boolean;
  /**
   * Automatically focuses the date picker when the page loads.
   */
  autoFocus?: boolean;
}
