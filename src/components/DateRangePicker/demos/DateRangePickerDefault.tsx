import { useState } from 'react';
import { DateRangePicker } from '../src/DateRangePicker';
import type { DateRange, DateRangePickerProps } from '../types';

export const DateRangePickerDefault = ({
  placeholder = { from: 'Start date', to: 'End date' },
  ...args
}: Partial<DateRangePickerProps>) => {
  const [value, setValue] = useState<DateRange>(args.value || {});
  return (
    <div className="space-y-4">
      <DateRangePicker placeholder={placeholder} value={value} onChange={setValue} {...args} />
      <p className="text-sm text-muted-foreground">
        Selected range:{' '}
        {value.from ? (
          value.to ? (
            <>
              {value.from.toLocaleDateString()} - {value.to.toLocaleDateString()}
            </>
          ) : (
            value.from.toLocaleDateString()
          )
        ) : (
          'none'
        )}
      </p>
    </div>
  );
};
