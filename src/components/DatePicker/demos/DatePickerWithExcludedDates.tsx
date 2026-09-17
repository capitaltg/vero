import { addDays } from 'date-fns';
import { useState } from 'react';
import { DatePicker } from '../src/DatePicker';

export const DatePickerWithExcludedDates = () => {
  const [value, setValue] = useState<Date | undefined>(undefined);
  const today = new Date();
  // A couple of blackout days, plus every weekend.
  const blackout = [addDays(today, 3), addDays(today, 4)];

  return (
    <div className="space-y-4">
      <DatePicker
        excludeDates={date =>
          date.getDay() === 0 ||
          date.getDay() === 6 ||
          blackout.some(d => d.toDateString() === date.toDateString())
        }
        placeholder="Pick a weekday"
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Weekends and two blackout days are disabled. Selected date:{' '}
        {value ? value.toLocaleDateString() : 'none'}
      </p>
    </div>
  );
};
