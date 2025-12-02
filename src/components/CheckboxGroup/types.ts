import { HTMLAttributes } from 'react';

export interface CheckboxOption {
  id: string;
  label: string;
}

export interface CheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {
  options: CheckboxOption[];
  value: string[];
  onChange: (value: string[]) => void;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
}
