import { VariantProps } from 'class-variance-authority';
import { badgeVariants } from './constants';

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * The color: `default` (gray), `primary`, `success`, `danger`, `warning`, `info` or
   * `outline` (a border with no fill). Defaults to `default`.
   */
  variant?: 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'outline' | null;
  /**
   * The color weight. `dark` is a solid fill; `light` is a tinted background with a border in
   * the same color. Has no effect on the `outline` variant. Defaults to `dark`.
   */
  tone?: 'dark' | 'light' | null;
  /** The padding and text size: `default` or `lg`. Defaults to `default`. */
  size?: 'default' | 'lg' | null;
  /** Classes for the badge, merged after the defaults. */
  className?: string;
}
