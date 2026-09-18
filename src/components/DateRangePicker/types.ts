import { ExcludeDates } from '@/lib/date-bounds';
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
