import { useState } from 'react';
import { CheckboxGroup } from '../src/CheckboxGroup';

const optionsWithDescription = [
  {
    id: 'option1',
    label: 'Option 1',
    description: 'This is a description for option 1 that provides additional context.',
  },
  {
    id: 'option2',
    label: 'Option 2',
    description: 'This is a description for option 2 that provides additional context.',
  },
  {
    id: 'option3',
    label: 'Option 3',
    description: 'This is a description for option 3 that provides additional context.',
  },
  {
    id: 'option4',
    label: 'Option 4',
    description: 'This is a description for option 4 that provides additional context.',
  },
];

export const CheckboxGroupWithDescription = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <CheckboxGroup options={optionsWithDescription} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected IDs: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
