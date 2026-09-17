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
});
