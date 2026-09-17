import { endOfMonth, startOfMonth } from 'date-fns';
import { Matcher } from 'react-day-picker';

export interface DateBounds {
  /** Earliest selectable date, inclusive. */
  minDate?: Date;
  /** Latest selectable date, inclusive. */
  maxDate?: Date;
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
 * Translates `minDate`/`maxDate` into the props the calendar understands.
 *
 * Day-level bounds become `disabled` matchers, which is what actually blocks
 * selection. They also narrow the navigable month range so a user can't page
 * into a month with nothing selectable in it — unless `startMonth`/`endMonth`
 * were passed explicitly, in which case those win.
 *
 * The two bounds are kept as separate matchers rather than a single
 * `{ before, after }` interval: react-day-picker treats any object with both
 * keys as an interval, so a half-open range would break once one side is
 * undefined.
 */
export function resolveDateBounds({
  minDate,
  maxDate,
  startMonth,
  endMonth,
}: DateBounds): ResolvedDateBounds {
  const disabled: Matcher[] = [];

  if (minDate) disabled.push({ before: minDate });
  if (maxDate) disabled.push({ after: maxDate });

  return {
    disabled: disabled.length > 0 ? disabled : undefined,
    startMonth: startMonth ?? (minDate ? startOfMonth(minDate) : undefined),
    endMonth: endMonth ?? (maxDate ? endOfMonth(maxDate) : undefined),
  };
}
