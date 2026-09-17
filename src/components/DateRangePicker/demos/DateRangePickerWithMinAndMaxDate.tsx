import { addDays, subDays } from 'date-fns';
import { useState } from 'react';
import { DateRangePicker } from '../src/DateRangePicker';
import type { DateRange } from '../types';

export const DateRangePickerWithMinAndMaxDate = () => {
  const [value, setValue] = useState<DateRange>({});
  const today = new Date();
  const minDate = subDays(today, 7);
  const maxDate = addDays(today, 30);

  return (
    <div className="space-y-4">
      <DateRangePicker
        maxDate={maxDate}
        minDate={minDate}
        placeholder={{ from: 'Start date', to: 'End date' }}
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Selectable between {minDate.toLocaleDateString()} and {maxDate.toLocaleDateString()}.
        Selected range:{' '}
        {value.from
          ? `${value.from.toLocaleDateString()}${value.to ? ` - ${value.to.toLocaleDateString()}` : ''}`
          : 'none'}
      </p>
    </div>
  );
};
