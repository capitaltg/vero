import { endOfMonth, startOfMonth } from 'date-fns';
import { Matcher } from 'react-day-picker';

/**
 * Days to exclude from selection: an explicit list, or a predicate for rules
 * such as weekends or holidays.
 */
export type ExcludeDates = Date[] | ((date: Date) => boolean);

export interface DateBounds {
  /** Earliest selectable date, inclusive. */
  minDate?: Date;
  /** Latest selectable date, inclusive. */
  maxDate?: Date;
  /** Individual days to disable inside the allowed window. */
  excludeDates?: ExcludeDates;
  /**
   * Explicit navigation bounds, which take precedence over the derived ones.
   *
   * @deprecated Prefer `minDate`/`maxDate`. Retained so callers can still widen
   * navigation beyond what is selectable.
   */
  startMonth?: Date;
  /** @deprecated See `startMonth`. */
  endMonth?: Date;
}

export interface ResolvedDateBounds {
  /** Matchers to hand to the calendar's `disabled` prop, or undefined when unbounded. */
  disabled?: Matcher[];
  startMonth?: Date;
  endMonth?: Date;
}

/**
 * Translates `minDate`/`maxDate`/`excludeDates` into the props the calendar
 * understands.
 *
 * Day-level bounds become `disabled` matchers, which is what actually blocks
 * selection. They also narrow the navigable month range so a user can't page
 * into a month with nothing selectable in it — unless `startMonth`/`endMonth`
 * were passed explicitly, in which case those win.
 *
 * `excludeDates` only disables days; unlike the bounds it leaves navigation
 * alone, since exclusions are holes inside the window rather than edges of it.
 *
 * The two bounds are kept as separate matchers rather than a single
 * `{ before, after }` interval: react-day-picker treats any object with both
 * keys as an interval, so a half-open range would break once one side is
 * undefined.
 */
export function resolveDateBounds({
  minDate,
  maxDate,
  excludeDates,
  startMonth,
  endMonth,
}: DateBounds): ResolvedDateBounds {
  const disabled: Matcher[] = [];

  if (minDate) disabled.push({ before: minDate });
  if (maxDate) disabled.push({ after: maxDate });

  if (typeof excludeDates === 'function') {
    disabled.push(excludeDates);
  } else if (excludeDates) {
    // Spread into individual Date matchers rather than pushing the array as one
    // matcher. react-day-picker matches a Date[] with `Array.includes`, i.e. by
    // object reference, so a listed date would never match an equal-but-distinct
    // Date from the grid. A lone Date matcher is compared with `isSameDay`,
    // which is what callers expect. (Its `rangeContainsModifiers` does use
    // same-day comparison for arrays, so leaving this as an array would disagree
    // with itself: the day would stay clickable but block a range spanning it.)
    disabled.push(...excludeDates);
  }

  return {
    disabled: disabled.length > 0 ? disabled : undefined,
    startMonth: startMonth ?? (minDate ? startOfMonth(minDate) : undefined),
    endMonth: endMonth ?? (maxDate ? endOfMonth(maxDate) : undefined),
  };
}
