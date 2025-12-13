import { ButtonHTMLAttributes } from 'react';

export interface DateRange {
  from?: Date;
  to?: Date;
}

// Pick form-related attributes from SelectHTMLAttributes that we want to support
type DateRangePickerFormAttributes = Pick<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'name' | 'required' | 'autoFocus'
>;

export interface DateRangePickerProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'disabled' | 'value'>,
    DateRangePickerFormAttributes {
  value: DateRange;
  onChange: (range: DateRange) => void;
  placeholder?: {
    from?: string;
    to?: string;
  };
  className?: string;
  zIndex?: number;
  isDisabled?: boolean;
  /**
   * The name attribute for form submission.
   * This is required for the date range picker value to be included in form data.
   */
  name?: string;
  /**
   * Whether the date range picker is required for form validation.
   * When true, the form cannot be submitted without a date range selection.
   */
  required?: boolean;
  /**
   * Automatically focuses the date range picker when the page loads.
   */
  autoFocus?: boolean;
}
