import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { getZIndex } from '@/lib/z-index';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as React from 'react';
import { useCallback, useState } from 'react';
import { TooltipProps } from '../types';

function TooltipProvider({
  delayDuration = 0,
  ...props
}: Readonly<React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider>>) {
  return <TooltipPrimitive.Provider delayDuration={delayDuration} {...props} />;
}

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
      open: openProp,
      defaultOpen,
      onOpenChange,
      ...props
    },
    ref,
  ) => {
    const resolvedZIndex = getZIndex('tooltip', zIndex);
    const [open, setOpen] = useState(defaultOpen ?? false);
    const [hoveringTrigger, setHoveringTrigger] = useState(false);
    const [hoveringContent, setHoveringContent] = useState(false);

    const isControlled = openProp !== undefined;
    const isOpen = isControlled ? openProp : open;

    // Intercept Radix's open/close requests. When Radix tries to close the
    // tooltip (e.g. on trigger click) but the pointer is still over the
    // trigger or content, keep it open instead of allowing the close.
    const handleOpenChange = useCallback(
      (next: boolean) => {
        if (!next && (hoveringTrigger || hoveringContent)) {
          if (!isControlled) setOpen(true);
          onOpenChange?.(true);
          return;
        }
        if (!isControlled) setOpen(next);
        onOpenChange?.(next);
      },
      [isControlled, hoveringTrigger, hoveringContent, onOpenChange],
    );

    return (
      <TooltipPrimitive.Root
        {...props}
        defaultOpen={undefined}
        open={isOpen}
        onOpenChange={handleOpenChange}
      >
        <TooltipPrimitive.Trigger
          asChild
          onMouseEnter={() => setHoveringTrigger(true)}
          onMouseLeave={() => setHoveringTrigger(false)}
        >
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          ref={ref}
          align={align}
          className={cn(styles.tooltip, className)}
          side={side}
          sideOffset={offset}
          style={{ zIndex: resolvedZIndex, ...props.style }}
          onMouseEnter={() => setHoveringContent(true)}
          onMouseLeave={() => setHoveringContent(false)}
        >
          {content}
          {hasArrow ? (
            <TooltipPrimitive.Arrow
              className="fill-base-700 stroke-base-700"
              height={5}
              width={11}
            />
          ) : null}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    );
  },
);
Tooltip.displayName = 'Tooltip';

export { Tooltip, TooltipProvider };
