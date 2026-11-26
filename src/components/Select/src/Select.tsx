import { cn } from '@/lib/utils';
import { getZIndex } from '@/lib/z-index';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as React from 'react';
import type { SelectProps, SelectRootProps, SelectValueProps } from '../types';
import { SelectContent } from './SelectContent';
import { SelectItem } from './SelectItem';
import { SelectTrigger } from './SelectTrigger';

// SelectRoot and SelectValue pass everything through to Radix. They're thin components, not
// re-exports, so Storybook can read their props for the docs.

/**
 * Holds the state for a select built from the parts. Put a `SelectTrigger` and a
 * `SelectContent` inside it. It manages its own value unless you pass `value` and
 * `onValueChange`.
 */
const SelectRoot = (props: SelectRootProps) => <SelectPrimitive.Root {...props} />;
SelectRoot.displayName = 'SelectRoot';

/** Groups related items under a `SelectLabel`. */
const SelectGroup = SelectPrimitive.Group;

/**
 * Shows the chosen item's text inside `SelectTrigger`, or the placeholder when nothing is
 * chosen.
 */
const SelectValue = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Value>,
  SelectValueProps
>((props, ref) => <SelectPrimitive.Value ref={ref} {...props} />);
SelectValue.displayName = 'SelectValue';

/**
 * A dropdown for choosing one option from a list. The trigger is a combobox button that opens a
 * listbox, so it works with the keyboard and screen readers. Pass `options`, `value` and
 * `onChange`. To group options, add separators or disable some options, build it from the
 * parts instead, starting with `SelectRoot`.
 */
const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      options,
      value,
      onChange,
      placeholder = 'Select an option',
      className,
      zIndex,
      isDisabled,
      required,
      name,
      autoFocus,
      ...props
    },
    ref,
  ) => {
    const resolvedZIndex = getZIndex('dropdown', zIndex);

    return (
      <SelectRoot name={name} required={required} value={value} onValueChange={onChange}>
        <SelectTrigger
          ref={ref}
          autoFocus={autoFocus}
          className={cn('w-full justify-between', className)}
          hasValue={!!value}
          isDisabled={isDisabled}
          {...props}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent zIndex={resolvedZIndex}>
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

/** @deprecated `SingleSelect` is an older name for `Select`. Use `Select` instead. */
const SingleSelect = Select;

export { Select, SelectGroup, SelectRoot, SelectValue, SingleSelect };
