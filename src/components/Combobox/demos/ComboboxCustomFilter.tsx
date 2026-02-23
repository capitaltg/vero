import { useState } from 'react';
import { Combobox } from '../src/Combobox';
import { ComboboxProps } from '../types';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'apricot', label: 'Apricot' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'blackberry', label: 'Blackberry' },
];

/**
 * Custom filter: only match when the option value starts with the search string (case-insensitive).
 * Compare to default behavior which matches substring anywhere in both value and label.
 */
const filterStartsWith = (value: string, search: string) => {
  const s = search.toLowerCase().trim();
  if (s.length === 0) return 1;
  return value.toLowerCase().startsWith(s) ? 1 : 0;
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
        filter={filterStartsWith}
        options={options}
        placeholder="Select fruit..."
        searchPlaceholder="Type to filter (must match start of name)..."
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
