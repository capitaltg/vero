import { cn } from '@/lib/utils';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as React from 'react';
import type { SelectProps } from '../types';
import { SelectContent } from './SelectContent';
import { SelectItem } from './SelectItem';
import { SelectTrigger } from './SelectTrigger';

const SelectRoot = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    { options, value, onChange, placeholder = 'Select an option', className, isDisabled, ...props },
    ref,
  ) => {
    return (
      <SelectRoot value={value} onValueChange={onChange}>
        <SelectTrigger
          ref={ref}
          className={cn('w-full justify-between', !value && 'text-muted-foreground', className)}
          isDisabled={isDisabled}
          {...props}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
    );
  },
);
Select.displayName = 'Select';

export { Select, SelectGroup, SelectRoot, SelectValue, Select as SingleSelect };
