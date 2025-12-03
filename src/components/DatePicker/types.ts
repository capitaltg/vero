import { ButtonHTMLAttributes } from 'react';

export interface DatePickerProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'disabled' | 'value'> {
  value?: Date;
  startMonth?: Date;
  endMonth?: Date;
  onChange: (date?: Date) => void;
  placeholder?: string;
  className?: string;
  zIndex?: number;
  isDisabled?: boolean;
}
