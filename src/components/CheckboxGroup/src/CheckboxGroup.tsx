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
    return (
      <div ref={ref} className={cn('', className)} {...props}>
        <div
          className={cn(
            variant === 'default' && orientation === 'horizontal' && 'flex flex-row gap-5',
            variant === 'default' && orientation === 'vertical' && 'grid gap-3',
            variant === 'default' && orientation === 'vertical' && columns === 1 && 'grid-cols-1',
            variant === 'default' && orientation === 'vertical' && columns === 2 && 'grid-cols-2',
            variant === 'default' && orientation === 'vertical' && columns === 3 && 'grid-cols-3',
            variant === 'default' && orientation === 'vertical' && columns === 4 && 'grid-cols-4',
            variant === 'tile' && 'grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3',
            variant === 'button' &&
              orientation === 'horizontal' &&
              `flex flex-row gap-0 [&>*:first-child]:ml-0 [&>*:first-child]:rounded-l-sm
              [&>*:last-child]:rounded-r-sm [&>*]:-ml-[1px] [&>*]:rounded-none`,
            variant === 'button' &&
              orientation === 'vertical' &&
              `flex flex-col gap-0 [&>*:first-child]:mt-0 [&>*:first-child]:rounded-t-sm
              [&>*:last-child]:rounded-b-sm [&>*]:-mt-[1px] [&>*]:rounded-none`,
          )}
        >
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
