import { buttonVariants } from '@/components/Button/constants';
import { cn } from '@/lib/utils';
import { useMemo, useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { CalendarActionState, CalendarProps } from '../types';
import { createCalendarChevron } from './CalendarChevron';
import { createCalendarMonthCaption } from './CalendarMonthCaption';
import { createCalendarMonthGrid } from './CalendarMonthGrid';

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  const [actionState, setActionState] = useState<CalendarActionState>('default');
  const [activeMonth, setActiveMonth] = useState<Date | undefined>(undefined);
  const monthButtonRef = useRef<HTMLButtonElement>(null);
  const yearButtonRef = useRef<HTMLButtonElement>(null);

  const navHeight = 'h-7 md:h-9';
  const navButton = 'w-7 px-0 py-0 focus:ring-2 focus:ring-offset-0 md:w-9';
  const cellWidth = 'w-9 md:w-10 lg:w-11 px-0';
  const cellHeight = 'h-9 md:h-10 lg:h-11 py-0';

  // Lightest grays meeting WCAG AA (4.5:1) on popover backgrounds (#fff / #1a1a1a)
  const outsideDayText =
    'text-[#767676] aria-selected:text-[#767676] dark:text-[#828282] dark:aria-selected:text-[#828282]';

  const selectedDay =
    props.mode === 'range' ? '' : '[&>button]:bg-primary [&>button]:text-primary-foreground';

  // Blue outer border with white inset gap (508-friendly focus on day cells)
  const dayButtonFocus =
    'focus:ring-inset focus:ring-0 focus:ring-offset-2 focus:shadow-[inset_0_0_0_0_#ffffff,0_0_0_2px_#005ea2]';

  const components = useMemo(() => {
    const Chevron = createCalendarChevron(actionState);
    const MonthCaption = createCalendarMonthCaption({
      actionState,
      setActionState,
      monthButtonRef,
      yearButtonRef,
      navHeight,
    });

    if (actionState === 'default') {
      return { Chevron, MonthCaption };
    }

    const MonthGrid = createCalendarMonthGrid({
      actionState,
      setActionState,
      activeMonth,
      setActiveMonth,
      monthButtonRef,
      yearButtonRef,
      startMonth: props.startMonth,
      endMonth: props.endMonth,
    });

    return { Chevron, MonthCaption, MonthGrid };
  }, [actionState, activeMonth, props.endMonth, props.startMonth]);

  const defaultMonth =
    props.defaultMonth ??
    activeMonth ??
    (props.mode === 'single' ? props.selected : new Date()) ??
    new Date();

  return (
    <DayPicker
      className={cn('vero-calendar', 'min-w-80 px-3 py-3', className)}
      classNames={{
        months: cn('vero-calendar-months', 'flex flex-col gap-4 sm:flex-row'),
        month: cn('vero-calendar-month', 'w-full space-y-4'),
        // month_caption is fully rendered by the custom MonthCaption component,
        // which already carries the `vero-calendar-month-caption` class, so we
        // don't namespace the (superseded) default slot class here.
        month_caption: cn(
          navHeight,
          'relative flex items-center justify-center text-sm font-medium',
        ),
        nav: cn('vero-calendar-nav', 'absolute left-4 right-4 flex items-center justify-between'),
        button_previous: cn(
          'vero-calendar-button-previous',
          buttonVariants({ variant: 'ghost' }),
          navHeight,
          navButton,
        ),
        button_next: cn(
          'vero-calendar-button-next',
          buttonVariants({ variant: 'ghost' }),
          navHeight,
          navButton,
        ),
        month_grid: cn('vero-calendar-month-grid', 'w-full border-collapse space-y-1'),
        weekdays: cn('vero-calendar-weekdays', 'mb-1 flex'),
        weekday: cn(
          'vero-calendar-weekday',
          cellWidth,
          'text-sm font-medium text-popover-foreground',
        ),
        week: cn('vero-calendar-week', 'mt-1 flex w-full'),
        day: cn('vero-calendar-day', cellWidth, cellHeight),
        day_button: cn(
          'vero-calendar-day-button',
          buttonVariants({ variant: 'ghost' }),
          cellWidth,
          cellHeight,
          `relative rounded-l-full rounded-r-full text-center text-sm font-normal
          focus-within:relative focus-within:z-20 focus:opacity-100`,
          dayButtonFocus,
        ),
        range_start: cn(
          'vero-calendar-range-start',
          `rounded-l-full aria-selected:bg-accent [&>button]:bg-primary
          [&>button]:text-primary-foreground`,
        ),
        range_end: cn(
          'vero-calendar-range-end',
          `rounded-r-full aria-selected:bg-accent [&>button]:bg-primary
          [&>button]:text-primary-foreground`,
        ),
        selected: cn('vero-calendar-selected', selectedDay),
        today: cn(
          'vero-calendar-today',
          `[&>button]:rounded-l-full [&>button]:rounded-r-full [&>button]:bg-accent
          [&>button]:text-accent-foreground`,
        ),
        outside: cn('vero-calendar-outside', 'day-outside', outsideDayText),
        disabled: cn('vero-calendar-disabled', 'text-muted-foreground opacity-50'),
        range_middle: cn(
          'vero-calendar-range-middle',
          `first:rounded-l-md last:rounded-r-md aria-selected:bg-accent
          aria-selected:text-accent-foreground`,
        ),
        hidden: cn('vero-calendar-hidden', 'invisible'),
        ...classNames,
      }}
      components={components}
      defaultMonth={defaultMonth}
      month={activeMonth}
      showOutsideDays={showOutsideDays}
      onMonthChange={setActiveMonth}
      {...props}
      disableNavigation={actionState !== 'default'}
    />
  );
}

export { Calendar };
