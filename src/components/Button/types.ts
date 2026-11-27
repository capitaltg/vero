import { VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';
import { buttonVariants } from './constants';
export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof buttonVariants> {
  /**
   * The visual style: `default` (outlined), `primary`, `danger`, `link`, `input` (styled
   * like a form field) or `ghost`. Defaults to `default`.
   */
  variant?: 'default' | 'primary' | 'danger' | 'link' | 'input' | 'ghost' | null;
  /** The height and padding: `default`, `sm` or `lg`. Defaults to `default`. */
  size?: 'default' | 'sm' | 'lg' | null;
  /**
   * Render the child element instead of a `<button>`, merging the button's props and
   * classes onto it. Use this for links, e.g. `<Button asChild><a href="/">Home</a></Button>`.
   * The loading spinner isn't shown with `asChild`.
   */
  asChild?: boolean;
  /**
   * Disables the button. It stays focusable and is marked `aria-disabled`, so screen reader
   * users can still find it, but clicks do nothing.
   */
  isDisabled?: boolean;
  /**
   * Shows a spinner in place of the label, keeping the button's width, and disables the
   * button while it shows. The button is marked `aria-busy`.
   */
  isLoading?: boolean;
}
