import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface CheckboxProps
  extends Omit<ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, 'checked' | 'disabled'> {
  /**
   * The visible label. The checkbox is named by it through `aria-labelledby`. Pass either
   * `label` or `aria-label`; the checkbox throws an error if it gets neither or both.
   */
  label?: ReactNode;
  /**
   * An accessible name for a checkbox with no visible label. Use it instead of `label`,
   * never with it. When it's set, `description` isn't linked with `aria-describedby`.
   */
  'aria-label'?: string;
  /**
   * Whether the checkbox is checked. The checkbox is controlled: update this from
   * `onCheckedChange`. Defaults to `false`.
   */
  isChecked?: boolean;
  /** Called with the new checked state when the user checks or unchecks the checkbox. */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * Disables the checkbox. It stays focusable and is marked `aria-disabled`, so screen reader
   * users can still find it, but clicks and keys don't change it. Defaults to `false`.
   */
  isDisabled?: boolean;
  /**
   * Marks the checkbox as required with `aria-required`. Inside a form, the hidden input
   * that carries its value is also marked `required`. Show the requirement in the label too.
   */
  required?: boolean;
  /**
   * The style: `default` (a box with the label beside it), `tile` (a bordered card) or
   * `button` (a toggle button). Defaults to `default`.
   */
  variant?: 'default' | 'tile' | 'button';
  /**
   * Helper text under the label, linked to the checkbox with `aria-describedby` unless
   * `aria-label` is set.
   */
  description?: string;
}
