import { cn } from '@/lib/utils';
import * as React from 'react';
import { badgeVariants } from '../constants';
import { BadgeProps } from '../types';

/**
 * A small, rounded label for a status, category or count. It comes in seven variants, a
 * `dark` or `light` tone and two sizes.
 */
const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, tone, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('vero-badge', badgeVariants({ variant, tone, size, className }))}
        {...props}
      />
    );
  },
);
Badge.displayName = 'Badge';

export { Badge };
