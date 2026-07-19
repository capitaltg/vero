import { useAriaDisabled, useAriaLabelled } from '@/hooks';
import { cn } from '@/lib/utils';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import * as React from 'react';
import { CheckboxProps } from '../types';
import { checkboxClasses } from './CheckboxDefault';

export const CheckboxTile = React.forwardRef<
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
          <div className={cn('vero-checkbox-label', 'font-medium')} id={labelId}>
            {label}
          </div>
        );
      }
      return <div id={labelId}>{label}</div>;
    };

    return (
      <div
        className={cn(
          'vero-checkbox',
          'relative rounded-lg border-2 border-muted bg-popover px-4 py-4',
          isChecked && 'border-primary-400',
          isDisabled
            ? 'cursor-not-allowed opacity-50 [&_*]:cursor-not-allowed'
            : 'cursor-pointer hover:bg-accent hover:text-accent-foreground',
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
        <div className={cn('vero-checkbox-content', 'flex items-start gap-3')}>
          <div
            className={cn(
              'vero-checkbox-box',
              checkboxClasses,
              'pointer-events-none mt-1',
              isChecked && 'border-primary-400 bg-primary-400',
            )}
          >
            {isChecked ? (
              <div
                className={cn(
                  'vero-checkbox-indicator',
                  'flex h-full w-full items-center justify-center',
                )}
              >
                <Check className={cn('vero-checkbox-icon', 'h-4 w-4 text-white')} strokeWidth={3} />
              </div>
            ) : null}
          </div>
          <div className={cn('vero-checkbox-text', 'pointer-events-none space-y-1')}>
            {renderLabel()}
            {description ? (
              <p
                className={cn(
                  'vero-checkbox-description',
                  'mb-0 mt-0 text-sm text-muted-foreground',
                )}
                id={descriptionId}
              >
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    );
  },
);

CheckboxTile.displayName = 'CheckboxTile';
