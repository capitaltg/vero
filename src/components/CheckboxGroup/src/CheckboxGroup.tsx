import { useFormGroupLayout } from '@/hooks';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { useId } from 'react';
import { Checkbox } from '../../Checkbox';
import { CheckboxGroupProps } from '../types';

/**
 * A set of checkboxes for choosing any number of options. Pass `options` with `value` and
 * `onChange`, or `Checkbox` children for a custom layout. The group renders a plain `div`
 * with no role or name, so put it in a `fieldset` with a `legend`, or pass
 * `role="group"` and `aria-labelledby`, to name it for screen readers.
 */
const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (
    {
      options,
      children,
      value = [],
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
      <div
        ref={ref}
        className={cn('vero-checkbox-group', layoutClasses, className)}
        id={groupId}
        {...props}
      >
        {options
          ? options.map(option => {
              const inputId = option.inputId ?? `${computedId}-${option.id}`;
              return (
                <Checkbox
                  key={option.id}
                  description={option.description}
                  id={inputId}
                  isChecked={value.includes(option.id)}
                  isDisabled={isDisabled || option.isDisabled}
                  label={option.label}
                  variant={variant}
                  onCheckedChange={isChecked => {
                    if (isChecked) {
                      onChange?.([...value, option.id]);
                    } else {
                      onChange?.(value.filter(id => id !== option.id));
                    }
                  }}
                />
              );
            })
          : children}
      </div>
    );
  },
);
CheckboxGroup.displayName = 'CheckboxGroup';

export { CheckboxGroup };
