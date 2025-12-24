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
import { extractOptionFields } from './utils';

function AutocompleteInner<T, K extends keyof T, L extends keyof T>(
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
    maxSuggestions = 10,
    debounceMs = 300,
    minSearch = 2,
    zIndex,
    isDisabled = false,
    name,
    required,
    autoFocus,
    renderOption,
    valueKey,
    labelKey,
    ...props
  }: AutocompleteProps<T, K, L>,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  const [open, setOpen] = useState(false);
  const resolvedZIndex = getZIndex('dropdown', zIndex);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [asyncOptions, setAsyncOptions] = useState<T[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

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
    if (normalizedInput.length > 0) {
      setHasSearched(true);
    }
    return options
      .filter(option => {
        const opt = option as Record<string, unknown>;
        const valueKeyStr = String(valueKey);
        const labelKeyStr = String(labelKey);
        return (
          (typeof opt[labelKeyStr] === 'string' &&
            String(opt[labelKeyStr]).toLowerCase().includes(normalizedInput)) ||
          (typeof opt[valueKeyStr] === 'string' &&
            String(opt[valueKeyStr]).toLowerCase().includes(normalizedInput))
        );
      })
      .slice(0, maxSuggestions);
  }, [loadOptions, options, inputValue, maxSuggestions, valueKey, labelKey]);

  // Combined options for rendering
  const displayOptions = loadOptions ? asyncOptions : filteredStaticOptions;

  // Convert value to string for comparison
  const valueAsString = useMemo(() => {
    if (value === '') return '';
    return String(value);
  }, [value]);

  const valueKeyStr = String(valueKey);

  const selectedOption = useMemo(
    () =>
      displayOptions.find(
        option => String((option as Record<string, unknown>)[valueKeyStr]) === valueAsString,
      ),
    [displayOptions, valueAsString, valueKeyStr],
  );

  const handleSelect = useCallback(
    (selectedValue: string) => {
      // Find the option and extract the typed value
      const option = displayOptions.find(
        opt => String((opt as Record<string, unknown>)[valueKeyStr]) === selectedValue,
      );
      if (option) {
        const typedValue = (option as Record<string, unknown>)[valueKeyStr] as T[K];
        onChange(typedValue);
      }
      setOpen(false);
      setInputValue('');
      setHasSearched(false);
    },
    [onChange, displayOptions, valueKeyStr],
  );

  const handleInputChange = useCallback(
    (input: string) => {
      setInputValue(input);

      if (input.length === 0) {
        setHasSearched(false);
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
    onChange('' as T[K]);
    setInputValue('');
    setAsyncOptions([]);
    setHasSearched(false);
  }, [onChange]);

  return (
    <>
      {name || required ? (
        <input
          name={name}
          required={required}
          type="hidden"
          value={value === '' ? '' : String(value)}
        />
      ) : null}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            aria-expanded={open}
            autoFocus={autoFocus}
            className={cn(
              'w-full justify-between px-3',
              !selectedOption && !value && 'text-muted-foreground',
              className,
            )}
            isDisabled={isDisabled}
            role="combobox"
            variant="input"
            {...props}
          >
            <span className="truncate">
              {(() => {
                if (selectedOption) {
                  const label = (selectedOption as Record<string, unknown>)[String(labelKey)];
                  if (typeof label === 'string') {
                    return label;
                  }
                  return value ? String(value) : placeholder;
                }
                return value ? String(value) : placeholder;
              })()}
            </span>
            <div className="flex items-center gap-1">
              {(value !== '' && value) || inputValue ? (
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
          className="w-[--radix-popover-trigger-width] px-0 py-0"
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
                  {displayOptions.map(option => {
                    const { value: optValue, label: optLabel } = extractOptionFields(
                      option,
                      valueKey,
                      labelKey,
                    );
                    const isSelected = Boolean(
                      optValue && value !== '' && optValue === valueAsString,
                    );

                    return (
                      <CommandItem
                        key={optValue}
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
                            {optLabel}
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

const Autocomplete = AutocompleteBase as unknown as <T, K extends keyof T, L extends keyof T>(
  props: AutocompleteProps<T, K, L> & { ref?: React.ForwardedRef<HTMLButtonElement> },
) => React.ReactElement;

export { Autocomplete };
