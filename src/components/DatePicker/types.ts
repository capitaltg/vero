import { ExcludeDates } from '@/lib/date-bounds';
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
  /**
   * Days to exclude from selection inside the allowed window, as an explicit
   * list or a predicate. Excluded days are disabled in the calendar. Unlike
   * `minDate`/`maxDate` this does not affect which months can be navigated to.
   */
  excludeDates?: ExcludeDates;
  /**
   * The earliest month a user can navigate to.
   *
   * @deprecated Prefer `minDate`, which constrains selection as well as
   * navigation. `startMonth` works at month granularity and never blocked
   * selection: every day in the boundary month stays selectable, so it cannot
   * express a bound like "no earlier than the 15th". It stays supported for the
   * uncommon case of letting users browse a wider range than they can select,
   * where it takes precedence over the month derived from `minDate`.
   */
  startMonth?: Date;
  /**
   * The latest month a user can navigate to.
   *
   * @deprecated Prefer `maxDate`, which constrains selection as well as
   * navigation. `endMonth` works at month granularity and never blocked
   * selection: every day in the boundary month stays selectable, so it cannot
   * express a bound like "no later than the 15th". It stays supported for the
   * uncommon case of letting users browse a wider range than they can select,
   * where it takes precedence over the month derived from `maxDate`.
   */
  endMonth?: Date;
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
