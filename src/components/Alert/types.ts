import { HTMLAttributes, ReactNode } from 'react';

type AlertVariant = 'success' | 'warning' | 'danger' | 'info';
type AlertSize = 'sm' | 'default';

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** The status the alert shows, which sets its color and icon. */
  variant: AlertVariant;
  /**
   * The padding, text and icon size. `sm` puts the heading and the message on one line.
   * Defaults to `default`.
   */
  size?: AlertSize;
  /** A bold heading above the message. When set, it labels the alert. */
  heading?: string;
  /** The HTML element for the heading. Defaults to `h2`. */
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Shows the variant's status icon. Defaults to `true`. */
  hasIcon?: boolean;
  /**
   * Shows a close button. The alert doesn't hide itself; remove it in `onClose`. Defaults to
   * `false`.
   */
  isClosable?: boolean;
  /** Called when the close button is clicked. */
  onClose?: () => void;
  /** The message. */
  children: ReactNode;
}
