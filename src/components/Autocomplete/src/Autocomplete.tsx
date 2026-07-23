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

// Delay before the result-set status is announced to screen readers. Debounced
// so a burst of typing queues only the final message (like a typeahead backend
// query) instead of one announcement per keystroke.
const ANNOUNCE_DEBOUNCE_MS = 500;

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
    getOptionValue,
    getOptionLabel,
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
  // Single message read out to screen readers via a polite live region.
  const [announcement, setAnnouncement] = useState('');

  // Debounce timer reference
  const debounceTimer = useRef<NodeJS.Timeout>();

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, []);

  // Clear selectedItem when value is externally cleared
  useEffect(() => {
    if (!value) setSelectedItem(undefined);
  }, [value]);

  const getOptionValueFn = useCallback(
    (option: T): string => (getOptionValue ? getOptionValue(option) : ''),
    [getOptionValue],
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
        const searchTarget = getOptionLabel
          ? getOptionLabel(option).toLowerCase()
          : getOptionValueFn(option).toLowerCase();
        return searchTarget.includes(normalizedInput);
      })
      .slice(0, maxSuggestions);
  }, [loadOptions, options, inputValue, maxSuggestions, getOptionLabel, getOptionValueFn]);

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
        // Announce the chosen value immediately (not debounced): the popover
        // closes on select, so the result-set status goes silent and returning
        // focus to the trigger is not a reliable announcement across screen
        // readers.
        setAnnouncement(`${getOptionLabel?.(option) ?? selectedValue} selected`);
        onChange(selectedValue, option);
      }
      setOpen(false);
      setInputValue('');
      setHasSearched(false);
    },
    [onChange, displayOptions, getOptionValueFn, getOptionLabel],
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
      if (debounceTimer.current) clearTimeout(debounceTimer.current);

      // Handle async search
      if (loadOptions && input.length >= minSearch) {
        debounceTimer.current = setTimeout(() => fetchOptions(input), debounceMs);
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
    setAnnouncement('');
  }, [onChange]);

  const showClear = !isDisabled && Boolean(value || inputValue);

  // Announce the result-set status to screen readers when the list is open.
  // Screen readers otherwise only speak items via aria-activedescendant while
  // arrowing through the list, so a single result or an empty result set would
  // pass silently. Debounced so a burst of typing queues only the final message
  // rather than one announcement per keystroke. A selection announcement (set
  // synchronously in handleSelect) is not clobbered here because this effect
  // exits early once the list has closed.
  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      if (loading) {
        setAnnouncement(loadingMessage);
      } else if (error) {
        setAnnouncement(errorMessage);
      } else if (hasSearched && displayOptions.length === 0) {
        setAnnouncement(emptyMessage);
      } else if (displayOptions.length > 0) {
        const count = displayOptions.length;
        setAnnouncement(`${count} ${count === 1 ? 'result' : 'results'} available`);
      } else {
        setAnnouncement('');
      }
    }, ANNOUNCE_DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [
    open,
    loading,
    error,
    hasSearched,
    displayOptions.length,
    loadingMessage,
    errorMessage,
    emptyMessage,
  ]);

  return (
    <>
      {name || required ? (
        <input name={name} required={required} type="hidden" value={value} />
      ) : null}
      <div className={cn('vero-autocomplete', 'relative w-full', className)}>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              ref={ref}
              aria-expanded={open}
              autoFocus={autoFocus}
              className={cn(
                'w-full justify-start px-3 text-left font-normal',
                showClear ? 'pr-16' : 'pr-10',
                !value && 'text-muted-foreground',
              )}
              data-component="autocomplete"
              isDisabled={isDisabled}
              variant="input"
              {...props}
              onKeyDown={e => {
                if ((e.key === 'Delete' || e.key === 'Backspace') && value && !open) {
                  e.preventDefault();
                  handleClear();
                }
                props.onKeyDown?.(e);
              }}
            >
              <span className="truncate">
                {displayItem
                  ? renderValue
                    ? renderValue(displayItem)
                    : (getOptionLabel?.(displayItem) ?? value)
                  : value || placeholder}
              </span>
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
                              {getOptionLabel?.(option) ?? optValue}
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
        {showClear ? (
          <button
            aria-label="Clear"
            className="absolute right-8 top-1/2 -translate-y-1/2 rounded p-0.5 opacity-50
              hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
            type="button"
            onClick={handleClear}
          >
            <X aria-hidden="true" className="h-4 w-4" />
          </button>
        ) : null}
        <ChevronsUpDown
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 shrink-0 -translate-y-1/2
            opacity-50"
        />
        <div aria-live="polite" className="sr-only" role="status">
          {announcement}
        </div>
      </div>
    </>
  );
}

const AutocompleteBase = React.forwardRef(AutocompleteInner);
AutocompleteBase.displayName = 'Autocomplete';

const Autocomplete = AutocompleteBase as unknown as <T>(
  props: AutocompleteProps<T> & { ref?: React.ForwardedRef<HTMLButtonElement> },
) => React.ReactElement;

export { Autocomplete };
