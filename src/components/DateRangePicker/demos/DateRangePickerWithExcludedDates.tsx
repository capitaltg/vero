import { useState } from 'react';
import { DateRangePicker } from '../src/DateRangePicker';
import type { DateRange } from '../types';

export const DateRangePickerWithExcludedDates = () => {
  const [value, setValue] = useState<DateRange>({});
  const isWeekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6;

  return (
    <div className="space-y-4">
      <DateRangePicker
        excludeDates={isWeekend}
        placeholder={{ from: 'Start date', to: 'End date' }}
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Weekends are disabled, and a range may not span one — picking an end date across a weekend
        starts a new range instead. Selected range:{' '}
        {value.from
          ? `${value.from.toLocaleDateString()}${value.to ? ` - ${value.to.toLocaleDateString()}` : ''}`
          : 'none'}
      </p>
    </div>
  );
};
