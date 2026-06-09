import { Button } from '@/components/Button';
import {
  Command,
  CommandForceEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
} from '@/components/Command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { cn } from '@/lib/utils';
import { getZIndex } from '@/lib/z-index';
import { Check, ChevronsUpDown, X } from 'lucide-react';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AutocompleteProps } from '../types';

function AutocompleteInner<T>(
  {
    loadOptions,
    options = [],
    value,
    onChange,
    placeholder = 'Select an option...',
    loadingMessage = 'Loading...',
    emptyMessage = 'No results found',
    errorMessage = 'Failed to load options',
    className,
    listClassName,
    popoverClassName,
    maxSuggestions = 10,
    debounceMs = 300,
    minSearch = 2,
    zIndex,
    isDisabled = false,
    name,
    required,
    autoFocus,
    renderOption,
    renderValue,
    valueKey,
    labelKey,
    getOptionValue,
    ...props
  }: AutocompleteProps<T>,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  const [open, setOpen] = useState(false);
  const resolvedZIndex = getZIndex('dropdown', zIndex);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [asyncOptions, setAsyncOptions] = useState<T[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedItem, setSelectedItem] = useState<T | undefined>(undefined);

  // Debounce timer reference
  const debounceTimer = useRef<NodeJS.Timeout>();

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  // Clear selectedItem when value is externally cleared
  useEffect(() => {
    if (!value) setSelectedItem(undefined);
  }, [value]);

  const getOptionValueFn = useCallback(
    (option: T): string => {
      if (getOptionValue) return getOptionValue(option);
      if (valueKey) return String((option as Record<string, unknown>)[String(valueKey)] ?? '');
      return '';
    },
    [getOptionValue, valueKey],
  );

  const fetchOptions = useCallback(
    async (search: string) => {
      if (!loadOptions) return;

      try {
        setLoading(true);
        setError(false);
        const results = await loadOptions(search);
        setAsyncOptions(results.slice(0, maxSuggestions));
        setHasSearched(true);
      } catch (err) {
        console.error('Error fetching options:', err);
        setError(true);
        setAsyncOptions([]);
      } finally {
        setLoading(false);
      }
    },
    [loadOptions, maxSuggestions],
  );

  // Filter static options
  const filteredStaticOptions = useMemo(() => {
    if (loadOptions) return []; // Don't show static options in async mode

    const normalizedInput = inputValue.toLowerCase().trim();
    return options
      .filter(option => {
        if (normalizedInput.length === 0) return true;
        if (labelKey) {
          const label = (option as Record<string, unknown>)[String(labelKey)];
          if (typeof label === 'string' && label.toLowerCase().includes(normalizedInput))
            return true;
        }
        return getOptionValueFn(option).toLowerCase().includes(normalizedInput);
      })
      .slice(0, maxSuggestions);
  }, [loadOptions, options, inputValue, maxSuggestions, labelKey, getOptionValueFn]);

  // Combined options for rendering
  const displayOptions = loadOptions ? asyncOptions : filteredStaticOptions;

  // For externally-controlled values, look up the item from static options
  const displayItem = useMemo(() => {
    if (selectedItem) return selectedItem;
    if (!value) return undefined;
    if (!loadOptions) return options.find(o => getOptionValueFn(o) === value);
    return undefined;
  }, [selectedItem, value, loadOptions, options, getOptionValueFn]);

  const handleSelect = useCallback(
    (selectedValue: string) => {
      const option = displayOptions.find(opt => getOptionValueFn(opt) === selectedValue);
      if (option) {
        setSelectedItem(option);
        onChange(selectedValue, option);
      }
      setOpen(false);
      setInputValue('');
      setHasSearched(false);
    },
    [onChange, displayOptions, getOptionValueFn],
  );

  const handleInputChange = useCallback(
    (input: string) => {
      setInputValue(input);

      if (input.length === 0) {
        setHasSearched(false);
      } else if (!loadOptions) {
        setHasSearched(true);
      }

      // Clear existing timer
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }

      // Handle async search
      if (loadOptions && input.length >= minSearch) {
        debounceTimer.current = setTimeout(() => {
          fetchOptions(input);
        }, debounceMs);
      } else if (loadOptions && input.length === 0) {
        setAsyncOptions([]);
      }
    },
    [loadOptions, minSearch, debounceMs, fetchOptions],
  );

  const handleClear = useCallback(() => {
    onChange('', undefined);
    setSelectedItem(undefined);
    setInputValue('');
    setAsyncOptions([]);
    setHasSearched(false);
  }, [onChange]);

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
            <span className="truncate">
              {displayItem
                ? renderValue
                  ? renderValue(displayItem)
                  : labelKey
                    ? String((displayItem as Record<string, unknown>)[String(labelKey)] ?? value)
                    : value
                : value || placeholder}
            </span>
            <div className="flex items-center gap-1">
              {value || inputValue ? (
                <X
                  className="h-4 w-4 opacity-50 hover:opacity-100"
                  onClick={e => {
                    e.stopPropagation();
                    handleClear();
                  }}
                />
              ) : null}
              <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className={cn('min-w-[--radix-popover-trigger-width] px-0 py-0', popoverClassName)}
          zIndex={resolvedZIndex}
        >
          <Command shouldFilter={false}>
            <CommandInput
              placeholder={placeholder}
              value={inputValue}
              onValueChange={handleInputChange}
            />
            {loading ? <CommandLoading>{loadingMessage}</CommandLoading> : null}
            {!loading && error ? <CommandForceEmpty>{errorMessage}</CommandForceEmpty> : null}
            {!loading && !error && hasSearched && displayOptions.length === 0 ? (
              <CommandForceEmpty>{emptyMessage}</CommandForceEmpty>
            ) : null}
            {!loading && !error && displayOptions.length > 0 ? (
              <CommandList className={cn('max-h-[16.5rem] overflow-y-auto', listClassName)}>
                <CommandGroup>
                  {displayOptions.map((option, index) => {
                    const optValue = getOptionValueFn(option);
                    const isSelected = Boolean(optValue && value && optValue === value);

                    return (
                      <CommandItem
                        key={optValue || index}
                        className="cursor-pointer"
                        value={optValue}
                        onSelect={handleSelect}
                      >
                        {renderOption ? (
                          renderOption(option, isSelected)
                        ) : (
                          <>
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                isSelected ? 'opacity-100' : 'opacity-0',
                              )}
                            />
                            {labelKey
                              ? String(
                                  (option as Record<string, unknown>)[String(labelKey)] ?? optValue,
                                )
                              : optValue}
                          </>
                        )}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </CommandList>
            ) : null}
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
}

const AutocompleteBase = React.forwardRef(AutocompleteInner);
AutocompleteBase.displayName = 'Autocomplete';

const Autocomplete = AutocompleteBase as unknown as <T>(
  props: AutocompleteProps<T> & { ref?: React.ForwardedRef<HTMLButtonElement> },
) => React.ReactElement;

export { Autocomplete };
