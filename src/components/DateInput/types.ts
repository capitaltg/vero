export interface DateInputProps {
  value?: Date;
  onChange: (date?: Date) => void;
  placeholder?: string;
  className?: string;
  zIndex?: number;
  isDisabled?: boolean;
  startMonth?: Date;
  endMonth?: Date;
  // Validation options
  minDate?: Date;
  maxDate?: Date;
  errorText?: string;
  onValidationChange?: (isValid: boolean, errorMessage?: string) => void;
  // Input format options
  dateFormat?: string;
  allowManualInput?: boolean;
}
