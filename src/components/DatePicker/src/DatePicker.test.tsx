import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { DatePicker } from './DatePicker';

/** Returns the clickable button inside the day cell for an ISO date, if rendered. */
const dayButton = (iso: string) =>
  document.querySelector(`[data-day="${iso}"]`)?.querySelector('button') ?? null;

const navButton = (name: RegExp) => screen.getByRole('button', { name });

/** Vero's nav buttons signal their state with aria-disabled, and omit it when enabled. */
const expectNavDisabled = (name: RegExp, disabled: boolean) =>
  disabled
    ? expect(navButton(name)).toHaveAttribute('aria-disabled', 'true')
    : expect(navButton(name)).not.toHaveAttribute('aria-disabled');

const setup = () => userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

const openCalendar = async (user: ReturnType<typeof setup>) => {
  await user.click(screen.getByRole('button', { name: /pick a date/i }));
  expect(await screen.findByRole('grid')).toBeInTheDocument();
};

const Harness = (props: { minDate?: Date; maxDate?: Date; startMonth?: Date; endMonth?: Date }) => {
  const [value, setValue] = useState<Date | undefined>(undefined);
  return <DatePicker placeholder="Pick a date" value={value} onChange={setValue} {...props} />;
};

describe('DatePicker', () => {
  // The calendar opens on the current month, so pin it to keep the fixtures below in view.
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    vi.setSystemTime(new Date(2025, 5, 15));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('minDate / maxDate', () => {
    it('disables days before minDate and leaves minDate itself selectable', async () => {
      const user = setup();
      render(<Harness minDate={new Date(2025, 5, 10)} />);
      await openCalendar(user);

      expect(dayButton('2025-06-09')).toBeDisabled();
      expect(dayButton('2025-06-10')).toBeEnabled();
    });

    it('disables days after maxDate and leaves maxDate itself selectable', async () => {
      const user = setup();
      render(<Harness maxDate={new Date(2025, 5, 20)} minDate={new Date(2025, 5, 10)} />);
      await openCalendar(user);

      expect(dayButton('2025-06-20')).toBeEnabled();
      expect(dayButton('2025-06-21')).toBeDisabled();
    });

    it('does not fire onChange when a disabled day is clicked', async () => {
      const user = setup();
      const onChange = vi.fn();
      render(
        <DatePicker
          maxDate={new Date(2025, 5, 20)}
          minDate={new Date(2025, 5, 10)}
          placeholder="Pick a date"
          value={undefined}
          onChange={onChange}
        />,
      );
      await openCalendar(user);

      await user.click(dayButton('2025-06-05')!);
      expect(onChange).not.toHaveBeenCalled();

      await user.click(dayButton('2025-06-15')!);
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('ignores the time of day on the bounds', async () => {
      const user = setup();
      // A minDate late in the day should still allow that whole calendar day.
      render(<Harness minDate={new Date(2025, 5, 10, 23, 59)} />);
      await openCalendar(user);

      expect(dayButton('2025-06-10')).toBeEnabled();
    });

    it('limits navigation to the bounding months', async () => {
      const user = setup();
      render(<Harness maxDate={new Date(2025, 5, 20)} minDate={new Date(2025, 5, 10)} />);
      await openCalendar(user);

      expectNavDisabled(/previous/i, true);
      expectNavDisabled(/next/i, true);
    });

    // startMonth is deprecated in favour of minDate, but still honoured: it is the
    // only way to browse a wider range than can be selected.
    it('lets a deprecated startMonth widen navigation without widening selection', async () => {
      const user = setup();
      render(<Harness minDate={new Date(2025, 5, 10)} startMonth={new Date(2025, 0)} />);
      await openCalendar(user);

      // Navigation is no longer pinned to June...
      expectNavDisabled(/previous/i, false);
      // ...but the day-level bound still holds.
      expect(dayButton('2025-06-09')).toBeDisabled();
    });

    it('disables nothing when neither bound is set', async () => {
      const user = setup();
      render(<Harness />);
      await openCalendar(user);

      expect(screen.getByRole('grid').querySelectorAll('[data-disabled]')).toHaveLength(0);
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
      document.querySelector<HTMLInputElement>('input[type="hidden"][name="appointment"]');

    it('serializes the date the user picked, not its UTC equivalent', () => {
      // Local midnight in Tokyo is the previous day in UTC.
      const value = new Date(2025, 5, 15);
      render(<DatePicker name="appointment" value={value} onChange={() => {}} />);

      expect(hiddenInput()).toHaveValue('2025-06-15');
    });

    it('serializes the same day the trigger displays', () => {
      const value = new Date(2025, 5, 15);
      render(<DatePicker name="appointment" value={value} onChange={() => {}} />);

      expect(screen.getByRole('button', { name: /June 15, 2025/i })).toBeInTheDocument();
      expect(hiddenInput()).toHaveValue('2025-06-15');
    });

    it('serializes an empty string when there is no value', () => {
      render(<DatePicker name="appointment" value={undefined} onChange={() => {}} />);

      expect(hiddenInput()).toHaveValue('');
    });
  });
});
