import { Button } from '@/components/Button';
import { cn } from '@/lib';
import { CalendarMonthPickerProps } from '../types';

// Returns an array of month names, e.g. ['January', 'February', ...]
// Could use Intl.DateTimeFormat but this is simpler for now
const getMonths = (): string[] =>
  Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString('en-US', { month: 'long' }));

export const CalendarMonthPicker = (props: CalendarMonthPickerProps) => {
  const { onSelect } = props;

  return (
    <div className="-mx-1 -my-1 grid grid-cols-1 gap-1 px-1 py-1 md:grid-cols-2 lg:grid-cols-3">
      {getMonths().map((month, idx) => (
        <Button
          key={month}
          aria-label="Select calendar month"
          variant="ghost"
          size="sm"
          className={cn(
            'relative min-h-10 w-full text-center text-sm font-normal focus-within:relative focus-within:z-20 focus:opacity-100 focus:ring-2 focus:ring-offset-0',
          )}
          onClick={() => {
            onSelect?.(idx);
          }}
        >
          {month}
        </Button>
      ))}
    </div>
  );
};
