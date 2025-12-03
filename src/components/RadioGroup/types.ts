import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { ComponentPropsWithoutRef } from 'react';

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

export interface RadioGroupProps
  extends Omit<
    ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
    'onValueChange' | 'onChange'
  > {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'tile' | 'button';
}
