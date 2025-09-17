import { Button } from '@/components/Button';
import { cn } from '@/lib';
import { useEffect, useRef } from 'react';
import { CalendarYearPickerProps } from '../types';

// Returns an array of years based on `startMonth` and `endMonth` constraints
const getYears = (startMonth?: Date, endMonth?: Date): number[] => {
  const currentYear = new Date().getFullYear();
  const startYear = startMonth ? startMonth.getFullYear() : currentYear - 23;
  const endYear = endMonth ? endMonth.getFullYear() : currentYear;

  const years: number[] = [];
  for (let year = endYear; year >= startYear; year--) {
    years.push(year);
  }

  return years;
};

const CalendarYearPicker = (props: CalendarYearPickerProps) => {
  const { onSelect, startMonth, endMonth } = props;
  const firstButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Autofocus the first year button when the component mounts
    if (firstButtonRef.current) {
      firstButtonRef.current.focus();
    }
  }, []);

  return (
    <div className="-mx-1 -my-1 grid max-h-72 min-w-80 gap-1 overflow-y-auto px-1 py-1 md:grid-cols-3 lg:grid-cols-4">
      {getYears(startMonth, endMonth).map((year, idx) => (
        <Button
          ref={idx === 0 ? firstButtonRef : undefined}
          key={year}
          variant="ghost"
          size="sm"
          className={cn(
            'relative min-h-10 w-full text-center text-sm font-normal focus-within:relative focus-within:z-20 focus:opacity-100 focus:ring-2 focus:ring-offset-0',
          )}
          onClick={() => {
            onSelect?.(year);
          }}
        >
          {year}
        </Button>
      ))}
    </div>
  );
};

export { CalendarYearPicker };
