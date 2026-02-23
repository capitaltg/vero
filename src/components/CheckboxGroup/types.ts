import { HTMLAttributes } from 'react';

export interface CheckboxOption {
  /** Option identifier (used in value array). Consider standardizing with RadioGroup, which uses "value" for the option key. */
  id: string;
  label: string;
  description?: string;
  /** Optional explicit id for the checkbox input. Defaults to `${groupId}-${id}` when CheckboxGroup has an id. */
  inputId?: string;
}

export interface CheckboxGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: CheckboxOption[];
  value: string[];
  onChange: (value: string[]) => void;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'tile' | 'button';
}
