import { ExcludeDates } from '@/lib/date-bounds';
import { ButtonHTMLAttributes } from 'react';

export interface DateRange {
  /** The first day of the range. */
  from?: Date;
  /** The last day of the range. */
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
  /** The selected range, as `{ from, to }`. Pass `{}` for no selection. */
  value: DateRange;
  /**
   * Called with the new range on each click in the calendar. The first click sets `from`; the
   * next click on a later day sets `to`. Clicking an earlier day, clicking after a complete
   * range, or picking a range that would include an excluded day starts a new range.
   * Clicking `from` again before picking an end clears the range.
   */
  onChange: (range: DateRange) => void;
  /**
   * The text on the button when no range is selected. Only `from` is shown; `to` isn't used.
   * Defaults to `{ from: 'Pick start date', to: 'Pick end date' }`.
   */
  placeholder?: {
    from?: string;
    to?: string;
  };
  /** Classes for the wrapper around the trigger button, merged after the defaults. */
  className?: string;
  /**
   * The calendar popover's z-index. Defaults to the `popover` value from `configureZIndex`,
   * which starts at `50`.
   */
  zIndex?: number;
  /**
   * Disables the button. It stays focusable and is marked `aria-disabled`, but the calendar
   * doesn't open. Defaults to `false`.
   */
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
   * The name for form submission. When set, a hidden input submits the range as
   * `yyyy-MM-dd,yyyy-MM-dd`, just the start date when there's no end, or an empty string.
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
