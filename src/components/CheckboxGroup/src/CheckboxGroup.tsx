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
      orientation = 'vertical',
      variant = 'default',
      ...props
    },
    ref,
  ) => {
    const layoutClasses = useFormGroupLayout({ variant, orientation, columns });

    return (
      <div ref={ref} className={cn('', className)} {...props}>
        <div className={cn(layoutClasses)}>
          {options.map(option =>
            variant === 'default' ? (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  description={option.description}
                  id={option.id}
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
              </div>
            ) : (
              <Checkbox
                key={option.id}
                description={option.description}
                id={option.id}
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
            ),
          )}
        </div>
      </div>
    );
  },
);
CheckboxGroup.displayName = 'CheckboxGroup';

export { CheckboxGroup };
