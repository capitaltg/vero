import { useState } from 'react';
import { DatePicker } from '../src/DatePicker';

export const DatePickerWithStartAndEndMonth = () => {
  const [value, setValue] = useState<Date | undefined>(undefined);
  return (
    <div className="space-y-4">
      <DatePicker
        value={value}
        onChange={setValue}
        placeholder="Pick a date"
        startMonth={new Date(2020, 0)}
        endMonth={new Date(2025, 11)}
      />
      <p className="text-sm text-muted-foreground">
        Selected date: {value ? value.toLocaleDateString() : 'none'}
      </p>
    </div>
  );
};
