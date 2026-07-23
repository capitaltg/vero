import { useComposedTriggerLabel } from '@/hooks';
import { cn } from '@/lib/utils';
import { getZIndex } from '@/lib/z-index';
import { useComposedRefs } from '@radix-ui/react-compose-refs';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import * as React from 'react';
import { useId, useRef } from 'react';
import { Button } from '../../Button';
import { Calendar } from '../../Calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../../Popover';
import { DateRangePickerProps } from '../types';

const DateRangePicker = React.forwardRef<HTMLButtonElement, DateRangePickerProps>(
  (
    {
      value,
      onChange,
      placeholder = {
        from: 'Pick start date',
        to: 'Pick end date',
      },
      className,
      zIndex,
      isDisabled = false,
      startMonth,
      endMonth,
      name,
      required,
      autoFocus,
      ...props
    },
    ref,
  ) => {
    const resolvedZIndex = getZIndex('popover', zIndex);

    // Compose the trigger's accessible name from its associated label plus the displayed
    // range, so screen readers read back the selection. See useComposedTriggerLabel.
    const triggerRef = useRef<HTMLButtonElement>(null);
    const composedRef = useComposedRefs(ref, triggerRef);
    const valueId = useId();
    const triggerLabelledBy = useComposedTriggerLabel(triggerRef, valueId, {
      'aria-label': props['aria-label'],
      'aria-labelledby': props['aria-labelledby'],
    });

    const handleDayClick = (day: Date) => {
      const { from, to } = value;

      // If no start date is selected, start a new date range
      if (!from) return onChange({ from: day, to: undefined });

      // If selecting a day before the current start date, start a new date range
      if (day < from) return onChange({ from: day, to: undefined });

      // If a complete date range exists, start a new date range
      if (from && to) return onChange({ from: day, to: undefined });

      // If start date is selected and selecting a day after it, complete the date range
      if (day > from) return onChange({ from, to: day });

      // If selecting the start date, clear the date range
      if (day.getTime() === from.getTime()) return onChange({ from: undefined, to: undefined });
    };

    // Format date range for form submission (ISO date format)
    const formatDateRange = (range: { from?: Date; to?: Date }): string => {
      if (!range.from) return '';
      if (!range.to) return range.from.toISOString().split('T')[0];
      return `${range.from.toISOString().split('T')[0]},${range.to.toISOString().split('T')[0]}`;
    };

    return (
      <div className={cn('vero-date-range-picker', 'grid gap-2', className)}>
        {name || required ? (
          <input name={name} required={required} type="hidden" value={formatDateRange(value)} />
        ) : null}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              ref={composedRef}
              autoFocus={autoFocus}
              className={cn(
                'w-full justify-start px-3 text-left font-normal',
                !value.from && !value.to && 'text-muted-foreground',
              )}
              data-component="date-range-picker"
              isDisabled={isDisabled}
              variant="input"
              {...props}
              aria-labelledby={triggerLabelledBy}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span id={valueId}>
                {(() => {
                  if (value.from) {
                    if (value.to) {
                      return (
                        <>
                          {format(value.from, 'LLLL dd, y')} - {format(value.to, 'LLLL dd, y')}
                        </>
                      );
                    }
                    return format(value.from, 'LLLL dd, y');
                  }
                  return placeholder.from;
                })()}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-auto px-0 py-0" zIndex={resolvedZIndex}>
            <Calendar
              autoFocus
              defaultMonth={value.from}
              endMonth={endMonth}
              mode="range"
              modifiers={{
                today: () => false, // Disable the "today" modifier
              }}
              numberOfMonths={2}
              selected={{
                from: value.from,
                to: value.to,
              }}
              showOutsideDays={false}
              startMonth={startMonth}
              onDayClick={handleDayClick}
              onSelect={range => {
                if (range) onChange(range);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    );
  },
);
DateRangePicker.displayName = 'DateRangePicker';

export { DateRangePicker };
