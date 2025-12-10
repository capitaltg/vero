import { useState } from 'react';
import { MultiSelect } from '../src/MultiSelect';
import { MultiSelectProps } from '../types';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

export const MultiSelectCustomPlaceholders = ({
  value: initialValue = [],
  ...args
}: Partial<MultiSelectProps>) => {
  const [value, setValue] = useState<string[]>(initialValue);
  return (
    <div className="space-y-4">
      <MultiSelect
        emptyMessage="No frameworks found"
        options={options}
        placeholder="Choose your frameworks"
        searchPlaceholder="Search frameworks..."
        value={value}
        onChange={setValue}
        {...args}
      />
      <p className="text-sm text-muted-foreground">
        Selected values: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
