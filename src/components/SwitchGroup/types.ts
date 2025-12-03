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
  columns?: 1 | 2 | 3 | 4;
  onChange: (value: string[]) => void;
}
