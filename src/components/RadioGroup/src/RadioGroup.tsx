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
      orientation = 'vertical',
      variant = 'default',
      ...props
    },
    ref,
  ) => {
    return (
      <RadioGroupPrimitive.Root
        ref={ref}
        className={cn(
          'grid gap-3',
          orientation === 'horizontal' && variant === 'default' && 'flex flex-row gap-5',
          orientation === 'vertical' && variant === 'default' && 'flex flex-col gap-2 space-y-1',
          variant === 'tile' && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
          variant === 'button' &&
            orientation === 'horizontal' &&
            `flex flex-row gap-0 [&>*:first-child]:ml-0 [&>*:first-child]:rounded-l-sm
            [&>*:last-child]:rounded-r-sm [&>*]:-ml-[1px] [&>*]:rounded-none`,
          variant === 'button' &&
            orientation === 'vertical' &&
            `flex flex-col gap-0 [&>*:first-child]:mt-0 [&>*:first-child]:rounded-t-sm
            [&>*:last-child]:rounded-b-sm [&>*]:-mt-[1px] [&>*]:rounded-none`,
          className,
        )}
        value={value}
        onValueChange={onChange}
        {...props}
      >
        {options.map(option => (
          <Radio
            key={option.value}
            description={option.description}
            id={option.value}
            isChecked={value === option.value}
            label={option.label}
            value={option.value}
            variant={variant}
          />
        ))}
      </RadioGroupPrimitive.Root>
    );
  },
);
RadioGroup.displayName = 'RadioGroup';

export { RadioGroup };
