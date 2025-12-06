import { Label } from '@/components/Label';
import { useAriaDisabled } from '@/hooks';
import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import * as React from 'react';
import { CheckboxProps } from '../types';

export const checkboxClasses =
  'peer h-5 w-5 shrink-0 rounded-sm border-2 border-gray-500 ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary-400 data-[state=checked]:bg-primary-400 data-[state=checked]:text-white';

const DefaultCheckboxLabel = ({ id, label }: Pick<CheckboxProps, 'id' | 'label'>) => {
  if (!label) return null;
  if (typeof label === 'string') return <Label htmlFor={id}>{label}</Label>;
  return label;
};

export const CheckboxDefault = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ id, label, isChecked, isDisabled, className, 'aria-label': ariaLabel, ...props }, ref) => {
  const disabledProps = useAriaDisabled({ isDisabled });

  return (
    <div
      className={cn(
        'flex items-center gap-2',
        isDisabled && 'cursor-not-allowed opacity-50 [&>*]:cursor-not-allowed',
      )}
    >
      <CheckboxPrimitive.Root
        ref={ref}
        aria-label={ariaLabel}
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
      >
        <CheckboxPrimitive.Indicator
          className={cn('flex items-center justify-center text-current')}
        >
          <Check className="h-4 w-4" strokeWidth={3} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <DefaultCheckboxLabel id={id} label={label} />
    </div>
  );
});

CheckboxDefault.displayName = 'CheckboxDefault';
