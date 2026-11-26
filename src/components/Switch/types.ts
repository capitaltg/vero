import * as SwitchPrimitives from '@radix-ui/react-switch';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface SwitchProps
  extends Omit<ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>, 'checked' | 'disabled'> {
  /**
   * The visible label, rendered as a `<label>` for the switch. Pass either `label` or
   * `aria-label`; the switch throws an error if it gets neither or both.
   */
  label?: ReactNode;
  /** An accessible name for a switch with no visible label. Use it instead of `label`. */
  'aria-label'?: string;
  /** The switch's id, which the label points to. Defaults to a generated id. */
  id?: string;
  /**
   * Whether the switch is on. The switch is controlled: update this from
   * `onCheckedChange`. Defaults to `false`.
   */
  isChecked?: boolean;
  /** Called with the new state when the user turns the switch on or off. */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * Disables the switch. It stays focusable and is marked `aria-disabled`, so screen reader
   * users can still find it, but clicks and keys don't change it. Defaults to `false`.
   */
  isDisabled?: boolean;
  /**
   * Marks the switch as required with `aria-required`. Inside a form, the hidden input that
   * carries its value is also marked `required`. Show the requirement in the label too.
   */
  required?: boolean;
}
