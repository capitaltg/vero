import { A11yDebugHarness } from '@/stories/A11yDebugHarness';
import { useState } from 'react';
import { DatePicker } from '../src/DatePicker';

/**
 * Debug harness for the DatePicker's screen-reader output. Focus the trigger to
 * confirm its accessible name reads back the field label + the selected date,
 * and watch focus/live-region events as you open the calendar and choose a day.
 */
export const DatePickerAnnouncementDebug = () => {
  const [value, setValue] = useState<Date | undefined>(undefined);
  return (
    <A11yDebugHarness>
      <DatePicker placeholder="Pick a date" value={value} onChange={setValue} />
      {/* aria-hidden so the screen reader only reads the DatePicker itself. */}
      <p aria-hidden="true" className="text-sm text-muted-foreground">
        Selected date:{' '}
        <span className="font-medium">{value ? value.toLocaleDateString() : 'none'}</span>
      </p>
    </A11yDebugHarness>
  );
};
