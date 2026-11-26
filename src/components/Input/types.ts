import { InputHTMLAttributes } from 'react';

export type TextTransform = 'uppercase' | 'lowercase' | 'trim' | 'none';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'disabled'> {
  /**
   * Changes the text as the user types: `uppercase`, `lowercase`, `trim` or `none`. Pass an
   * array to apply several in order. `trim` runs on every change, so it removes a space as
   * soon as it's typed at either end. Defaults to `none`.
   */
  transform?: TextTransform | TextTransform[];
  /**
   * Disables the input. It stays focusable and is marked `aria-disabled`, so screen reader
   * users can still find it, but typing, pasting and dropping text are blocked. Unlike the
   * `disabled` attribute, the value is still submitted with a form. Defaults to `false`.
   */
  isDisabled?: boolean;
  /** Called on each change, after `transform` has updated the input's value. */
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}
