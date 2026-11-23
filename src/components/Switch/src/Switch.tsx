import { Label } from '@/components/Label';
import { useAriaDisabled } from '@/hooks';
import { validateFormControlProps } from '@/lib/form-controls';
import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as React from 'react';
import { useId } from 'react';
import { switchClasses, switchThumbClasses } from '../constants';
import { SwitchProps } from '../types';

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, SwitchProps>(
  (
    {
      className,
      label,
      id,
      'aria-label': ariaLabel,
      isChecked = false,
      isDisabled = false,
      ...props
    },
    ref,
  ) => {
    const disabledProps = useAriaDisabled({ isDisabled });
    const generatedId = useId();
    const computedId = id ?? generatedId;

    validateFormControlProps('Switch', label, ariaLabel);

    return (
      <div className={cn('vero-switch', 'flex items-center space-x-2')}>
        <SwitchPrimitives.Root
          aria-label={ariaLabel}
          checked={isChecked}
          className={cn(styles.focusRing, switchClasses, className)}
          {...props}
          {...disabledProps}
          ref={ref}
          id={computedId}
        >
          <SwitchPrimitives.Thumb className={switchThumbClasses} />
        </SwitchPrimitives.Root>
        {label ? (
          <Label
            className={cn(
              !isDisabled && 'cursor-pointer',
              isDisabled && 'pointer-events-none cursor-not-allowed',
            )}
            htmlFor={computedId}
          >
            {label}
          </Label>
        ) : null}
      </div>
    );
  },
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
