import * as LabelPrimitive from '@radix-ui/react-label';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface LabelProps extends ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  /**
   * The `id` of the field this label names. Clicking the label then focuses or toggles the
   * field. Leave it out when the label wraps the field.
   */
  htmlFor?: string;
  /** The label text. */
  children?: ReactNode;
  /** Classes for the `<label>`, merged after the defaults. */
  className?: string;
}
