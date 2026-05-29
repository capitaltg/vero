import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as React from 'react';
import { DialogTitleProps } from '../types';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  DialogTitleProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      styles.text.title,
      'mr-8 text-lg font-bold leading-none tracking-tight text-base-700 dark:text-base-100',
      className,
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

export { DialogTitle };
