import { cn } from '@/lib/utils';
import { DialogFooterProps } from '../types';

/**
 * Holds the dialog's action buttons, in a row at the bottom right. On small screens they stack,
 * with the last button on top.
 */
const DialogFooter = ({ className, ...props }: DialogFooterProps) => (
  <div
    className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
    {...props}
  />
);
DialogFooter.displayName = 'DialogFooter';

export { DialogFooter };
