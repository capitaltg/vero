import { useFormGroupLayout } from '@/hooks';
import { cn } from '@/lib/utils';
import React, { useCallback } from 'react';
import { Switch } from '../../Switch';
import { SwitchGroupProps } from '../types';

const SwitchGroup = React.forwardRef<HTMLDivElement, SwitchGroupProps>(
  (
    {
      options,
      value,
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
        const addId = (id: string) => onChange([...value, id]);
        const removeId = (id: string) => onChange(value.filter(v => v !== id));

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
        {options.map(option => (
          <Switch
            key={option.id}
            id={option.id}
            isChecked={value.includes(option.id)}
            isDisabled={isDisabled || option.isDisabled}
            label={option.label}
            onCheckedChange={checked => handleSwitchChange(option.id, checked)}
          />
        ))}
      </div>
    );
  },
);
SwitchGroup.displayName = 'SwitchGroup';

export { SwitchGroup };
