import { cn } from '@/lib/utils';
import * as React from 'react';
import { cardGroupVariants } from '../constants';
import { CardGroupProps } from '../types';

/**
 * Lays out cards in a responsive grid. Renders a list, as USWDS recommends, so screen
 * readers announce how many cards there are; each child is wrapped in its own `<li>`.
 */
const CardGroup = React.forwardRef<HTMLUListElement, CardGroupProps>(
  ({ className, columns, children, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn('vero-card-group', cardGroupVariants({ columns }), className)}
      {...props}
    >
      {React.Children.toArray(children).map((child, index) => (
        <li
          key={React.isValidElement(child) && child.key != null ? child.key : index}
          className="vero-card-group-item grid"
        >
          {child}
        </li>
      ))}
    </ul>
  ),
);
CardGroup.displayName = 'CardGroup';

export { CardGroup };
