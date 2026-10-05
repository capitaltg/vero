import { useState } from 'react';
import { DatePicker } from '../src/DatePicker';

/**
 * Deprecated -- prefer `minDate`/`maxDate`, as shown in the WithMinAndMaxDate
 * demo. `startMonth`/`endMonth` only limit navigation, so every day in January
 * 2020 and December 2025 below remains selectable.
 */
export const DatePickerWithStartAndEndMonth = () => {
  const [value, setValue] = useState<Date | undefined>(undefined);
  return (
    <div className="space-y-4">
      <DatePicker
        endMonth={new Date(2025, 11)}
        placeholder="Pick a date"
        startMonth={new Date(2020, 0)}
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Navigation is limited to Jan 2020 - Dec 2025, but every day within those months stays
        selectable. Selected date: {value ? value.toLocaleDateString() : 'none'}
      </p>
    </div>
  );
};
