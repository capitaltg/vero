import { Button } from '@/components/Button';
import { cn } from '@/lib/utils';
import { MonthCaptionProps } from 'react-day-picker';
import { CalendarMonthCaptionDeps } from '../types';
import { focusButton } from './calendar-utils';

function createCalendarMonthCaption(deps: CalendarMonthCaptionDeps) {
  const { actionState, setActionState, monthButtonRef, yearButtonRef, navHeight } = deps;

  function CalendarMonthCaption(props: MonthCaptionProps) {
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
          aria-label="Select calendar month"
          className="px-1.5 focus:ring-2 focus:ring-offset-0"
          size="sm"
          variant="ghost"
          onClick={() => {
            if (actionState === 'month') {
              setActionState('default');
              focusButton(monthButtonRef);
              return;
            }

            setActionState('month');
          }}
        >
          {calendarMonth.date.toLocaleString('default', { month: 'long' })}
        </Button>
        <Button
          ref={yearButtonRef}
          aria-label="Select calendar year"
          className="px-1.5 focus:ring-2 focus:ring-offset-0"
          size="sm"
          variant="ghost"
          onClick={() => {
            if (actionState === 'year') {
              setActionState('default');
              focusButton(yearButtonRef);
              return;
            }

            setActionState('year');
          }}
        >
          {calendarMonth.date.getFullYear()}
        </Button>
      </div>
    );
  }

  CalendarMonthCaption.displayName = 'CalendarMonthCaption';

  return CalendarMonthCaption;
}

export { createCalendarMonthCaption };
