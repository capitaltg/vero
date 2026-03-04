import { buttonVariants } from '@/components/Button/constants';
import { useAriaDisabled, useAriaLabelled } from '@/hooks';
import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as React from 'react';
import { RadioProps } from '../types';

export const RadioButton = React.forwardRef<
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

    const renderLabel = () => {
      if (!label) return null;
      if (typeof label === 'string') {
        return (
          <span className="font-medium" id={labelId}>
            {label}
          </span>
        );
      }
      return <span id={labelId}>{label}</span>;
    };

    return (
      <div
        className={cn(
          'relative',
          styles.button,
          buttonVariants({ variant: 'input' }),
          `has-[[data-state=checked]]:border-primary-400 has-[[data-state=checked]]:bg-primary-400
          has-[[data-state=checked]]:text-white has-[[data-state=checked]]:hover:bg-primary-500
          has-[[data-state=checked]]:hover:underline`,
          isDisabled && 'pointer-events-none cursor-not-allowed opacity-50',
          className,
        )}
      >
        <RadioGroupPrimitive.Item
          ref={ref}
          {...(isChecked !== undefined && { checked: isChecked })}
          className="absolute inset-0 opacity-0"
          id={id}
          {...ariaProps}
          {...props}
          {...disabledProps}
        />
        <div className="flex items-center gap-2">
          {renderLabel()}
          {description ? (
            <span className="text-sm text-muted-foreground" id={descriptionId}>
              {description}
            </span>
          ) : null}
        </div>
      </div>
    );
  },
);

RadioButton.displayName = 'RadioButton';
