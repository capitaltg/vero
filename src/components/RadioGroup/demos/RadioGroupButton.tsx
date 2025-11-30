import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const RadioGroupButton = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <RadioGroup
        options={defaultOptions}
        value={value}
        onChange={setValue}
        variant="button"
        orientation="horizontal"
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
