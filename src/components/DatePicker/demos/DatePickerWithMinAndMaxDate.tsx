import { addDays, subDays } from 'date-fns';
import { useState } from 'react';
import { DatePicker } from '../src/DatePicker';

export const DatePickerWithMinAndMaxDate = () => {
  const [value, setValue] = useState<Date | undefined>(undefined);
  const today = new Date();
  const minDate = subDays(today, 7);
  const maxDate = addDays(today, 30);

  return (
    <div className="space-y-4">
      <DatePicker
        maxDate={maxDate}
        minDate={minDate}
        placeholder="Pick a date"
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Selectable between {minDate.toLocaleDateString()} and {maxDate.toLocaleDateString()}.
        Selected date: {value ? value.toLocaleDateString() : 'none'}
      </p>
    </div>
  );
};
