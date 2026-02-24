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

export const ComboboxFiltering = ({
  value: initialValue = '',
  ...args
}: Partial<ComboboxProps>) => {
  const [value, setValue] = useState<string>(initialValue);
  return (
    <div className="space-y-4">
      <Combobox
        {...args}
        options={options}
        placeholder="Select country..."
        searchPlaceholder="Search by name or code..."
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Selected value (programmatic):{' '}
        <code className="rounded bg-muted px-1">{value || 'none'}</code>
      </p>
      <p className="text-sm text-muted-foreground">
        Try searching by label (e.g. &quot;United&quot;) or by value (e.g. &quot;US&quot;). The
        stored value is always the option&apos;s <code>value</code> (e.g. US, GB).
      </p>
    </div>
  );
};
