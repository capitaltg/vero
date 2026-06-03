import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ChevronProps } from 'react-day-picker';
import { CalendarActionState } from '../types';

function createCalendarChevron(actionState: CalendarActionState) {
  function CalendarChevron(props: ChevronProps) {
    if (actionState === 'month' || actionState === 'year') return <></>;

    const { orientation } = props;
    if (orientation === 'left') return <ChevronLeft {...props} />;
    return <ChevronRight {...props} />;
  }

  CalendarChevron.displayName = 'CalendarChevron';

  return CalendarChevron;
}

export { createCalendarChevron };
