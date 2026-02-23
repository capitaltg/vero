import { useFormGroupLayout } from '@/hooks';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Checkbox } from '../../Checkbox';
import { CheckboxGroupProps } from '../types';

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
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
      <div ref={ref} className={cn(layoutClasses, className)} id={groupId} {...props}>
        {options.map(option => {
          const inputId = option.inputId ?? (groupId ? `${groupId}-${option.id}` : option.id);
          return (
            <Checkbox
              key={option.id}
              description={option.description}
              id={inputId}
              isChecked={value.includes(option.id)}
              label={option.label}
              variant={variant}
              onCheckedChange={isChecked => {
                if (isChecked) {
                  onChange([...value, option.id]);
                } else {
                  onChange(value.filter(id => id !== option.id));
                }
              }}
            />
          );
        })}
      </div>
    );
  },
);
CheckboxGroup.displayName = 'CheckboxGroup';

export { CheckboxGroup };
