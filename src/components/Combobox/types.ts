import { ButtonHTMLAttributes } from 'react';

export interface ComboboxOption {
  value: string;
  label: string;
}

export interface ComboboxProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'disabled'> {
  options: ComboboxOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  className?: string;
  listClassName?: string;
  zIndex?: number;
  isDisabled?: boolean;
}
