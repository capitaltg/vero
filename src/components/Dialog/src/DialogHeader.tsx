import { cn } from '@/lib/utils';
import { DialogHeaderProps } from '../types';

/** Stacks the title and description at the top of the dialog. */
const DialogHeader = ({ className, ...props }: DialogHeaderProps) => (
  <div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />
);
DialogHeader.displayName = 'DialogHeader';

export { DialogHeader };
