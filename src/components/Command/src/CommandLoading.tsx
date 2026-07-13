import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { CommandLoadingProps } from '../types';

const CommandLoading = ({ children = 'Loading...', ...props }: CommandLoadingProps) => {
  return (
    <div
      className={cn(
        'vero-command-loading',
        'flex items-center gap-2 px-3 py-2.5 text-sm text-muted-foreground',
      )}
      {...props}
    >
      <Loader2 className={cn('vero-command-loading-icon', 'h-4 w-4 animate-spin')} />
      {children}
    </div>
  );
};
CommandLoading.displayName = 'CommandLoading';

export { CommandLoading };
