import { HTMLAttributes, ReactNode } from 'react';

export interface SwitchOption {
  id: string;
  label: string;
  isDisabled?: boolean;
}

type SwitchGroupBaseProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  className?: string;
  isDisabled?: boolean;
  columns?: 1 | 2 | 3 | 4;
  orientation?: 'horizontal' | 'vertical';
};

/** Use with an `options` array; SwitchGroup renders Switch items and applies layout. */
export interface SwitchGroupPropsWithOptions extends SwitchGroupBaseProps {
  options: SwitchOption[];
  value: string[];
  onChange: (value: string[]) => void;
  children?: never;
}

/**
 * Use with Switch components as children when you need custom layout or
 * structure (or a ref to a specific Switch). In this mode the caller manages
 * each Switch's checked state, so `value`/`onChange` are not used.
 */
export interface SwitchGroupPropsWithChildren extends SwitchGroupBaseProps {
  options?: never;
  value?: never;
  onChange?: never;
  children: ReactNode;
}

export type SwitchGroupProps = SwitchGroupPropsWithOptions | SwitchGroupPropsWithChildren;
