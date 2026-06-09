import { HTMLAttributes } from 'react';

export interface SwitchOption {
  id: string;
  label: string;
  isDisabled?: boolean;
}

export interface SwitchGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: SwitchOption[];
  value: string[];
  className?: string;
  isDisabled?: boolean;
  columns?: 1 | 2 | 3 | 4;
  orientation?: 'horizontal' | 'vertical';
  onChange: (value: string[]) => void;
}
