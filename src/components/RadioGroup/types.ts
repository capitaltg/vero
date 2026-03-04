import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  /** Optional explicit id for the radio input. Defaults to `${groupId}-${value}` when RadioGroup has an id. */
  id?: string;
}

type RadioGroupBaseProps = Omit<
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
  'onValueChange' | 'onChange'
> & {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'tile' | 'button';
};

/** Use with an `options` array; RadioGroup renders Radio items and applies layout. */
export interface RadioGroupPropsWithOptions extends RadioGroupBaseProps {
  options: RadioOption[];
  children?: never;
}

/** Use with Radio components as children when you need custom layout or structure. */
export interface RadioGroupPropsWithChildren extends RadioGroupBaseProps {
  options?: never;
  children: ReactNode;
}

export type RadioGroupProps = RadioGroupPropsWithOptions | RadioGroupPropsWithChildren;
