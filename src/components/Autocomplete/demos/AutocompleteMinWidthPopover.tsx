import { useState } from 'react';
import { Autocomplete } from '../src/Autocomplete';
import { AutocompleteProps } from '../types';

interface AutocompleteOption {
  value: string;
  label: string;
}

const options: AutocompleteOption[] = [
  { value: '1', label: 'Short' },
  { value: '2', label: 'A much longer option label that would overflow' },
  { value: '3', label: 'Another very long label to demonstrate min-width behavior' },
  { value: '4', label: 'Medium length' },
];

export const AutocompleteMinWidthPopover = (
  args: Partial<AutocompleteProps<AutocompleteOption, 'value', 'label'>>,
) => {
  const [value, setValue] = useState<string>('');
  return (
    <div className="space-y-4">
      <Autocomplete<AutocompleteOption, 'value', 'label'>
        {...args}
        className="w-72"
        labelKey="label"
        options={options}
        placeholder="Select..."
        popoverClassName="min-w-[50rem]"
        value={value}
        valueKey="value"
        onChange={newValue => setValue(newValue)}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
