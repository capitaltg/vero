import { useAriaDisabled, useAriaLabelled } from '@/hooks';
import { cn } from '@/lib/utils';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import * as React from 'react';
import { RadioProps } from '../types';
import { getCheckedProp } from '../utils';
import { radioCircleClasses } from './RadioDefault';

export const RadioTile = React.forwardRef<
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
          <div className="font-medium" id={labelId}>
            {label}
          </div>
        );
      }
      return <div id={labelId}>{label}</div>;
    };

    return (
      <div
        className={cn(
          'group relative rounded-lg border-2 border-muted bg-popover px-4 py-4',
          'has-[[data-state=checked]]:border-primary-400',
          isDisabled
            ? 'cursor-not-allowed opacity-50 [&_*]:cursor-not-allowed'
            : 'cursor-pointer hover:bg-accent hover:text-accent-foreground',
          className,
        )}
      >
        <RadioGroupPrimitive.Item
          ref={ref}
          className="absolute inset-0 opacity-0"
          id={id}
          {...getCheckedProp(isChecked)}
          {...ariaProps}
          {...props}
          {...disabledProps}
        />
        <div className="flex items-start gap-3">
          <div
            className={cn(
              radioCircleClasses,
              'pointer-events-none mt-1',
              'group-has-[[data-state=checked]]:border-primary-400',
            )}
          >
            <div
              className={cn(
                'flex h-full w-full items-center justify-center opacity-0',
                'group-has-[[data-state=checked]]:opacity-100',
              )}
            >
              <Circle className="h-3 w-3 fill-current text-primary-400" />
            </div>
          </div>
          <div className="pointer-events-none space-y-1">
            {renderLabel()}
            {description ? (
              <p className="mb-0 mt-0 text-sm text-muted-foreground" id={descriptionId}>
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    );
  },
);

RadioTile.displayName = 'RadioTile';
