import { TextareaHTMLAttributes } from 'react';

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'disabled'> {
  /**
   * Disables the textarea. It stays focusable and is marked `aria-disabled`, so screen
   * reader users can still find it, but typing, pasting and dropping text are blocked.
   * Unlike the `disabled` attribute, the value is still submitted with a form. Defaults to
   * `false`.
   */
  isDisabled?: boolean;
  /**
   * Grows the textarea to fit its text as the user types, and removes the resize handle.
   * Defaults to `false`.
   */
  isGrowable?: boolean;
}
