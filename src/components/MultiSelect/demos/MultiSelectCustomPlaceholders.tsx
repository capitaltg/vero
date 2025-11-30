import { useState } from 'react';
import { MultiSelect } from '../src/MultiSelect';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

export const MultiSelectCustomPlaceholders = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <MultiSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose your frameworks"
        searchPlaceholder="Search frameworks..."
        emptyMessage="No frameworks found"
      />
      <p className="text-sm text-muted-foreground">
        Selected values: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
