import { HTMLAttributes } from 'react';

export interface CheckboxOption {
  id: string;
  label: string;
  description?: string;
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
