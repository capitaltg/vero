import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface RadioOption {
  /** The option's value, passed to `onChange` when it's selected. */
  value: string;
  /** The option's visible label, which names its radio. */
  label: string;
  /** Helper text under the label, linked to the radio with `aria-describedby`. */
  description?: string;
  /** Disables this option only. */
  isDisabled?: boolean;
  /** Optional explicit id for the radio input. Defaults to `${groupId}-${value}` when RadioGroup has an id. */
  id?: string;
}

type RadioGroupBaseProps = Omit<
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
  'onValueChange' | 'onChange' | 'disabled'
> & {
  /**
   * The group's id. Each option's radio gets the id `{id}-{option.value}`, so give groups
   * that share option values different ids. Without it, a generated id is used.
   */
  id?: string;
  /**
   * Disables every radio built from `options`, on top of each option's `isDisabled`. It
   * doesn't affect `Radio` children; set `isDisabled` on each of them. Defaults to `false`.
   */
  isDisabled?: boolean;
  /** The selected value. Pass it with `onChange` to control the group. */
  value?: string;
  /** The value selected on first render, for an uncontrolled group. */
  defaultValue?: string;
  /** Called with the new value when the user selects a radio. */
  onChange?: (value: string) => void;
  /**
   * Marks the group as required. The group gets `aria-required`, and inside a form the
   * radios' hidden inputs are marked `required`. Show the requirement in the group's label
   * too.
   */
  required?: boolean;
  /** The name submitted with the selected value when the group is inside a form. */
  name?: string;
  /** Classes for the group element, merged after the layout classes. */
  className?: string;
  /**
   * Number of columns for default and tile variants (vertical orientation). Extra columns
   * appear from the `md` breakpoint up. Defaults to 1.
   */
  columns?: 1 | 2 | 3 | 4;
  /**
   * Lays the radios out in a row (`horizontal`) or a column or grid (`vertical`). It only
   * changes the layout. Defaults to `vertical`.
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The style of the radios built from `options`: `default`, `tile` or `button`. Defaults
   * to `default`.
   */
  variant?: 'default' | 'tile' | 'button';
};

/**
 * Every prop of both usage patterns, each optional. `RadioGroupProps` intersects it with
 * the two patterns below, which decide which props are required. It exists so the docs,
 * which can't read union types, list every prop.
 */
type RadioGroupAllProps = RadioGroupBaseProps & {
  /** The options to render as radios, in order. Pass it or `children`, not both. */
  options?: RadioOption[];
  /** `Radio` components, in any layout, instead of `options`. */
  children?: ReactNode;
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

export type RadioGroupProps = RadioGroupAllProps &
  (RadioGroupPropsWithOptions | RadioGroupPropsWithChildren);
