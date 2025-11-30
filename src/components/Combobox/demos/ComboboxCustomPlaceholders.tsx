import { useState } from 'react';
import { Combobox } from '../src/Combobox';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

export const ComboboxCustomPlaceholders = () => {
  const [value, setValue] = useState<string>('');
  return (
    <div className="space-y-4">
      <Combobox
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose your framework"
        searchPlaceholder="Search frameworks..."
        emptyMessage="No frameworks found"
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
