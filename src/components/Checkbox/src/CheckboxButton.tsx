import { buttonVariants } from '@/components/Button/constants';
import { useAriaDisabled, useAriaLabelled } from '@/hooks';
import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as React from 'react';
import { CheckboxProps } from '../types';

export const CheckboxButton = React.forwardRef<
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

    const renderLabel = () => {
      if (!label) return null;
      if (typeof label === 'string') {
        return (
          <span className={cn('vero-checkbox-label', 'font-medium')} id={labelId}>
            {label}
          </span>
        );
      }
      return <span id={labelId}>{label}</span>;
    };

    return (
      <div
        className={cn(
          'vero-checkbox',
          'relative',
          isChecked
            ? cn(styles.button, buttonVariants({ variant: 'primary' }))
            : cn(styles.button, buttonVariants({ variant: 'input' })),
          isDisabled && 'pointer-events-none cursor-not-allowed opacity-50',
          className,
        )}
      >
        <CheckboxPrimitive.Root
          ref={ref}
          checked={isChecked}
          className={cn('vero-checkbox-control', 'absolute inset-0 opacity-0')}
          id={id}
          {...ariaProps}
          {...props}
          {...disabledProps}
        />
        <div className={cn('vero-checkbox-content', 'flex items-center gap-2')}>
          {renderLabel()}
          {description ? (
            <span
              className={cn('vero-checkbox-description', 'text-sm text-muted-foreground')}
              id={descriptionId}
            >
              {description}
            </span>
          ) : null}
        </div>
      </div>
    );
  },
);

CheckboxButton.displayName = 'CheckboxButton';
