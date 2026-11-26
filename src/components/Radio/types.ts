import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface RadioProps
  extends Omit<ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>, 'checked' | 'disabled'> {
  /** The option's value. The radio is selected when the `RadioGroup`'s value matches it. */
  value: string;
  /**
   * The visible label. The radio is named by it through `aria-labelledby`. Pass either
   * `label` or `aria-label`; the radio throws an error if it gets neither or both.
   */
  label?: ReactNode;
  /**
   * An accessible name for a radio with no visible label. Use it instead of `label`, never
   * with it. When it's set, `description` isn't linked with `aria-describedby`.
   */
  'aria-label'?: string;
  /**
   * Passed to the Radix item as `checked`, but it doesn't select the radio. The selected
   * radio, its `aria-checked` and its look all come from the `RadioGroup`'s `value`, so set
   * that instead.
   */
  isChecked?: boolean;
  /**
   * Disables the radio. It stays focusable and is marked `aria-disabled`, so screen reader
   * users can still find it, but it can't be selected. Defaults to `false`.
   */
  isDisabled?: boolean;
  /**
   * The style: `default` (a circle with the label beside it), `tile` (a bordered card) or
   * `button` (a toggle button). Defaults to `default`.
   */
  variant?: 'default' | 'tile' | 'button';
  /**
   * Helper text under the label, linked to the radio with `aria-describedby` unless
   * `aria-label` is set.
   */
  description?: string;
}
