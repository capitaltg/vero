import { useState } from 'react';
import { Select } from '../src/Select';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'mango', label: 'Mango' },
];

export const SelectDisabled = () => {
  const [value, setValue] = useState('orange');
  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-sm font-medium text-muted-foreground">Disabled with placeholder</p>
        <Select
          isDisabled
          options={options}
          placeholder="Select a fruit..."
          value=""
          onChange={setValue}
        />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-muted-foreground">Disabled with value</p>
        <Select
          isDisabled
          options={options}
          placeholder="Select a fruit..."
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
};
