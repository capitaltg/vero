import { cn } from '@/lib/utils';
import { getZIndex } from '@/lib/z-index';
import { Check, ChevronsUpDown, X } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../../Button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../../Command';
import { Popover, PopoverContent, PopoverTrigger } from '../../Popover';
import { MultiSelectProps } from '../types';

const MultiSelect = React.forwardRef<HTMLButtonElement, MultiSelectProps>(
  (
    {
      options,
      value,
      onChange,
      placeholder = 'Select items...',
      searchPlaceholder = 'Search items...',
      emptyMessage = 'No items found',
      className,
      listClassName,
      zIndex,
      isDisabled = false,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const resolvedZIndex = getZIndex('dropdown', zIndex);
    const selectedLabels = value.map(v => options.find(opt => opt.value === v)?.label || v);

    const renderTriggerContent = () => {
      if (value.length === 0) {
        return <span className="self-center text-muted-foreground">{placeholder}</span>;
      }

      return (
        <div className="flex flex-1 flex-wrap gap-1">
          {selectedLabels.map((label, index) => (
            <div
              key={value[index]}
              className="flex items-center gap-1 rounded-sm bg-secondary px-2 py-0.5 text-sm text-secondary-foreground"
            >
              {label}
              <X
                role="button"
                aria-label={`Remove ${label}`}
                className="h-3 w-3 cursor-pointer opacity-50 hover:opacity-100"
                strokeWidth={3}
                onClick={evt => {
                  evt.stopPropagation();
                  onChange(value.filter((_, i) => i !== index));
                }}
              />
            </div>
          ))}
        </div>
      );
    };

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="input"
            role="combobox"
            aria-expanded={open}
            className={cn(
              'flex h-auto min-h-[2.5rem] w-full items-stretch justify-between px-3 py-1.5',
              className,
            )}
            isDisabled={isDisabled}
            {...props}
          >
            <div className="flex flex-1 text-left">{renderTriggerContent()}</div>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 self-center opacity-50" />
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
                    onSelect={() => {
                      onChange(
                        value.includes(option.value)
                          ? value.filter(v => v !== option.value)
                          : [...value, option.value],
                      );
                    }}
                  >
                    <div className="flex items-center">
                      <div
                        className={cn(
                          'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary-400',
                          value.includes(option.value) ? 'bg-primary-400 text-white' : 'opacity-50',
                        )}
                      >
                        {value.includes(option.value) ? (
                          <Check className="h-3 w-3" strokeWidth={3} />
                        ) : null}
                      </div>
                      {option.label}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
);
MultiSelect.displayName = 'MultiSelect';

export { MultiSelect };
