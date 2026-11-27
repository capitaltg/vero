import * as SelectPrimitive from '@radix-ui/react-select';
import { ButtonHTMLAttributes, ComponentPropsWithoutRef, ReactNode } from 'react';

export interface SelectOption {
  /** The value passed to `onChange` when this option is chosen. It can't be an empty string. */
  value: string;
  /** The text shown in the list and, once chosen, in the trigger. */
  label: string;
}

// Pick form-related attributes from SelectHTMLAttributes that we want to support
type SelectFormAttributes = Pick<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'name' | 'required' | 'autoFocus'
>;

export interface SelectProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'disabled'>,
    SelectFormAttributes {
  /** The choices, in order, each with a `value` and a `label`. */
  options: SelectOption[];
  /** The chosen option's `value`. Pass an empty string to show the placeholder. */
  value: string;
  /** Called with the new option's `value` when the user picks one. */
  onChange: (value: string) => void;
  /** The text shown when no option is chosen. Defaults to `"Select an option"`. */
  placeholder?: string;
  /** Classes for the trigger button. */
  className?: string;
  /**
   * The list's z-index. Defaults to the `dropdown` value set with `configureZIndex`, which is
   * `50` unless you change it.
   */
  zIndex?: number;
  /**
   * Disables the select. The trigger stays focusable and is marked `aria-disabled`, so screen
   * reader users can still find it, but it won't open.
   */
  isDisabled?: boolean;
  /**
   * The name attribute for form submission.
   * This is required for the select value to be included in form data.
   */
  name?: string;
  /**
   * Whether the select is required for form validation.
   * When true, the form cannot be submitted without a selection.
   */
  required?: boolean;
  /**
   * Automatically focuses the select when the page loads.
   */
  autoFocus?: boolean;
}

/** @deprecated Use `SelectProps` instead. */
export type SingleSelectProps = SelectProps;

export interface SelectRootProps extends ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
  /** The chosen item's `value`. Use it with `onValueChange` to control the select yourself. */
  value?: string;
  /** The item chosen at first, when you don't control the select with `value`. */
  defaultValue?: string;
  /** Called with the new item's `value` when the user picks one. */
  onValueChange?: (value: string) => void;
  /**
   * The name to submit the value under in a form. The select renders a hidden native
   * `<select>` for this.
   */
  name?: string;
  /** Whether the form needs a value before it can be submitted. */
  required?: boolean;
  /**
   * Disables the select with the native `disabled` attribute, which also removes the trigger
   * from the tab order. To keep it focusable, use `isDisabled` on `SelectTrigger` instead.
   */
  disabled?: boolean;
}
export interface SelectValueProps extends ComponentPropsWithoutRef<typeof SelectPrimitive.Value> {
  /** What the trigger shows when no item is chosen. */
  placeholder?: ReactNode;
}
export interface SelectTriggerProps
  extends Omit<ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>, 'disabled'> {
  /**
   * Disables the select. The trigger stays focusable and is marked `aria-disabled`, so screen
   * reader users can still find it, but it won't open. Defaults to `false`.
   */
  isDisabled?: boolean;
  /**
   * Whether an item is chosen. When `false`, the trigger's text is muted, for the placeholder.
   * Defaults to `true`; pass `false` while the value is empty.
   */
  hasValue?: boolean;
}
export interface SelectContentProps
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {
  /**
   * The list's z-index. It isn't set by default; `Select` passes the `dropdown` value from
   * `configureZIndex`. Set it when the list has to appear above another layer, such as a
   * `Dialog`.
   */
  zIndex?: number;
  /**
   * How the list is placed: `popper` opens it below the trigger, at least as wide as the
   * trigger, and `item-aligned` lays it over the trigger, lined up with the chosen item.
   * Defaults to `popper`.
   */
  position?: 'popper' | 'item-aligned';
}
export interface SelectItemProps extends ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
  /** The value passed to `onValueChange` when this item is chosen. It can't be an empty string. */
  value: string;
  /** Disables the item. It's skipped by the keyboard and can't be chosen. */
  disabled?: boolean;
  /**
   * The text used for typeahead, when the item's content isn't plain text. Defaults to the
   * item's text content.
   */
  textValue?: string;
}
export type SelectLabelProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;
export type SelectSeparatorProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>;
