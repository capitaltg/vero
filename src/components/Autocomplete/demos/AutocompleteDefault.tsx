import { mockSearchLibraries } from '@/mocks';
import { useState } from 'react';
import { Autocomplete } from '../src/Autocomplete';
import { AutocompleteProps } from '../types';

interface AutocompleteOption {
  value: string;
  label: string;
}

export const AutocompleteDefault = ({
  value: initialValue = '',
  ...args
}: AutocompleteProps<AutocompleteOption, 'value', 'label'>) => {
  const [value, setValue] = useState<string>(initialValue);
  return (
    <div className="space-y-4">
      <Autocomplete<AutocompleteOption, 'value', 'label'>
        {...args}
        labelKey="label"
        loadOptions={mockSearchLibraries}
        placeholder="Search..."
        value={value}
        valueKey="value"
        onChange={newValue => setValue(newValue)}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
