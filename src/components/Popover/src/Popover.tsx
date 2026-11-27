import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { getZIndex } from '@/lib/z-index';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React from 'react';
import { PopoverContentProps, PopoverProps, PopoverTriggerProps } from '../types';

/**
 * Floating content, such as a small form or extra detail, that opens from a trigger and
 * stays open until dismissed. Compose `Popover` from a `PopoverTrigger` and a
 * `PopoverContent`. Built on Radix Popover: focus moves into the popover when it opens, and
 * Escape or a click outside closes it.
 */
const Popover = (props: PopoverProps) => <PopoverPrimitive.Root {...props} />;
Popover.displayName = 'Popover';

/** The button that opens and closes the popover. Pass `asChild` to use your own button. */
const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  PopoverTriggerProps
>((props, ref) => <PopoverPrimitive.Trigger ref={ref} {...props} />);
PopoverTrigger.displayName = 'PopoverTrigger';

const PopoverArrow = PopoverPrimitive.Arrow;

/**
 * The popover's panel, rendered in a portal and positioned against the trigger. Use `side`,
 * `align` and `sideOffset` to place it.
 */
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
PopoverContent.displayName = 'PopoverContent';

export { Popover, PopoverContent, PopoverTrigger };
