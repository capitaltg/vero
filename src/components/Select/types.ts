import * as SelectPrimitive from '@radix-ui/react-select';
import { ButtonHTMLAttributes, ComponentPropsWithoutRef } from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'disabled'> {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  isDisabled?: boolean;
}

// TODO: Remove when removing SingleSelect component
export type SingleSelectProps = SelectProps;

export interface SelectTriggerProps
  extends Omit<ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>, 'disabled'> {
  isDisabled?: boolean;
}
export type SelectContentProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Content>;
export type SelectItemProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;
export type SelectLabelProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;
export type SelectSeparatorProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>;
