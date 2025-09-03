export interface DatePickerProps {
  value?: Date;
  onChange: (date?: Date) => void;
  placeholder?: string;
  className?: string;
  zIndex?: number;
  isDisabled?: boolean;
}
