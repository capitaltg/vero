import { useState } from 'react';
import { DatePicker } from '../src/DatePicker';
import { DatePickerProps } from '../types';

export const DatePickerDefault = ({
  placeholder = 'Pick a date',
  ...args
}: Partial<DatePickerProps>) => {
  const [value, setValue] = useState<Date | undefined>(args.value);
  return (
    <div className="space-y-4">
      <DatePicker placeholder={placeholder} value={value} onChange={setValue} {...args} />
      <p className="text-sm text-muted-foreground">
        Selected date: {value ? value.toLocaleDateString() : 'none'}
      </p>
    </div>
  );
};
