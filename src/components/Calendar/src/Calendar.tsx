import { buttonVariants } from '@/components/Button/constants';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { CalendarProps } from '../types';

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  const navHeight = 'h-7 md:h-9';
  const navButton = 'w-7 px-0 py-0 focus:ring-2 focus:ring-offset-0 md:w-9';
  const cellWidth = 'w-9 md:w-10 lg:w-11 px-0';
  const cellHeight = 'h-9 md:h-10 lg:h-11 py-0';

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('px-3 py-3', className)}
      classNames={{
        months: 'flex flex-col gap-4 sm:flex-row',
        month: 'space-y-4',
        month_caption: cn(navHeight, 'flex items-center justify-center text-sm font-medium'),
        nav: 'absolute left-4 right-4 flex items-center justify-between',
        button_previous: cn(buttonVariants({ variant: 'ghost' }), navHeight, navButton),
        button_next: cn(buttonVariants({ variant: 'ghost' }), navHeight, navButton),
        month_grid: 'w-full border-collapse space-y-1',
        weekdays: 'mb-1 flex',
        weekday: cn(
          cellWidth,
          'rounded-l-full rounded-r-full text-sm font-normal text-muted-foreground',
        ),
        week: 'mt-1 flex w-full',
        day: cn(cellWidth, cellHeight),
        day_button: cn(
          buttonVariants({ variant: 'ghost' }),
          cellWidth,
          cellHeight,
          'relative rounded-l-full rounded-r-full text-center text-sm font-normal focus-within:relative focus-within:z-20 focus:opacity-100 focus:ring-2 focus:ring-offset-0',
        ),
        range_start:
          'rounded-l-full aria-selected:bg-accent [&>button]:bg-primary [&>button]:text-primary-foreground',
        range_end:
          'rounded-r-full aria-selected:bg-accent [&>button]:bg-primary [&>button]:text-primary-foreground',
        /* This is needed to ensure that the selected day's cell has rounded corners */
        selected:
          props?.mode !== 'range' ? '[&>button]:bg-primary [&>button]:text-primary-foreground' : '',
        today:
          '[&>button]:rounded-l-full [&>button]:rounded-r-full [&>button]:bg-accent [&>button]:text-accent-foreground',
        outside: 'day-outside text-muted-foreground opacity-50',
        disabled: 'text-muted-foreground opacity-50',
        range_middle:
          'first:rounded-l-md last:rounded-r-md aria-selected:bg-accent aria-selected:text-accent-foreground',
        hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron: props => {
          if (props.orientation === 'left') {
            return <ChevronLeft {...props} />;
          }
          return <ChevronRight {...props} />;
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
