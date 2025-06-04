import { buttonVariants } from '@/components/Button/constants';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { CalendarProps } from '../types';

const IconLeft = () => <ChevronLeft className="h-4 w-4" />;
const IconRight = () => <ChevronRight className="h-4 w-4" />;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  const cellWidth = 'w-9 md:w-10 lg:w-11 px-0';
  const cellHeight = 'h-9 md:h-10 lg:h-11 py-0';

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('px-3 py-3', className)}
      classNames={{
        months: 'flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'relative flex items-center justify-center pt-1',
        caption_label: 'text-sm font-medium',
        nav: 'flex items-center space-x-1',
        nav_button: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-7 w-7 px-0 py-0 focus:ring-2 focus:ring-offset-0',
        ),
        nav_button_previous: 'absolute left-0',
        nav_button_next: 'absolute right-0',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: cn(cellWidth, 'rounded-md text-sm font-normal text-muted-foreground'),
        row: 'mt-2 flex w-full',
        cell: cn(
          cellWidth,
          cellHeight,
          '[&:has([aria-selected].day-outside)]:bg-accent/50 relative text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-range-end)]:rounded-r-md',
        ),
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          cellWidth,
          cellHeight,
          'font-normal focus:opacity-100 focus:ring-2 focus:ring-offset-0 aria-selected:opacity-100',
        ),
        day_range_start: 'day-range-start',
        day_range_end: 'day-range-end',
        day_selected:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        day_today: 'bg-accent text-accent-foreground',
        day_outside: 'day-outside text-muted-foreground opacity-50',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft,
        IconRight,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
