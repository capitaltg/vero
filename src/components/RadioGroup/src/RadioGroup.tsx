import { useFormGroupLayout } from '@/hooks';
import { cn } from '@/lib/utils';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as React from 'react';
import { useId } from 'react';
import { Radio } from '../../Radio';
import { RadioGroupProps } from '../types';

/**
 * A set of radios for choosing one option, built on Radix Radio Group
 * (`role="radiogroup"`). Pass `options` to render the radios, or `Radio` children for a
 * custom layout. Arrow keys move between radios and select them. The group has no
 * accessible name of its own, so pass `aria-labelledby` with the id of its visible label,
 * or `aria-label`.
 */
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(
  (
    {
      options,
      children,
      value,
      onChange,
      className,
      columns = 1,
      id: groupId,
      isDisabled,
      orientation = 'vertical',
      variant = 'default',
      ...props
    },
    ref,
  ) => {
    const layoutClasses = useFormGroupLayout({ variant, orientation, columns });
    const generatedId = useId();
    const computedId = groupId ?? generatedId;

    return (
      <RadioGroupPrimitive.Root
        ref={ref}
        className={cn('vero-radio-group', layoutClasses, className)}
        id={groupId}
        value={value}
        onValueChange={onChange}
        {...props}
      >
        {options
          ? options.map(option => {
              const inputId = option.id ?? `${computedId}-${option.value}`;
              return (
                <Radio
                  key={option.value}
                  description={option.description}
                  id={inputId}
                  isChecked={value === option.value}
                  isDisabled={isDisabled || option.isDisabled}
                  label={option.label}
                  value={option.value}
                  variant={variant}
                />
              );
            })
          : children}
      </RadioGroupPrimitive.Root>
    );
  },
);
RadioGroup.displayName = 'RadioGroup';

export { RadioGroup };
