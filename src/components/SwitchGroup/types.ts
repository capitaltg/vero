import { HTMLAttributes, ReactNode } from 'react';

export interface SwitchOption {
  /**
   * The option's id, used in the `value` array. It's also the switch's DOM id as is, so it
   * must be unique on the page.
   */
  id: string;
  /** The option's visible label, which names its switch. */
  label: string;
  /** Disables this option only. */
  isDisabled?: boolean;
}

type SwitchGroupBaseProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  /** Classes for the group element, merged after the layout classes. */
  className?: string;
  /**
   * Disables every switch built from `options`, on top of each option's `isDisabled`. It
   * doesn't affect `Switch` children; set `isDisabled` on each of them. Defaults to `false`.
   */
  isDisabled?: boolean;
  /**
   * Number of columns (vertical orientation). Extra columns appear from the `md` breakpoint
   * up. Defaults to 1.
   */
  columns?: 1 | 2 | 3 | 4;
  /**
   * Lays the switches out in a row (`horizontal`) or a column or grid (`vertical`). Defaults
   * to `vertical`.
   */
  orientation?: 'horizontal' | 'vertical';
};

/**
 * Every prop of both usage patterns, each optional. `SwitchGroupProps` intersects it with
 * the two patterns below, which decide which props are required. It exists so the docs,
 * which can't read union types, list every prop.
 */
interface SwitchGroupAllProps extends SwitchGroupBaseProps {
  /**
   * The options to render as switches, in order. Pass it with `value` and `onChange`, or
   * pass `children` instead.
   */
  options?: SwitchOption[];
  /** The ids of the options that are on. Required with `options`. */
  value?: string[];
  /**
   * Called with the new array of ids that are on when the user turns an option on or off.
   * Required with `options`.
   */
  onChange?: (value: string[]) => void;
  /**
   * `Switch` components, in any layout, instead of `options`. You manage each one's checked
   * state.
   */
  children?: ReactNode;
}

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

export type SwitchGroupProps = SwitchGroupAllProps &
  (SwitchGroupPropsWithOptions | SwitchGroupPropsWithChildren);
