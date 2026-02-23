import { useState } from 'react';
import { Combobox } from '../src/Combobox';
import { ComboboxProps } from '../types';

const options = [
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'MX', label: 'Mexico' },
  { value: 'AU', label: 'Australia' },
];

/**
 * Custom filter: only show an option when the search exactly matches its value (case-insensitive).
 * Empty search shows all options. Compare to the default filter, which matches substring anywhere
 * in both value and label (e.g. "uni" matches United States).
 */
const filterExactMatch = (value: string, search: string) => {
  const s = search.toLowerCase().trim();
  if (s.length === 0) return 1;
  return value.toLowerCase() === s ? 1 : 0;
};

export const ComboboxCustomFilter = ({
  value: initialValue = '',
  ...args
}: Partial<ComboboxProps>) => {
  const [value, setValue] = useState<string>(initialValue);
  return (
    <div className="space-y-4">
      <Combobox
        {...args}
        filter={filterExactMatch}
        options={options}
        placeholder="Select country..."
        searchPlaceholder="Type exact code (e.g. US, CA, GB)..."
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Selected value (programmatic):{' '}
        <code className="rounded bg-muted px-1">{value || 'none'}</code>
      </p>
      <p className="text-sm text-muted-foreground">
        This example uses a custom filter: only the option whose value <em>exactly</em> matches your
        search is shown (e.g. type &quot;US&quot; to see United States). Leave the search empty to
        see all options.
      </p>
    </div>
  );
};
