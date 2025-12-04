import { useAriaDisabled, useRadioAria } from '@/hooks';
import { cn } from '@/lib/utils';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import * as React from 'react';
import { RadioProps } from '../types';
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
    const { ariaProps, labelId, descriptionId } = useRadioAria({
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
          'relative rounded-lg border-2 border-muted bg-popover px-4 py-4',
          isChecked && 'border-primary-400',
          isDisabled
            ? 'cursor-not-allowed opacity-50 [&_*]:cursor-not-allowed'
            : 'cursor-pointer hover:bg-accent hover:text-accent-foreground',
          className,
        )}
      >
        <RadioGroupPrimitive.Item
          ref={ref}
          checked={isChecked}
          className="absolute inset-0 opacity-0"
          id={id}
          {...ariaProps}
          {...props}
          {...disabledProps}
        />
        <div className="flex items-start gap-3">
          <div
            className={cn(
              radioCircleClasses,
              'pointer-events-none mt-1',
              isChecked && 'border-primary-400',
            )}
          >
            {isChecked ? (
              <div className="flex h-full w-full items-center justify-center">
                <Circle className="h-3 w-3 fill-current text-primary-400" />
              </div>
            ) : null}
          </div>
          <div className="pointer-events-none space-y-1">
            {renderLabel()}
            {description ? (
              <p className="text-sm text-muted-foreground" id={descriptionId}>
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
