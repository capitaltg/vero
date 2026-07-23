import { HTMLAttributes, ReactNode } from 'react';

export interface CheckboxOption {
  /** Option identifier (used in value array). Consider standardizing with RadioGroup, which uses "value" for the option key. */
  id: string;
  label: string;
  description?: string;
  isDisabled?: boolean;
  /** Optional explicit id for the checkbox input. Defaults to `${groupId}-${id}` when CheckboxGroup has an id. */
  inputId?: string;
}

type CheckboxGroupBaseProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  className?: string;
  isDisabled?: boolean;
  /** Number of columns for default and tile variants (vertical orientation). Defaults to 1. */
  columns?: 1 | 2 | 3 | 4;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'tile' | 'button';
};

/** Use with an `options` array; CheckboxGroup renders Checkbox items and applies layout. */
export interface CheckboxGroupPropsWithOptions extends CheckboxGroupBaseProps {
  options: CheckboxOption[];
  value: string[];
  onChange: (value: string[]) => void;
  children?: never;
}

/**
 * Use with Checkbox components as children when you need custom layout or
 * structure (or a ref to a specific Checkbox). In this mode the caller manages
 * each Checkbox's checked state, so `value`/`onChange` are not used.
 */
export interface CheckboxGroupPropsWithChildren extends CheckboxGroupBaseProps {
  options?: never;
  value?: never;
  onChange?: never;
  children: ReactNode;
}

export type CheckboxGroupProps = CheckboxGroupPropsWithOptions | CheckboxGroupPropsWithChildren;
