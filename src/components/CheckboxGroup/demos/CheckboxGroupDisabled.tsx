import { useState } from 'react';
import { CheckboxGroup } from '../src/CheckboxGroup';

const options = [
  { id: 'option1', label: 'Option 1' },
  { id: 'option2', label: 'Option 2' },
  { id: 'option3', label: 'Option 3' },
  { id: 'option4', label: 'Option 4' },
];

export const CheckboxGroupDisabled = () => {
  const [value, setValue] = useState<string[]>(['option2']);
  return <CheckboxGroup isDisabled options={options} value={value} onChange={setValue} />;
};
