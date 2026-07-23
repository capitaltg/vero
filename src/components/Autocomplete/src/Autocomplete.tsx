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
  // The highlighted option in the open list. Controlled so cmdk fires
  // onValueChange (it only does so when its value is controlled), which lets us
  // announce the active option as the user navigates.
  const [activeValue, setActiveValue] = useState('');

  // Debounce timer reference
  const debounceTimer = useRef<NodeJS.Timeout>();

  // The trigger button, so focus can be returned to it when the (unmounting)
  // clear button is used.
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  // Whether the user has arrowed through the list since it opened / the results
  // last changed. cmdk auto-highlights the first option (and fires
  // onValueChange) on open, so this distinguishes that automatic highlight —
  // which should announce the suggestion count + instructions — from real
  // navigation, which announces the highlighted option.
  const hasNavigatedRef = useRef(false);

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
      // New search results are a fresh list; the next announcement should be the
      // updated count + instructions, not a navigated option.
      hasNavigatedRef.current = false;

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
    // Clearing removes the clear button from the DOM, so focus would otherwise
    // fall to <body>. Return it to the trigger. Deferred until after the
    // re-render that unmounts the clear button.
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, [onChange]);

  const showClear = !isDisabled && Boolean(value || inputValue);

  // Label spoken when the trigger is focused. Appends ", selected" so a screen
  // reader conveys that the text is the current selection, not just the value.
  const selectedLabel = displayItem ? (getOptionLabel?.(displayItem) ?? value) : value;
  const triggerAriaLabel = selectedLabel ? `${selectedLabel}, selected` : undefined;

  // Announce the highlighted option as the user arrows through the list. cmdk
  // keeps the combobox `aria-activedescendant` in sync, but VoiceOver does not
  // reliably speak activedescendant changes on comboboxes, so we mirror the
  // option into the live region. The automatic highlight cmdk applies on open is
  // ignored here (hasNavigatedRef) so it does not pre-empt the count + how-to
  // announcement; only genuine navigation speaks an option.
  const handleActiveChange = useCallback(
    (nextActive: string) => {
      // Ignore cmdk's automatic highlight on open (no navigation yet); leaving
      // the controlled value empty means nothing is pre-highlighted, so the
      // first arrow press lands on — and announces — the first option instead of
      // skipping it.
      if (!hasNavigatedRef.current) return;
      setActiveValue(nextActive);
      if (!nextActive) return;
      const option = displayOptions.find(
        opt => getOptionValueFn(opt).toLowerCase() === nextActive.toLowerCase(),
      );
      if (option) setAnnouncement(`${getOptionLabel?.(option) ?? nextActive}, selected`);
    },
    [displayOptions, getOptionValueFn, getOptionLabel],
  );

  // Reset navigation tracking when the list closes.
  useEffect(() => {
    if (!open) {
      setActiveValue('');
      hasNavigatedRef.current = false;
    }
  }, [open]);

  // Announce the state of the suggestion list when it opens or the results
  // change: the number of suggestions plus how to browse them, or the loading /
  // error / empty-result message. Individual options are announced separately as
  // the user navigates (handleActiveChange). This effect does not re-run on
  // navigation (its deps do not include the active option) and exits once the
  // list closes, so it never clobbers an option or selection announcement.
  useEffect(() => {
    if (!open) return;
    if (loading) setAnnouncement(loadingMessage);
    else if (error) setAnnouncement(errorMessage);
    else if (displayOptions.length > 0) {
      const count = displayOptions.length;
      const suggestions = count === 1 ? '1 suggestion' : `${count} suggestions`;
      setAnnouncement(
        `There ${count === 1 ? 'is' : 'are'} ${suggestions}, use the up and down arrow keys to browse.`,
      );
    } else if (hasSearched) {
      setAnnouncement(emptyMessage);
    }
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
              ref={el => {
                if (typeof ref === 'function') ref(el);
                else if (ref) ref.current = el;
                triggerRef.current = el;
              }}
              aria-expanded={open}
              aria-label={triggerAriaLabel}
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
            <Command shouldFilter={false} value={activeValue} onValueChange={handleActiveChange}>
              <CommandInput
                placeholder={placeholder}
                value={inputValue}
                onKeyDown={e => {
                  // Mark real navigation so the next active-option change is
                  // announced (vs. cmdk's automatic highlight on open).
                  if (
                    e.key === 'ArrowDown' ||
                    e.key === 'ArrowUp' ||
                    e.key === 'Home' ||
                    e.key === 'End' ||
                    e.key === 'PageUp' ||
                    e.key === 'PageDown'
                  ) {
                    hasNavigatedRef.current = true;
                  }
                }}
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
