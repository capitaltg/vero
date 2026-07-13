import { useAriaDisabled } from '@/hooks';
import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { getZIndex } from '@/lib/z-index';
import { Check, ChevronsUpDown, X } from 'lucide-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { buttonVariants } from '../../Button/constants';
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

const MultiSelect = React.forwardRef<HTMLDivElement, MultiSelectProps>(
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
      popoverClassName,
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
    const selectedLabels = value.map(v => options.find(opt => opt.value === v)?.label || v);
    const disabledProps = useAriaDisabled({ isDisabled });
    const triggerRef = useRef<HTMLDivElement | null>(null);
    const removeButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);

    // Handle autoFocus
    useEffect(() => {
      if (autoFocus && triggerRef.current) {
        triggerRef.current.focus();
      }
    }, [autoFocus]);

    // Remove a chip and shift focus to adjacent chip or trigger
    const handleRemove = useCallback(
      (index: number) => {
        const newValue = value.filter((_, i) => i !== index);
        onChange(newValue);
        // Defer focus until after React re-renders the chip list
        requestAnimationFrame(() => {
          if (newValue.length === 0) {
            triggerRef.current?.focus();
          } else if (index < newValue.length) {
            // A chip still exists at the same position (next chip shifted here)
            removeButtonRefs.current[index]?.focus();
          } else {
            // Removed the last chip; focus the new last chip
            removeButtonRefs.current[newValue.length - 1]?.focus();
          }
        });
      },
      [value, onChange],
    );

    // Close popover on Escape or Tab while focus is inside the dropdown
    const handleCommandKeyDown = useCallback((evt: React.KeyboardEvent<HTMLDivElement>) => {
      if (evt.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      } else if (evt.key === 'Tab') {
        // Close popover but allow Tab to move focus naturally
        setOpen(false);
      }
    }, []);

    const renderTriggerContent = () => {
      if (value.length === 0) {
        return <span className="self-center text-muted-foreground">{placeholder}</span>;
      }

      return (
        <div className="flex flex-1 flex-wrap gap-1">
          {selectedLabels.map((label, index) => (
            <div
              key={value[index]}
              // hover:text-secondary-foreground prevents the parent trigger's
              // hover:text-accent-foreground from changing chip text to blue (contrast fix)
              className="flex items-center gap-1 rounded-sm bg-secondary px-2 py-0.5 text-sm
                text-secondary-foreground hover:text-secondary-foreground"
            >
              {label}
              <button
                ref={el => {
                  removeButtonRefs.current[index] = el;
                }}
                aria-label={`Remove ${label}`}
                className="ml-0.5 rounded-full opacity-50 transition-opacity hover:opacity-100
                  focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary-400
                  focus:ring-offset-1"
                type="button"
                onClick={evt => {
                  evt.stopPropagation();
                  handleRemove(index);
                }}
                onKeyDown={evt => {
                  if (evt.key === 'Enter' || evt.key === ' ') {
                    evt.preventDefault();
                    evt.stopPropagation();
                    handleRemove(index);
                  }
                }}
              >
                <X className="h-3 w-3" strokeWidth={3} />
              </button>
            </div>
          ))}
        </div>
      );
    };

    const handleTriggerKeyDown = (evt: React.KeyboardEvent<HTMLDivElement>) => {
      if (isDisabled) {
        if (evt.key === 'Tab') {
          return;
        }
        if (evt.key === 'Escape') {
          return;
        }
        evt.preventDefault();
        evt.stopPropagation();
        return;
      }

      if (evt.key === 'Enter' || evt.key === ' ') {
        evt.preventDefault();
        setOpen(!open);
      } else if (evt.key === 'Escape' && open) {
        evt.preventDefault();
        setOpen(false);
      }
    };

    return (
      <>
        {name || required ? (
          <input name={name} required={required} type="hidden" value={value.join(',')} />
        ) : null}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            {/* Using div instead of button to avoid invalid button nesting (remove buttons are inside) */}
            <div
              ref={el => {
                // Handle both refs
                if (typeof ref === 'function') {
                  ref(el);
                } else if (ref) {
                  ref.current = el;
                }
                triggerRef.current = el;
              }}
              aria-expanded={open}
              aria-haspopup="listbox"
              className={cn(
                'vero-multi-select',
                styles.button,
                buttonVariants({ variant: 'input' }),
                styles.focusRing,
                'flex h-auto min-h-[2.5rem] w-full items-stretch justify-between px-3 py-1.5',
                className,
              )}
              data-component="multi-select"
              role="button"
              tabIndex={0}
              onClick={evt => {
                evt.stopPropagation();
                if (!isDisabled) {
                  setOpen(!open);
                }
              }}
              onKeyDown={handleTriggerKeyDown}
              {...disabledProps}
              {...props}
            >
              <div className="flex flex-1 text-left">{renderTriggerContent()}</div>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 self-center opacity-50" />
            </div>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className={cn('min-w-[--radix-popover-trigger-width] px-0 py-0', popoverClassName)}
            zIndex={resolvedZIndex}
          >
            <Command onKeyDown={handleCommandKeyDown}>
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
                            `mr-2 flex h-4 w-4 items-center justify-center rounded-sm border
                            border-primary-400`,
                            value.includes(option.value)
                              ? 'bg-primary-400 text-white'
                              : 'opacity-50',
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
      </>
    );
  },
);
MultiSelect.displayName = 'MultiSelect';

export { MultiSelect };
