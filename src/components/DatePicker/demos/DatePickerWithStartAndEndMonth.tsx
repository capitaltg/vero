import { useState } from 'react';
import { DatePicker } from '../src/DatePicker';

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
        Selected date: {value ? value.toLocaleDateString() : 'none'}
      </p>
    </div>
  );
};
