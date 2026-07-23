import { Button } from '@/components/Button';
import {
  Command,
  CommandForceEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
} from '@/components/Command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { useComposedTriggerLabel } from '@/hooks';
import { cn } from '@/lib/utils';
import { getZIndex } from '@/lib/z-index';
import { useComposedRefs } from '@radix-ui/react-compose-refs';
import { Check, ChevronsUpDown, X } from 'lucide-react';
import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
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
  const hasSelection = Boolean(displayItem || value);

  // Compose the trigger's accessible name from its associated label (e.g. from
  // FormItem) plus the displayed value, so a screen reader reads back the field
  // label AND the current selection instead of one overriding the other. A
  // native `<label for>` otherwise becomes the whole name of a <button> and
  // drops the value. See useComposedTriggerLabel for the full rationale. The
  // value span also carries a visually-hidden "selected" (below), so the
  // composed name reads "<label> <value> selected".
  const valueId = useId();
  const triggerLabelledBy = useComposedTriggerLabel(triggerRef, valueId, {
    'aria-label': props['aria-label'],
    'aria-labelledby': props['aria-labelledby'],
  });
  const composedRef = useComposedRefs(ref, triggerRef);

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
      if (option) {
        const label = getOptionLabel?.(option) ?? nextActive;
        // Distinguish the option that is the current committed selection from a
        // merely highlighted one, so a screen reader user knows which is chosen.
        const isChosen = Boolean(value) && getOptionValueFn(option) === value;
        setAnnouncement(`${label}, selected${isChosen ? ', current selection' : ''}`);
      }
    },
    [displayOptions, getOptionValueFn, getOptionLabel, value],
  );

  // Reset navigation tracking when the list closes.
  useEffect(() => {
    if (!open) {
      setActiveValue('');
      hasNavigatedRef.current = false;
    }
  }, [open]);

  // The status of the suggestion list when it opens or the results change: the
  // number of suggestions, how to browse them, and the first suggestion (so its
  // content is read even before the user arrows — e.g. a single result); or the
  // loading / error / empty-result message. Built as a plain string so the
  // effect below can depend on its VALUE. A navigation re-render produces the
  // same status string (the result set is unchanged), so it is not re-announced
  // on top of each option announcement — unlike depending on `displayOptions`
  // or the option accessors, whose identities change every render.
  let listStatus = '';
  if (open) {
    if (loading) listStatus = loadingMessage;
    else if (error) listStatus = errorMessage;
    else if (displayOptions.length > 0) {
      const count = displayOptions.length;
      const suggestions = count === 1 ? '1 suggestion' : `${count} suggestions`;
      const firstLabel = getOptionLabel?.(displayOptions[0]) ?? getOptionValueFn(displayOptions[0]);
      listStatus = `There ${count === 1 ? 'is' : 'are'} ${suggestions}, use the up and down arrow keys to browse. ${firstLabel}, 1 of ${count}.`;
    } else if (hasSearched) {
      listStatus = emptyMessage;
    }
  }

  useEffect(() => {
    if (listStatus) setAnnouncement(listStatus);
  }, [listStatus]);

  return (
    <>
      {name || required ? (
        <input name={name} required={required} type="hidden" value={value} />
      ) : null}
      <div className={cn('vero-autocomplete', 'relative w-full', className)}>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              ref={composedRef}
              aria-expanded={open}
              aria-haspopup="listbox"
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
              aria-labelledby={triggerLabelledBy}
              onKeyDown={e => {
                if ((e.key === 'Delete' || e.key === 'Backspace') && value && !open) {
                  e.preventDefault();
                  handleClear();
                } else if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && !open) {
                  // Open the list with the arrow keys, as the combobox pattern
                  // expects (Enter/Space already open it via the trigger).
                  e.preventDefault();
                  setOpen(true);
                }
                props.onKeyDown?.(e);
              }}
            >
              <span className="truncate" id={valueId}>
                {displayItem
                  ? renderValue
                    ? renderValue(displayItem)
                    : (getOptionLabel?.(displayItem) ?? value)
                  : value || placeholder}
                {/* Conveys, to a screen reader, that the text is the current
                    selection. Part of the value span so it is included whether
                    the name comes from aria-labelledby or the trigger content. */}
                {hasSelection ? <span className="sr-only"> selected</span> : null}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className={cn('min-w-[--radix-popover-trigger-width] px-0 py-0', popoverClassName)}
            zIndex={resolvedZIndex}
          >
            {/* `label` gives the search combobox a programmatic accessible name
                (cmdk renders a visually-hidden <label> the input points at via
                aria-labelledby); a placeholder alone is not a label. */}
            <Command
              label={placeholder}
              shouldFilter={false}
              value={activeValue}
              onValueChange={handleActiveChange}
            >
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
              {/* No CommandGroup wrapper: it adds a role="group" around the
                  options, and some screen readers (VoiceOver) announce that lone
                  group's position ("1 of 1") on every option. Rendering the
                  options directly in the listbox keeps each option's own
                  aria-posinset/aria-setsize the position that is read. */}
              {!loading && !error && displayOptions.length > 0 ? (
                <CommandList className={cn('max-h-[16.5rem] overflow-y-auto', listClassName)}>
                  {displayOptions.map((option, index) => {
                    const optValue = getOptionValueFn(option);
                    const isSelected = Boolean(optValue && value && optValue === value);

                    return (
                      <CommandItem
                        key={optValue || index}
                        aria-posinset={index + 1}
                        aria-setsize={displayOptions.length}
                        className="cursor-pointer"
                        value={optValue}
                        onSelect={handleSelect}
                      >
                        {renderOption ? (
                          renderOption(option, isSelected)
                        ) : (
                          <>
                            <Check
                              aria-hidden="true"
                              className={cn(
                                'mr-2 h-4 w-4',
                                isSelected ? 'opacity-100' : 'opacity-0',
                              )}
                            />
                            {getOptionLabel?.(option) ?? optValue}
                            {/* The check mark is the visual cue for the current
                                selection; expose it to assistive tech too. */}
                            {isSelected ? (
                              <span className="sr-only"> (current selection)</span>
                            ) : null}
                          </>
                        )}
                      </CommandItem>
                    );
                  })}
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
