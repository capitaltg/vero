import { ComponentProps, MutableRefObject } from 'react';
import { DayPicker } from 'react-day-picker';

export type CalendarActionState = 'month' | 'year' | 'default';

export type CalendarMonthCaptionDeps = {
  actionState: CalendarActionState;
  setActionState: (state: CalendarActionState) => void;
  monthButtonRef: MutableRefObject<HTMLButtonElement | null>;
  yearButtonRef: MutableRefObject<HTMLButtonElement | null>;
  navHeight: string;
};

export type CalendarMonthGridDeps = {
  actionState: CalendarActionState;
  setActionState: (state: CalendarActionState) => void;
  activeMonth: Date | undefined;
  setActiveMonth: (date: Date | undefined) => void;
  monthButtonRef: MutableRefObject<HTMLButtonElement | null>;
  yearButtonRef: MutableRefObject<HTMLButtonElement | null>;
  startMonth?: Date;
  endMonth?: Date;
};

export type CalendarMonthPickerProps = {
  onSelect?: (month: number) => void;
};

export type CalendarYearPickerProps = {
  onSelect?: (year: number) => void;
  startMonth?: Date;
  endMonth?: Date;
};

export type CalendarProps = ComponentProps<typeof DayPicker>;
