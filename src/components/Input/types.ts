import { InputHTMLAttributes } from 'react';

/** Custom transform function that receives the current value and returns the transformed value */
export type TextTransformFunction = (value: string) => string;

/** Preset transform options */
export type TextTransformPreset =
  | 'uppercase'
  | 'lowercase'
  | 'trim'
  | 'capitalize'
  | 'remove-spaces'
  | 'numbers-only'
  | 'alphanumeric'
  | 'slug'
  | 'kebab-case'
  | 'snake-case'
  | 'none';

/** A transform can be a preset string or a custom function */
export type TextTransform = TextTransformPreset | TextTransformFunction;

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'disabled'> {
  transform?: TextTransform | TextTransform[];
  isDisabled?: boolean;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}
