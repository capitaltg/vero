import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';

const optionsWithDescription = [
  {
    value: 'option1',
    label: 'Option 1',
    description: 'This is a description for option 1 that provides additional context.',
  },
  {
    value: 'option2',
    label: 'Option 2',
    description: 'This is a description for option 2 that provides additional context.',
  },
  {
    value: 'option3',
    label: 'Option 3',
    description: 'This is a description for option 3 that provides additional context.',
  },
];

export const RadioGroupWithDescription = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <RadioGroup options={optionsWithDescription} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
