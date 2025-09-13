export interface DatePickerProps {
  value?: Date;
  startMonth?: Date;
  endMonth?: Date;
  onChange: (date?: Date) => void;
  placeholder?: string;
  className?: string;
  zIndex?: number;
  isDisabled?: boolean;
}
