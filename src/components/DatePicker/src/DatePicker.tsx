import { Button } from '@/components/Button';
import { Calendar } from '@/components/Calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { cn } from '@/lib/utils';
import { getZIndex } from '@/lib/z-index';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import React, { useState } from 'react';
import { DatePickerProps } from '../types';

const DatePicker = React.forwardRef<HTMLButtonElement, DatePickerProps>(
  (
    {
      value,
      startMonth,
      endMonth,
      onChange,
      placeholder = 'Pick a date',
      className,
      zIndex,
      isDisabled = false,
      name,
      required,
      autoFocus,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const resolvedZIndex = getZIndex('popover', zIndex);

    const handleDateSelect = (date?: Date) => {
      onChange(date);
      setOpen(false);
    };

    return (
      <>
        {name || required ? (
          <input
            name={name}
            required={required}
            type="hidden"
            value={value ? value.toISOString().split('T')[0] : ''}
          />
        ) : null}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              ref={ref}
              aria-required={required}
              autoFocus={autoFocus}
              className={cn(
                'w-full justify-start px-3 text-left font-normal',
                !value && 'text-muted-foreground',
                className,
              )}
              data-component="date-picker"
              isDisabled={isDisabled}
              variant="input"
              {...props}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {value ? format(value, 'LLLL dd, y') : <span>{placeholder}</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-auto px-0 py-0" zIndex={resolvedZIndex}>
            <Calendar
              autoFocus
              endMonth={endMonth}
              mode="single"
              selected={value}
              startMonth={startMonth}
              onSelect={handleDateSelect}
            />
          </PopoverContent>
        </Popover>
      </>
    );
  },
);
DatePicker.displayName = 'DatePicker';

export { DatePicker };
