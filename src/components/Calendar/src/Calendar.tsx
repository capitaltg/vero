import { Button } from '@/components/Button';
import { buttonVariants } from '@/components/Button/constants';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import { ChevronProps, DayPicker, MonthCaptionProps } from 'react-day-picker';
import { CalendarProps } from '../types';
import { CalendarMonthPicker } from './CalendarMonthPicker';
import { CalendarYearPicker } from './CalendarYearPicker';

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  const [actionState, setActionState] = useState<'month' | 'year' | 'default'>('default');
  const [activeMonth, setActiveMonth] = useState<Date | undefined>(undefined);
  const monthButtonRef = useRef<HTMLButtonElement>(null);
  const yearButtonRef = useRef<HTMLButtonElement>(null);

  const navHeight = 'h-7 md:h-9';
  const navButton = 'w-7 px-0 py-0 focus:ring-2 focus:ring-offset-0 md:w-9';
  const cellWidth = 'w-9 md:w-10 lg:w-11 px-0';
  const cellHeight = 'h-9 md:h-10 lg:h-11 py-0';

  const Chevron = (props: ChevronProps) => {
    const { orientation } = props;
    if (orientation === 'left') return <ChevronLeft {...props} />;
    return <ChevronRight {...props} />;
  };

  const MonthCaption = (props: MonthCaptionProps) => {
    const { calendarMonth } = props;
    return (
      <div
        className={cn(
          navHeight,
          'relative mx-12 flex items-center justify-center text-sm font-medium',
        )}
      >
        <Button
          ref={monthButtonRef}
          variant="ghost"
          size="sm"
          className="px-1.5 focus:ring-2 focus:ring-offset-0"
          onClick={() => setActionState('month')}
        >
          {calendarMonth.date.toLocaleString('default', { month: 'long' })}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          ref={yearButtonRef}
          className="px-1.5 focus:ring-2 focus:ring-offset-0"
          onClick={() => setActionState('year')}
        >
          {calendarMonth.date.getFullYear()}
        </Button>
      </div>
    );
  };

  const MonthGrid = () => {
    if (actionState === 'month')
      return (
        <CalendarMonthPicker
          onSelect={month => {
            const newMonth = activeMonth ? new Date(activeMonth) : new Date();
            newMonth.setMonth(month);
            setActiveMonth(newMonth);
            setActionState('default');
            // Focus the month button after selection
            setTimeout(() => {
              monthButtonRef.current?.focus();
            }, 0);
          }}
        />
      );
    if (actionState === 'year')
      return (
        <CalendarYearPicker
          onSelect={year => {
            const newYear = activeMonth ? new Date(activeMonth) : new Date();
            newYear.setFullYear(year);
            setActiveMonth(newYear);
            setActionState('default');
            // Focus the month button after selection
            setTimeout(() => {
              yearButtonRef.current?.focus();
            }, 0);
          }}
        />
      );

    // default view showing normal month grid; handled by 'getComponents' function
    return <></>;
  };

  const getComponents = () => {
    if (actionState === 'default') {
      return { Chevron, MonthCaption };
    }

    return {
      Chevron,
      MonthCaption,
      MonthGrid,
    };
  };

  const defaultMonth =
    props?.defaultMonth ??
    activeMonth ??
    (props?.mode === 'single' ? props?.selected : new Date()) ??
    new Date();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      defaultMonth={defaultMonth}
      month={activeMonth}
      onMonthChange={setActiveMonth}
      className={cn('min-w-80 px-3 py-3', className)}
      classNames={{
        months: 'flex flex-col gap-4 sm:flex-row',
        month: 'w-full space-y-4',
        month_caption: cn(
          navHeight,
          'relative flex items-center justify-center text-sm font-medium',
        ),
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
      components={getComponents()}
      {...props}
      disableNavigation={actionState !== 'default'}
    />
  );
}

export { Calendar };
