import { ReactElement, ReactNode } from 'react';

export interface FormItemProps {
  /**
   * The label for the form item. If a string is provided, it will be wrapped in a `<Label>` component. If a ReactNode is provided, it will be rendered as-is.
   */
  label?: ReactNode;
  /**
   * An optional slot to display next to the label, such as an info icon with a tooltip or popover.
   */
  labelSlot?: ReactNode;
  /**
   * Hint text to display below the label and above the form element.
   */
  hintText?: string;
  /**
   * Error text to display below the form element. If provided, the form item will be styled to indicate an error.
   */
  errorText?: string;
  /**
   * Additional classes to apply to the form item container.
   */
  className?: string;
  /**
   * The ID used to generate the label, hint, and error IDs for accessibility. If not provided, the ID of the top-level child element will be used if available. This ID must be unique on the page and must be used as the `id` attribute of the child form element so that it can be assocated with the label.
   */
  elementId?: string;
  /**
   * The form element associated with this form item, such as an input or select.
   */
  children: ReactElement;
  /**
   * Whether the form item is required. If true, an asterisk (*) will be displayed next to the label.
   */
  isRequired?: boolean;
}
