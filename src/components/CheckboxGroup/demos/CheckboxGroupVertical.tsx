import { useState } from 'react';
import { CheckboxGroup } from '../src/CheckboxGroup';

const options = [
  { id: 'option1', label: 'Option 1' },
  { id: 'option2', label: 'Option 2' },
  { id: 'option3', label: 'Option 3' },
];

export const CheckboxGroupVertical = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <CheckboxGroup options={options} orientation="vertical" value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected values: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
