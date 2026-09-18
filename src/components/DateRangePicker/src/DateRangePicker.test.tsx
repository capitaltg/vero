import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { DateRange } from '../types';
import { DateRangePicker } from './DateRangePicker';

/** Returns the clickable button inside the day cell for an ISO date, if rendered. */
const dayButton = (iso: string) =>
  document.querySelector(`[data-day="${iso}"]`)?.querySelector('button') ?? null;

const setup = () => userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

const openCalendar = async (user: ReturnType<typeof setup>) => {
  await user.click(screen.getByRole('button', { name: /start date/i }));
  expect(await screen.findAllByRole('grid')).not.toHaveLength(0);
};

const Harness = ({
  onChange,
  ...props
}: {
  minDate?: Date;
  maxDate?: Date;
  excludeDates?: Date[] | ((date: Date) => boolean);
  onChange?: (range: DateRange) => void;
}) => {
  const [value, setValue] = useState<DateRange>({});
  return (
    <DateRangePicker
      placeholder={{ from: 'Start date', to: 'End date' }}
      value={value}
      onChange={range => {
        setValue(range);
        onChange?.(range);
      }}
      {...props}
    />
  );
};

describe('DateRangePicker', () => {
  // The calendar opens on the current month, so pin it to keep the fixtures below in view.
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    vi.setSystemTime(new Date(2025, 5, 15));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('minDate / maxDate', () => {
    it('disables days outside the bounds and leaves the bounds themselves selectable', async () => {
      const user = setup();
      render(<Harness maxDate={new Date(2025, 5, 20)} minDate={new Date(2025, 5, 10)} />);
      await openCalendar(user);

      expect(dayButton('2025-06-09')).toBeDisabled();
      expect(dayButton('2025-06-10')).toBeEnabled();
      expect(dayButton('2025-06-20')).toBeEnabled();
      expect(dayButton('2025-06-21')).toBeDisabled();
    });

    it('cannot start a range on a disabled day', async () => {
      const user = setup();
      const onChange = vi.fn();
      render(
        <Harness
          maxDate={new Date(2025, 5, 20)}
          minDate={new Date(2025, 5, 10)}
          onChange={onChange}
        />,
      );
      await openCalendar(user);

      await user.click(dayButton('2025-06-05')!);
      expect(onChange).not.toHaveBeenCalled();
    });

    it('cannot complete a range on a day past maxDate', async () => {
      const user = setup();
      const onChange = vi.fn();
      render(
        <Harness
          maxDate={new Date(2025, 5, 20)}
          minDate={new Date(2025, 5, 10)}
          onChange={onChange}
        />,
      );
      await openCalendar(user);

      await user.click(dayButton('2025-06-12')!);
      expect(onChange).toHaveBeenLastCalledWith({ from: new Date(2025, 5, 12), to: undefined });

      // The out-of-bounds day is inert, so the half-open range is left untouched.
      onChange.mockClear();
      await user.click(dayButton('2025-06-25')!);
      expect(onChange).not.toHaveBeenCalled();

      // An in-bounds day still completes the range.
      await user.click(dayButton('2025-06-18')!);
      expect(onChange).toHaveBeenLastCalledWith({
        from: new Date(2025, 5, 12),
        to: new Date(2025, 5, 18),
      });
    });

    it('disables nothing when neither bound is set', async () => {
      const user = setup();
      render(<Harness />);
      await openCalendar(user);

      const disabled = screen
        .getAllByRole('grid')
        .flatMap(grid => [...grid.querySelectorAll('[data-disabled]')]);
      expect(disabled).toHaveLength(0);
    });
  });
  describe('form submission', () => {
    // The default test timezone is west of UTC, where local-midnight dates happen
    // to round-trip correctly through UTC. Pin an eastern zone so they do not.
    const originalTz = process.env.TZ;

    beforeEach(() => {
      process.env.TZ = 'Asia/Tokyo';
    });

    afterEach(() => {
      process.env.TZ = originalTz;
    });

    const hiddenInput = () =>
      document.querySelector<HTMLInputElement>('input[type="hidden"][name="stay"]');

    const renderWith = (value: DateRange) =>
      render(<DateRangePicker name="stay" value={value} onChange={() => {}} />);

    it('serializes both ends as the days the user picked, not their UTC equivalents', () => {
      // Local midnight in Tokyo is the previous day in UTC.
      renderWith({ from: new Date(2025, 5, 15), to: new Date(2025, 5, 20) });

      expect(hiddenInput()).toHaveValue('2025-06-15,2025-06-20');
    });

    it('serializes a half-open range as a single local date', () => {
      renderWith({ from: new Date(2025, 5, 15), to: undefined });

      expect(hiddenInput()).toHaveValue('2025-06-15');
    });

    it('serializes an empty string when there is no value', () => {
      renderWith({});

      expect(hiddenInput()).toHaveValue('');
    });
  });
  describe('selection handling', () => {
    it('calls onChange exactly once per click', async () => {
      const user = setup();
      const onChange = vi.fn();
      render(<Harness onChange={onChange} />);
      await openCalendar(user);

      // Opening a range.
      await user.click(dayButton('2025-06-10')!);
      expect(onChange).toHaveBeenCalledTimes(1);

      // Completing it. react-day-picker runs its own range logic on every
      // click and reports it through onSelect; only handleDayClick may write.
      onChange.mockClear();
      await user.click(dayButton('2025-06-20')!);
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith({
        from: new Date(2025, 5, 10),
        to: new Date(2025, 5, 20),
      });
    });

    it('restarts the range when a day before the start is clicked', async () => {
      const user = setup();
      const onChange = vi.fn();
      render(<Harness onChange={onChange} />);
      await openCalendar(user);

      await user.click(dayButton('2025-06-20')!);
      onChange.mockClear();

      // Vero restarts here. react-day-picker's addToRange would instead
      // complete the range backwards, as { from: 10th, to: 20th }.
      await user.click(dayButton('2025-06-10')!);
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith({ from: new Date(2025, 5, 10), to: undefined });
    });

    it('restarts the range when a completed range is clicked', async () => {
      const user = setup();
      const onChange = vi.fn();
      render(<Harness onChange={onChange} />);
      await openCalendar(user);

      await user.click(dayButton('2025-06-10')!);
      await user.click(dayButton('2025-06-20')!);
      onChange.mockClear();

      // Vero starts over. react-day-picker's addToRange would adjust an end.
      await user.click(dayButton('2025-06-15')!);
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith({ from: new Date(2025, 5, 15), to: undefined });
    });
    it('stays controlled: the highlight follows `value`, not internal state', async () => {
      const user = setup();
      // A parent that refuses every change. If react-day-picker fell back to its
      // own uncontrolled selection -- which it does when `onSelect` is absent --
      // it would highlight the clicked day anyway.
      render(
        <DateRangePicker
          placeholder={{ from: 'Start date', to: 'End date' }}
          value={{}}
          onChange={() => {}}
        />,
      );
      await openCalendar(user);

      await user.click(dayButton('2025-06-10')!);

      expect(document.querySelector('[data-day="2025-06-10"]')).not.toHaveAttribute(
        'data-selected',
      );
      expect(screen.getByRole('button', { name: /start date/i })).toBeInTheDocument();
    });
  });
  describe('excludeDates', () => {
    it('disables an excluded day so it cannot be an endpoint', async () => {
      const user = setup();
      render(<Harness excludeDates={[new Date(2025, 5, 15)]} />);
      await openCalendar(user);

      expect(dayButton('2025-06-15')).toBeDisabled();
      expect(dayButton('2025-06-14')).toBeEnabled();
    });

    it('restarts rather than completing a range that would span an excluded day', async () => {
      const user = setup();
      const onChange = vi.fn();
      render(<Harness excludeDates={[new Date(2025, 5, 15)]} onChange={onChange} />);
      await openCalendar(user);

      await user.click(dayButton('2025-06-10')!);
      expect(onChange).toHaveBeenLastCalledWith({ from: new Date(2025, 5, 10), to: undefined });

      // The 20th is selectable, but the span would swallow the excluded 15th.
      onChange.mockClear();
      await user.click(dayButton('2025-06-20')!);
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith({ from: new Date(2025, 5, 20), to: undefined });
    });

    it('still completes a range that clears the excluded day', async () => {
      const user = setup();
      const onChange = vi.fn();
      render(<Harness excludeDates={[new Date(2025, 5, 15)]} onChange={onChange} />);
      await openCalendar(user);

      await user.click(dayButton('2025-06-16')!);
      onChange.mockClear();
      await user.click(dayButton('2025-06-20')!);

      expect(onChange).toHaveBeenCalledWith({
        from: new Date(2025, 5, 16),
        to: new Date(2025, 5, 20),
      });
    });

    // June 2025: the 12th is a Thursday, 13th Friday, 14th/15th the weekend, 18th a Wednesday.
    const weekends = (d: Date) => d.getDay() === 0 || d.getDay() === 6;

    it('completes a range that does not cross an excluded weekend', async () => {
      const user = setup();
      const onChange = vi.fn();
      render(<Harness excludeDates={weekends} onChange={onChange} />);
      await openCalendar(user);

      await user.click(dayButton('2025-06-12')!); // Thursday
      onChange.mockClear();
      await user.click(dayButton('2025-06-13')!); // Friday, nothing excluded in between

      expect(onChange).toHaveBeenCalledWith({
        from: new Date(2025, 5, 12),
        to: new Date(2025, 5, 13),
      });
    });

    it('restarts when the span would cross an excluded weekend', async () => {
      const user = setup();
      const onChange = vi.fn();
      render(<Harness excludeDates={weekends} onChange={onChange} />);
      await openCalendar(user);

      await user.click(dayButton('2025-06-12')!); // Thursday
      onChange.mockClear();
      await user.click(dayButton('2025-06-18')!); // Wednesday, but the weekend is in between

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith({ from: new Date(2025, 5, 18), to: undefined });
    });

    it('does not restrict spans when nothing is excluded', async () => {
      const user = setup();
      const onChange = vi.fn();
      render(
        <Harness
          maxDate={new Date(2025, 5, 28)}
          minDate={new Date(2025, 5, 1)}
          onChange={onChange}
        />,
      );
      await openCalendar(user);

      await user.click(dayButton('2025-06-05')!);
      onChange.mockClear();
      await user.click(dayButton('2025-06-25')!);

      // The bounds matchers must never trip the span check.
      expect(onChange).toHaveBeenCalledWith({
        from: new Date(2025, 5, 5),
        to: new Date(2025, 5, 25),
      });
    });
  });
});
