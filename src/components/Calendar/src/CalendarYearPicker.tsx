import { Button } from '@/components/Button';
import { cn } from '@/lib';
import { CalendarYearPickerProps } from '../types';

// Returns an array of years, e.g. [2023, 2022, ..., 2000]
const getYears = (qty = 24): number[] =>
  Array.from({ length: qty }, (_, i) => new Date().getFullYear() - qty + 1 + i).reverse();

export const CalendarYearPicker = (props: CalendarYearPickerProps) => {
  const { onSelect } = props;

  return (
    <div className="-mx-1 -my-1 grid max-h-72 w-full grid-cols-2 gap-1 overflow-y-auto px-1 py-1 md:grid-cols-3 lg:grid-cols-4">
      {getYears().map(year => (
        <Button
          key={year}
          aria-label="Select calendar year"
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
