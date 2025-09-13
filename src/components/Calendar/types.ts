import { ComponentProps } from 'react';
import { DayPicker } from 'react-day-picker';

export type CalendarMonthPickerProps = {
  onSelect?: (month: number) => void;
};

export type CalendarYearPickerProps = {
  onSelect?: (year: number) => void;
  startMonth?: Date;
  endMonth?: Date;
};

export type CalendarProps = ComponentProps<typeof DayPicker>;
