import { HTMLAttributes, ReactNode } from 'react';

export interface CheckboxOption {
  /** Option identifier (used in value array). Consider standardizing with RadioGroup, which uses "value" for the option key. */
  id: string;
  /** The option's visible label, which names its checkbox. */
  label: string;
  /** Helper text under the label, linked to the checkbox with `aria-describedby`. */
  description?: string;
  /** Disables this option only. */
  isDisabled?: boolean;
  /** Optional explicit id for the checkbox input. Defaults to `${groupId}-${id}` when CheckboxGroup has an id. */
  inputId?: string;
}

type CheckboxGroupBaseProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  /**
   * The group's id. Each option's checkbox gets the id `{id}-{option.id}`, so give groups
   * that share option ids different ids. Without it, a generated id is used.
   */
  id?: string;
  /** Classes for the group element, merged after the layout classes. */
  className?: string;
  /**
   * Disables every checkbox built from `options`, on top of each option's `isDisabled`. It
   * doesn't affect `Checkbox` children; set `isDisabled` on each of them. Defaults to
   * `false`.
   */
  isDisabled?: boolean;
  /**
   * Number of columns for default and tile variants (vertical orientation). Extra columns
   * appear from the `md` breakpoint up. Defaults to 1.
   */
  columns?: 1 | 2 | 3 | 4;
  /**
   * Lays the checkboxes out in a row (`horizontal`) or a column or grid (`vertical`).
   * Defaults to `vertical`.
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The style of the checkboxes built from `options`: `default`, `tile` or `button`.
   * Defaults to `default`.
   */
  variant?: 'default' | 'tile' | 'button';
};

/**
 * Every prop of both usage patterns, each optional. `CheckboxGroupProps` intersects it with
 * the two patterns below, which decide which props are required. It exists so the docs,
 * which can't read union types, list every prop.
 */
interface CheckboxGroupAllProps extends CheckboxGroupBaseProps {
  /**
   * The options to render as checkboxes, in order. Pass it with `value` and `onChange`, or
   * pass `children` instead.
   */
  options?: CheckboxOption[];
  /** The ids of the checked options. Required with `options`. */
  value?: string[];
  /**
   * Called with the new array of checked ids when the user checks or unchecks an option.
   * Required with `options`.
   */
  onChange?: (value: string[]) => void;
  /**
   * `Checkbox` components, in any layout, instead of `options`. You manage each one's
   * checked state.
   */
  children?: ReactNode;
}

/** Use with an `options` array; CheckboxGroup renders Checkbox items and applies layout. */
export interface CheckboxGroupPropsWithOptions extends CheckboxGroupBaseProps {
  options: CheckboxOption[];
  value: string[];
  onChange: (value: string[]) => void;
  children?: never;
}

/**
 * Use with Checkbox components as children when you need custom layout or
 * structure (or a ref to a specific Checkbox). In this mode the caller manages
 * each Checkbox's checked state, so `value`/`onChange` are not used.
 */
export interface CheckboxGroupPropsWithChildren extends CheckboxGroupBaseProps {
  options?: never;
  value?: never;
  onChange?: never;
  children: ReactNode;
}

export type CheckboxGroupProps = CheckboxGroupAllProps &
  (CheckboxGroupPropsWithOptions | CheckboxGroupPropsWithChildren);
