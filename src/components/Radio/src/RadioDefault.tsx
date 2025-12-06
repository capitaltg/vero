import { DefaultFormControlLabel } from '@/components/shared/DefaultFormControlLabel';
import { useAriaDisabled } from '@/hooks';
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
>(({ id, label, isChecked, isDisabled, className, 'aria-label': ariaLabel, ...props }, ref) => {
  const disabledProps = useAriaDisabled({ isDisabled });

  return (
    <div
      className={cn(
        'flex items-center gap-2',
        isDisabled && 'cursor-not-allowed opacity-50 [&>*]:cursor-not-allowed',
      )}
    >
      <RadioGroupPrimitive.Item
        ref={ref}
        aria-label={ariaLabel}
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
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Circle className="h-3 w-3 fill-current text-current" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <DefaultFormControlLabel id={id} label={label} />
    </div>
  );
});

RadioDefault.displayName = 'RadioDefault';
