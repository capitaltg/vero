import { Label } from '@/components/Label';
import { useAriaDisabled, useAriaLabelled } from '@/hooks';
import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import * as React from 'react';
import { CheckboxProps } from '../types';

export const checkboxClasses =
  'peer h-5 w-5 shrink-0 rounded-sm border-2 border-gray-500 ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary-400 data-[state=checked]:bg-primary-400 data-[state=checked]:text-white';

export const CheckboxDefault = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    { id, label, description, isChecked, isDisabled, className, 'aria-label': ariaLabel, ...props },
    ref,
  ) => {
    const disabledProps = useAriaDisabled({ isDisabled });
    const { ariaProps, labelId, descriptionId } = useAriaLabelled({
      label,
      description,
      'aria-label': ariaLabel,
    });

    return (
      <div
        className={cn(
          'flex items-start gap-2',
          isDisabled && 'cursor-not-allowed opacity-50 [&>*]:cursor-not-allowed',
        )}
      >
        <CheckboxPrimitive.Root
          ref={ref}
          checked={isChecked}
          className={cn(
            styles.focusRingVisible,
            styles.focusRingVisibleSm,
            checkboxClasses,
            className,
          )}
          id={id}
          {...props}
          {...disabledProps}
          {...ariaProps}
        >
          <CheckboxPrimitive.Indicator
            className={cn('flex items-center justify-center text-current')}
          >
            <Check className="h-4 w-4" strokeWidth={3} />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        <div className="mt-[3px] flex flex-col gap-1">
          {label ? (
            typeof label === 'string' ? (
              <Label htmlFor={id} id={labelId}>
                {label}
              </Label>
            ) : (
              <div id={labelId}>{label}</div>
            )
          ) : null}
          {description ? (
            <p className="text-sm text-muted-foreground" id={descriptionId}>
              {description}
            </p>
          ) : null}
        </div>
      </div>
    );
  },
);

CheckboxDefault.displayName = 'CheckboxDefault';
