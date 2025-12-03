import { ButtonHTMLAttributes } from 'react';

export interface DateRange {
  from?: Date;
  to?: Date;
}

export interface DateRangePickerProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'disabled' | 'value'> {
  value: DateRange;
  onChange: (range: DateRange) => void;
  placeholder?: {
    from?: string;
    to?: string;
  };
  className?: string;
  zIndex?: number;
  isDisabled?: boolean;
}
