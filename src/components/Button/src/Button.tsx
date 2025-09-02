import { useDisabled } from '@/hooks';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { buttonVariants } from '../constants';
import { ButtonProps } from '../types';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isDisabled = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const disabledProps = useDisabled({ isDisabled });

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...disabledProps}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button };
