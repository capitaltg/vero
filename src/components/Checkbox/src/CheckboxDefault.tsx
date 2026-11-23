import { Label } from '@/components/Label';
import { useAriaDisabled, useAriaLabelled } from '@/hooks';
import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as React from 'react';
import { checkboxClasses } from '../constants';
import { CheckboxCheckMark } from '../graphic';
import { CheckboxProps } from '../types';

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
          'vero-checkbox',
          'flex items-start gap-2',
          isDisabled && 'cursor-not-allowed opacity-50 [&>*]:cursor-not-allowed',
        )}
      >
        <CheckboxPrimitive.Root
          ref={ref}
          checked={isChecked}
          className={cn(styles.focusRing, styles.focusRingSm, checkboxClasses, className)}
          id={id}
          {...props}
          {...disabledProps}
          {...ariaProps}
        >
          <CheckboxPrimitive.Indicator
            className={cn('flex items-center justify-center text-current')}
          >
            <CheckboxCheckMark />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        <div className="mt-[3px] flex flex-col">
          {label ? (
            <Label
              className={cn(
                !isDisabled && 'cursor-pointer',
                isDisabled && 'pointer-events-none cursor-not-allowed',
              )}
              htmlFor={id}
              id={labelId}
            >
              {label}
            </Label>
          ) : null}
          {description ? (
            <Label
              className={cn(
                !isDisabled && 'cursor-pointer',
                isDisabled && 'pointer-events-none cursor-not-allowed',
              )}
              htmlFor={id}
            >
              <span className="inline-block pt-1 text-sm text-muted-foreground" id={descriptionId}>
                {description}
              </span>
            </Label>
          ) : null}
        </div>
      </div>
    );
  },
);

CheckboxDefault.displayName = 'CheckboxDefault';
