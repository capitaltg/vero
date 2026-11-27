import { HTMLAttributes, ReactElement, ReactNode } from 'react';

export interface FormItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * The field's label. A string is rendered as a `Label` pointing at the field with `for`,
   * with the id `form-item-{id}-label`. Any other node is rendered as is, so you must
   * label the field yourself.
   */
  label?: ReactNode;
  /**
   * An optional slot to display next to the label, such as an info icon with a tooltip or popover.
   */
  labelSlot?: ReactNode;
  /**
   * Hint text under the label. FormItem adds its id to the field's `aria-describedby`. It's
   * only shown when `label` is set.
   */
  hintText?: string;
  /**
   * Error text under the field. When it's set, FormItem adds its id to the field's
   * `aria-describedby`, sets `aria-invalid` on the field and styles the field as an error.
   * It isn't announced when it appears; move focus to the field or use a live region if
   * users need to hear it right away.
   */
  errorText?: string;
  /**
   * Additional classes to apply to the form item container.
   */
  className?: string;
  /**
   * The id of the field, used for the label's `for` and to build the label, hint and error
   * ids. Defaults to the child's `id`. FormItem throws an error if neither is set. It
   * doesn't set the child's `id`, so the two must match.
   */
  elementId?: string;
  /**
   * The field, such as an `Input` or `Select`. FormItem adds `aria-describedby` and
   * `aria-invalid` to it, keeping any `aria-describedby` it already has.
   */
  children: ReactElement;
  /**
   * Shows a red asterisk after a string label, as part of the label text. It doesn't mark
   * the field as required, so set `required` or `aria-required` on the field too. Defaults
   * to `false`.
   */
  isRequired?: boolean;
}
