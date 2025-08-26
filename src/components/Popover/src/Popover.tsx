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
        sideOffset={sideOffset}
        className={cn(styles.popover, className)}
        style={{ zIndex: resolvedZIndex, ...props.style }}
        {...props}
      >
        {children}
        {hasArrow ? (
          <PopoverArrow className="fill-popover stroke-muted stroke-[1px]" width={15} height={7} />
        ) : null}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
});
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverContent, PopoverTrigger };
