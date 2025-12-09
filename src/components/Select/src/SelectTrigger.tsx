import { useAriaDisabled } from '@/hooks';
import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';
import { SelectTriggerProps } from '../types';

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, children, isDisabled = false, ...props }, ref) => {
  const disabledProps = useAriaDisabled({ isDisabled });

  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        styles.input,
        styles.focusRing,
        `min-w-0 items-center justify-between text-left [&>span]:min-w-0 [&>span]:flex-1
        [&>span]:truncate [&>span]:text-muted-foreground [&>svg]:flex-shrink-0`,
        className,
      )}
      {...props}
      {...disabledProps}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

export { SelectTrigger };
