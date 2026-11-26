import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as React from 'react';
import { DialogDescriptionProps } from '../types';

/** A short explanation under the title. Screen readers read it when the dialog opens. */
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  DialogDescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(styles.text.hint, 'mr-8', className)}
    {...props}
  />
));
DialogDescription.displayName = 'DialogDescription';

export { DialogDescription };
