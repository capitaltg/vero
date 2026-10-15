import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { getZIndex } from '@/lib/z-index';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React from 'react';
import { PopoverContentProps } from '../types';

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverArrow = PopoverPrimitive.Arrow;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(({ className, align = 'center', sideOffset = 4, hasArrow, zIndex, children, ...props }, ref) => {
  const resolvedZIndex = getZIndex('popover', zIndex);

  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        // A modal Dialog sets `pointer-events: none` on body. Radix normally re-enables pointer
        // events on a nested popover inline, but only when both share one copy of
        // @radix-ui/react-dismissable-layer; duplicate copies in a consumer's node_modules break
        // that, leaving the portaled popover unclickable. Radix's inline style still wins when set.
        className={cn('vero-popover', 'pointer-events-auto', styles.popover, className)}
        sideOffset={sideOffset}
        style={{ zIndex: resolvedZIndex, ...props.style }}
        {...props}
      >
        {children}
        {hasArrow ? (
          <PopoverArrow className="fill-popover stroke-muted stroke-[1px]" height={7} width={15} />
        ) : null}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
});
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverContent, PopoverTrigger };
