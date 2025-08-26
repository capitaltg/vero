import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { getZIndex } from '@/lib/z-index';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as React from 'react';
import { TooltipProps } from '../types';

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Root>, TooltipProps>(
  (
    {
      children,
      content,
      side = 'top',
      align = 'center',
      offset = 2,
      hasArrow = true,
      className,
      zIndex,
      ...props
    },
    ref,
  ) => {
    const resolvedZIndex = getZIndex('tooltip', zIndex);

    return (
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          ref={ref}
          side={side}
          align={align}
          sideOffset={offset}
          className={cn(styles.tooltip, className)}
          style={{ zIndex: resolvedZIndex, ...props.style }}
          {...props}
        >
          {content}
          {hasArrow ? (
            <TooltipPrimitive.Arrow
              width={11}
              height={5}
              className="fill-base-700 stroke-base-700"
            />
          ) : null}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    );
  },
);
Tooltip.displayName = 'Tooltip';

export { Tooltip, TooltipProvider };
