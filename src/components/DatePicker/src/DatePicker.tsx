import { Button } from '@/components/Button';
import { Calendar } from '@/components/Calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { useComposedTriggerLabel } from '@/hooks';
import { cn } from '@/lib/utils';
import { getZIndex } from '@/lib/z-index';
import { useComposedRefs } from '@radix-ui/react-compose-refs';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import React, { useId, useRef, useState } from 'react';
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

    // Compose the trigger's accessible name from its associated label plus the displayed
    // date, so screen readers read back the selection. See useComposedTriggerLabel.
    const triggerRef = useRef<HTMLButtonElement>(null);
    const composedRef = useComposedRefs(ref, triggerRef);
    const valueId = useId();
    const triggerLabelledBy = useComposedTriggerLabel(triggerRef, valueId, {
      'aria-label': props['aria-label'],
      'aria-labelledby': props['aria-labelledby'],
    });

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
              ref={composedRef}
              aria-required={required}
              autoFocus={autoFocus}
              className={cn(
                'vero-date-picker',
                'w-full justify-start px-3 text-left font-normal',
                !value && 'text-muted-foreground',
                className,
              )}
              data-component="date-picker"
              isDisabled={isDisabled}
              variant="input"
              {...props}
              aria-labelledby={triggerLabelledBy}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span id={valueId}>{value ? format(value, 'LLLL dd, y') : placeholder}</span>
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
