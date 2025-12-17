import { InputHTMLAttributes } from 'react';

export type TextTransform = 'uppercase' | 'lowercase' | 'trim' | 'none';

/**
 * Predefined mask patterns for common input formats
 */
export type MaskPattern =
  // Phone
  | 'phone'
  | 'phone-us'
  | 'phone-uk'
  | 'phone-ca'
  | 'phone-us-ext'
  | 'phone-international'
  // Identification
  | 'ssn'
  | 'tax-id'
  | 'passport'
  | 'license'
  | 'a-number'
  | 'z-number'
  // Financial
  | 'credit-card'
  | 'credit-card-amex'
  | 'routing-number'
  | 'currency'
  // Dates & Time
  | 'date'
  | 'date-us'
  | 'date-iso'
  | 'date-eu'
  | 'time'
  | 'time-24'
  | 'datetime'
  // Address
  | 'zip-code'
  | 'zip-code-us'
  | 'postal-ca'
  | 'postal-uk';

/**
 * Input mask can be a predefined pattern or a custom pattern string.
 * Custom patterns:
 * - Use '9' for digits (0-9)
 * - Use 'a' for letters (a-z, A-Z)
 * - Use '*' for alphanumeric (a-z, A-Z, 0-9)
 * - Use any other character as a literal placeholder
 * Example: '(999) 999-9999' for phone number
 */
export type InputMask = MaskPattern | string;

/**
 * Extended change event that includes the raw value (without mask literals)
 * when a mask is applied to the input.
 */
export interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {
  /**
   * The raw value with mask literals stripped out.
   * Only present when a mask is applied; otherwise same as evt.target.value.
   * Example: For mask "(999) 999-9999" and input "(555) 123-4567",
   * rawValue would be "5551234567".
   */
  rawValue: string;
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'disabled'> {
  transform?: TextTransform | TextTransform[];
  /**
   * Input mask pattern for formatting user input.
   * Can be a predefined pattern (e.g., 'phone', 'ssn') or a custom pattern string.
   * Custom patterns: '9' = digit, 'a' = letter, '*' = alphanumeric, other chars = literal.
   * Example: '(999) 999-9999' for phone number formatting.
   */
  mask?: InputMask;
  isDisabled?: boolean;
  /**
   * Callback fired when the input value changes.
   * The event includes a `rawValue` property containing the value without mask literals
   * when a mask is applied.
   * @param evt - The change event with an additional `rawValue` property
   */
  onChange?: (evt: InputChangeEvent) => void;
}
