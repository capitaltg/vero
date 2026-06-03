import { CalendarMonthGridDeps } from '../types';
import { CalendarMonthPicker } from './CalendarMonthPicker';
import { CalendarYearPicker } from './CalendarYearPicker';
import { focusButton } from './calendar-utils';

function createCalendarMonthGrid(deps: CalendarMonthGridDeps) {
  const {
    actionState,
    setActionState,
    activeMonth,
    setActiveMonth,
    monthButtonRef,
    yearButtonRef,
    startMonth,
    endMonth,
  } = deps;

  function CalendarMonthGrid() {
    if (actionState === 'month') {
      return (
        <CalendarMonthPicker
          onSelect={month => {
            const newMonth = activeMonth ? new Date(activeMonth) : new Date();
            newMonth.setMonth(month);
            setActiveMonth(newMonth);
            setActionState('default');
            focusButton(monthButtonRef);
          }}
        />
      );
    }

    if (actionState === 'year') {
      return (
        <CalendarYearPicker
          endMonth={endMonth}
          startMonth={startMonth}
          onSelect={year => {
            const newYear = activeMonth ? new Date(activeMonth) : new Date();
            newYear.setFullYear(year);
            setActiveMonth(newYear);
            setActionState('default');
            focusButton(yearButtonRef);
          }}
        />
      );
    }

    return <></>;
  }

  CalendarMonthGrid.displayName = 'CalendarMonthGrid';

  return CalendarMonthGrid;
}

export { createCalendarMonthGrid };
