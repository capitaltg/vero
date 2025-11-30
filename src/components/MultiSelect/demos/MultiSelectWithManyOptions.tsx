import { useState } from 'react';
import { MultiSelect } from '../src/MultiSelect';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
  { value: 'next', label: 'Next.js' },
  { value: 'nuxt', label: 'Nuxt.js' },
  { value: 'gatsby', label: 'Gatsby' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
];

export const MultiSelectWithManyOptions = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <MultiSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Select frameworks..."
      />
      <p className="text-sm text-muted-foreground">
        Selected values: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
