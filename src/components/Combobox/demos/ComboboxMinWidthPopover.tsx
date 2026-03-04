import { useState } from 'react';
import { Combobox } from '../src/Combobox';
import { ComboboxProps } from '../types';

const options = [
  { value: '1', label: 'Short' },
  { value: '2', label: 'A much longer option label that would overflow' },
  { value: '3', label: 'Another very long label to demonstrate min-width behavior' },
  { value: '4', label: 'Medium length' },
];

export const ComboboxMinWidthPopover = (args: Partial<ComboboxProps>) => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <Combobox
        {...args}
        className="w-72"
        options={options}
        placeholder="Select..."
        popoverClassName="min-w-[50rem]"
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
