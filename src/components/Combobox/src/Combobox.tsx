import { Button } from '@/components/Button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/Command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { cn } from '@/lib/utils';
import { getZIndex } from '@/lib/z-index';
import { Check, ChevronsUpDown } from 'lucide-react';
import React, { useState } from 'react';
import { ComboboxProps } from '../types';

const Combobox = React.forwardRef<HTMLButtonElement, ComboboxProps>(
  (
    {
      options,
      value,
      onChange,
      placeholder = 'Select an item...',
      searchPlaceholder = 'Search items...',
      emptyMessage = 'No items found',
      className,
      listClassName,
      zIndex,
      isDisabled = false,
      name,
      required,
      autoFocus,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const resolvedZIndex = getZIndex('dropdown', zIndex);

    return (
      <>
        {name || required ? (
          <input name={name} required={required} type="hidden" value={value} />
        ) : null}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              ref={ref}
              aria-expanded={open}
              autoFocus={autoFocus}
              className={cn(
                'w-full justify-between px-3',
                !value && 'text-muted-foreground',
                className,
              )}
              isDisabled={isDisabled}
              role="combobox"
              variant="input"
              {...props}
            >
              {value ? options.find(option => option.value === value)?.label : placeholder}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-[--radix-popover-trigger-width] px-0 py-0"
            zIndex={resolvedZIndex}
          >
            <Command>
              <CommandInput placeholder={searchPlaceholder} />
              <CommandList className={cn('max-h-[16.5rem] overflow-y-auto', listClassName)}>
                <CommandEmpty>{emptyMessage}</CommandEmpty>
                <CommandGroup>
                  {options.map(option => (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={(currentValue: string) => {
                        onChange(currentValue === value ? '' : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          'mr-2 h-4 w-4',
                          value === option.value ? 'opacity-100' : 'opacity-0',
                        )}
                      />
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </>
    );
  },
);
Combobox.displayName = 'Combobox';

export { Combobox };
