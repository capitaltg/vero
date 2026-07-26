import { A11yDebugHarness } from '@/stories/A11yDebugHarness';
import { useState } from 'react';
import { DateRangePicker } from '../src/DateRangePicker';
import type { DateRange } from '../types';

/**
 * Debug harness for the DateRangePicker's screen-reader output. Focus the
 * trigger to confirm its accessible name reads back the field label + the
 * selected range, and watch focus/live-region events as you pick start and end
 * dates.
 */
export const DateRangePickerAnnouncementDebug = () => {
  const [value, setValue] = useState<DateRange>({});
  return (
    <A11yDebugHarness>
      <DateRangePicker
        placeholder={{ from: 'Start date', to: 'End date' }}
        value={value}
        onChange={setValue}
      />
      {/* aria-hidden so the screen reader only reads the DateRangePicker itself. */}
      <p aria-hidden="true" className="text-sm text-muted-foreground">
        Selected range:{' '}
        <span className="font-medium">
          {value.from
            ? value.to
              ? `${value.from.toLocaleDateString()} - ${value.to.toLocaleDateString()}`
              : value.from.toLocaleDateString()
            : 'none'}
        </span>
      </p>
    </A11yDebugHarness>
  );
};
