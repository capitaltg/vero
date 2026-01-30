import { Label } from '@/components/Label';
import { useAriaDisabled, useAriaLabelled } from '@/hooks';
import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import * as React from 'react';
import { RadioProps } from '../types';

export const radioCircleClasses =
  'aspect-square h-5 w-5 rounded-full border-2 border-gray-500 text-primary-400 ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 data-[state=checked]:border-primary-400 ';

export const RadioDefault = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioProps
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
        <RadioGroupPrimitive.Item
          ref={ref}
          checked={isChecked}
          className={cn(
            styles.focusRingVisible,
            styles.focusRingVisibleSm,
            radioCircleClasses,
            className,
          )}
          id={id}
          {...props}
          {...disabledProps}
          {...ariaProps}
        >
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
            <Circle className="h-3 w-3 fill-current text-current" />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
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
            <p className="mb-0 mt-0 text-sm text-muted-foreground" id={descriptionId}>
              {description}
            </p>
          ) : null}
        </div>
      </div>
    );
  },
);

RadioDefault.displayName = 'RadioDefault';
