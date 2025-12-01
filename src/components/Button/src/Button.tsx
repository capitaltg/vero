import { useAriaDisabled } from '@/hooks';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { buttonVariants } from '../constants';
import { ButtonProps } from '../types';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isDisabled = false,
      isLoading = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const disabledProps = useAriaDisabled({ isDisabled: isDisabled || isLoading });

    // Don't render loading state when using asChild
    if (asChild) {
      return (
        <Comp
          ref={ref}
          className={cn(buttonVariants({ variant, size }), className)}
          {...props}
          {...disabledProps}
        >
          {children}
        </Comp>
      );
    }

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), 'relative', className)}
        {...props}
        {...disabledProps}
      >
        {isLoading ? (
          <>
            <span className="invisible">{children}</span>
            <span className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="h-4 w-4 animate-spin" />
            </span>
          </>
        ) : (
          children
        )}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button };
