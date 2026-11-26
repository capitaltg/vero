import { useFormGroupLayout } from '@/hooks';
import { cn } from '@/lib/utils';
import React, { useCallback } from 'react';
import { Switch } from '../../Switch';
import { SwitchGroupProps } from '../types';

/**
 * A set of switches, each turning one setting on or off. Pass `options` with `value` and
 * `onChange`, or `Switch` children for a custom layout. The group renders a plain `div`
 * with no role or name, so put it in a `fieldset` with a `legend`, or pass
 * `role="group"` and `aria-labelledby`, to name it for screen readers.
 */
const SwitchGroup = React.forwardRef<HTMLDivElement, SwitchGroupProps>(
  (
    {
      options,
      children,
      value = [],
      onChange,
      className,
      columns = 1,
      isDisabled,
      orientation = 'vertical',
      ...props
    },
    ref,
  ) => {
    const layoutClasses = useFormGroupLayout({ orientation, columns });

    const handleSwitchChange = useCallback(
      (id: string, isChecked: boolean) => {
        const addId = (id: string) => onChange?.([...value, id]);
        const removeId = (id: string) => onChange?.(value.filter(v => v !== id));

        if (isChecked) {
          addId(id);
        } else {
          removeId(id);
        }
      },
      [onChange, value],
    );

    return (
      <div ref={ref} className={cn('vero-switch-group', layoutClasses, className)} {...props}>
        {options
          ? options.map(option => (
              <Switch
                key={option.id}
                id={option.id}
                isChecked={value.includes(option.id)}
                isDisabled={isDisabled || option.isDisabled}
                label={option.label}
                onCheckedChange={checked => handleSwitchChange(option.id, checked)}
              />
            ))
          : children}
      </div>
    );
  },
);
SwitchGroup.displayName = 'SwitchGroup';

export { SwitchGroup };
