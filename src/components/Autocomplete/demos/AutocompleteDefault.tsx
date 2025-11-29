import { useState } from 'react';
import { Autocomplete } from '../src/Autocomplete';
import { AutocompleteProps } from '../types';
import { mockSearchLibraries } from '@/mocks';

export const AutocompleteDefault = ({ value: initialValue = '', ...args }: AutocompleteProps) => {
  const [value, setValue] = useState<string>(initialValue);
  return (
    <div className="space-y-4">
      <Autocomplete
        {...args}
        loadOptions={mockSearchLibraries}
        value={value}
        onChange={setValue}
        placeholder="Search..."
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
