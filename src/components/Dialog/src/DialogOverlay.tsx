import { cn } from '@/lib/utils';
import { getZIndex } from '@/lib/z-index';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as React from 'react';
import { DialogOverlayProps } from '../types';

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  DialogOverlayProps
>(({ className, zIndex, ...props }, ref) => {
  const resolvedZIndex = getZIndex('overlay', zIndex);

  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        'fixed inset-0 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className,
      )}
      style={{ zIndex: resolvedZIndex, ...props.style }}
      {...props}
    />
  );
});
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

export { DialogOverlay };
