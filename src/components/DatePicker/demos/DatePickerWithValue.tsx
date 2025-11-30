import { useState } from 'react';
import { DatePicker } from '../src/DatePicker';

export const DatePickerWithValue = () => {
  const [value, setValue] = useState<Date | undefined>(new Date('2024-03-15'));
  return (
    <div className="space-y-4">
      <DatePicker value={value} onChange={setValue} placeholder="Pick a date" />
      <p className="text-sm text-muted-foreground">
        Selected date: {value ? value.toLocaleDateString() : 'none'}
      </p>
    </div>
  );
};
