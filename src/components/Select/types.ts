import * as SelectPrimitive from '@radix-ui/react-select';
import { ButtonHTMLAttributes, ComponentPropsWithoutRef } from 'react';

export interface SelectOption {
  value: string;
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
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  zIndex?: number;
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

// TODO: Remove when removing SingleSelect component
export type SingleSelectProps = SelectProps;

export interface SelectTriggerProps
  extends Omit<ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>, 'disabled'> {
  isDisabled?: boolean;
}
export interface SelectContentProps
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {
  zIndex?: number;
}
export type SelectItemProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;
export type SelectLabelProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;
export type SelectSeparatorProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>;
