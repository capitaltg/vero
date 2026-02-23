import { useFormGroupLayout } from '@/hooks';
import { cn } from '@/lib/utils';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as React from 'react';
import { Radio } from '../../Radio';
import { RadioGroupProps } from '../types';

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(
  (
    {
      options,
      value,
      onChange,
      className,
      columns = 2,
      id: groupId,
      orientation = 'vertical',
      variant = 'default',
      ...props
    },
    ref,
  ) => {
    const layoutClasses = useFormGroupLayout({ variant, orientation, columns });

    return (
      <RadioGroupPrimitive.Root
        ref={ref}
        className={cn(layoutClasses, className)}
        id={groupId}
        value={value}
        onValueChange={onChange}
        {...props}
      >
        {options.map(option => {
          const inputId = option.id ?? (groupId ? `${groupId}-${option.value}` : option.value);
          return (
            <Radio
              key={option.value}
              description={option.description}
              id={inputId}
              isChecked={value === option.value}
              label={option.label}
              value={option.value}
              variant={variant}
            />
          );
        })}
      </RadioGroupPrimitive.Root>
    );
  },
);
RadioGroup.displayName = 'RadioGroup';

export { RadioGroup };
