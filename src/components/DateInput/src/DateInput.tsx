import { Button } from '@/components/Button';
import { Calendar } from '@/components/Calendar';
import { Input } from '@/components/Input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { useAriaDisabled } from '@/hooks';
import { cn } from '@/lib/utils';
import { getZIndex } from '@/lib/z-index';
import { format, isValid, parse } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';
import { DateInputProps } from '../types';

const DateInput = React.forwardRef<HTMLDivElement, DateInputProps>(
  (
    {
      value,
      onChange,
      placeholder = 'MM/DD/YYYY',
      className,
      zIndex,
      isDisabled = false,
      startMonth,
      endMonth,
      minDate,
      maxDate,
      errorText,
      onValidationChange,
      dateFormat = 'MM/dd/yyyy',
      allowManualInput = true,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [validationError, setValidationError] = useState<string>('');
    const resolvedZIndex = getZIndex('popover', zIndex);
    const disabledProps = useAriaDisabled({ isDisabled });

    // Update input value when value prop changes
    useEffect(() => {
      if (value && isValid(value)) {
        setInputValue(format(value, dateFormat));
      } else if (!value) {
        setInputValue('');
      }
    }, [value, dateFormat]);

    const validateDate = useCallback(
      (date: Date | undefined): string => {
        if (!date || !isValid(date)) {
          return 'Please enter a valid date';
        }

        if (minDate && date < minDate) {
          return `Date must be after ${format(minDate, dateFormat)}`;
        }

        if (maxDate && date > maxDate) {
          return `Date must be before ${format(maxDate, dateFormat)}`;
        }

        return '';
      },
      [minDate, maxDate, dateFormat],
    );

    const handleInputChange = useCallback(
      (evt: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = evt.target.value;
        setInputValue(newValue);

        if (!allowManualInput) return;

        if (!newValue.trim()) {
          setValidationError('');
          onChange(undefined);
          onValidationChange?.(true);
          return;
        }

        // Try to parse the input value
        const parsedDate = parse(newValue, dateFormat, new Date());

        if (isValid(parsedDate)) {
          const error = validateDate(parsedDate);
          setValidationError(error);

          if (!error) {
            onChange(parsedDate);
            onValidationChange?.(true);
          } else {
            onValidationChange?.(false, error);
          }
        } else {
          const error = 'Please enter a valid date';
          setValidationError(error);
          onValidationChange?.(false, error);
        }
      },
      [allowManualInput, dateFormat, onChange, onValidationChange, validateDate],
    );

    const handleDateSelect = useCallback(
      (date?: Date) => {
        if (date) {
          const error = validateDate(date);
          setValidationError(error);

          if (!error) {
            onChange(date);
            setInputValue(format(date, dateFormat));
            onValidationChange?.(true);
          } else {
            onValidationChange?.(false, error);
          }
        } else {
          onChange(undefined);
          setInputValue('');
          setValidationError('');
          onValidationChange?.(true);
        }
        setOpen(false);
      },
      [onChange, dateFormat, validateDate, onValidationChange],
    );

    const handleInputBlur = useCallback(() => {
      // If input is empty, clear everything
      if (!inputValue.trim()) {
        setValidationError('');
        onChange(undefined);
        onValidationChange?.(true);
        return;
      }

      // If we have a valid current value and input matches it, keep it
      if (value && isValid(value) && inputValue === format(value, dateFormat)) {
        return;
      }

      // Try to parse and validate the input
      const parsedDate = parse(inputValue, dateFormat, new Date());
      if (isValid(parsedDate)) {
        const error = validateDate(parsedDate);
        setValidationError(error);

        if (!error) {
          onChange(parsedDate);
          setInputValue(format(parsedDate, dateFormat));
          onValidationChange?.(true);
        } else {
          onValidationChange?.(false, error);
        }
      } else {
        const error = 'Please enter a valid date';
        setValidationError(error);
        onValidationChange?.(false, error);
      }
    }, [inputValue, value, dateFormat, onChange, validateDate, onValidationChange]);

    const displayError = errorText || validationError;

    return (
      <div ref={ref} className={cn('relative', className)} {...props}>
        <Popover open={open} onOpenChange={setOpen}>
          <div className="relative flex">
            <Input
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              placeholder={placeholder}
              className={cn(
                'pr-10',
                displayError && 'border-destructive focus-visible:ring-destructive',
              )}
              isDisabled={isDisabled}
              readOnly={!allowManualInput}
              {...disabledProps}
            />
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  'absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent',
                  isDisabled && 'cursor-not-allowed opacity-50',
                )}
                isDisabled={isDisabled}
                onClick={() => !isDisabled && setOpen(!open)}
              >
                <CalendarIcon className="h-4 w-4" />
                <span className="sr-only">Open calendar</span>
              </Button>
            </PopoverTrigger>
          </div>
          <PopoverContent className="w-auto px-0 py-0" align="start" zIndex={resolvedZIndex}>
            <Calendar
              mode="single"
              startMonth={startMonth}
              endMonth={endMonth}
              selected={value}
              onSelect={handleDateSelect}
              autoFocus
              disabled={date => {
                if (minDate && date < minDate) return true;
                if (maxDate && date > maxDate) return true;
                return false;
              }}
            />
          </PopoverContent>
        </Popover>
        {displayError ? <p className="mt-1 text-sm text-destructive">{displayError}</p> : null}
      </div>
    );
  },
);
DateInput.displayName = 'DateInput';

export { DateInput };
