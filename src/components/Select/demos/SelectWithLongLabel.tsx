import { useState } from 'react';
import { Select } from '../src/Select';

const options = [
  { value: 'short', label: 'Short option' },
  { value: 'medium', label: 'This is a medium length option label' },
  {
    value: 'very-long',
    label:
      'This is an extremely long option label that should demonstrate text truncation when selected in the Select component trigger button',
  },
  {
    value: 'super-long',
    label:
      'This is a super extremely long option label that contains multiple sentences and should definitely demonstrate text truncation with ellipsis when selected in the Select component trigger button. The text should be cut off with an ellipsis to prevent overflow.',
  },
];

export const SelectWithLongLabel = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <div className="max-w-md">
        <Select
          options={options}
          placeholder="Select an option with a long label..."
          value={value}
          onChange={setValue}
        />
      </div>
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
      <p className="text-sm text-muted-foreground">
        Try selecting one of the longer options to see how the text truncates with an ellipsis in
        the trigger button.
      </p>
    </div>
  );
};
