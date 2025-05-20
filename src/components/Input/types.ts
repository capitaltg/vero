import { InputHTMLAttributes } from 'react';

export type TextTransform = 'uppercase' | 'lowercase' | 'trim' | 'none';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'disabled'> {
  transform?: TextTransform | TextTransform[];
  isDisabled?: boolean;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}
