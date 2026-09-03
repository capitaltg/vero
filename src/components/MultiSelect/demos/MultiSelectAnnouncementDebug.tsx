import { A11yDebugHarness } from '@/stories/A11yDebugHarness';
import { useState } from 'react';
import { MultiSelect } from '../src/MultiSelect';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

/**
 * Debug harness for the MultiSelect's screen-reader output. Focus the trigger
 * to confirm its accessible name reads back the field label + the selected
 * values, and watch focus move across the remove-chip buttons and trigger as
 * you add and remove selections.
 */
export const MultiSelectAnnouncementDebug = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <A11yDebugHarness>
      <MultiSelect
        options={options}
        placeholder="Select frameworks..."
        value={value}
        onChange={setValue}
      />
      {/* aria-hidden so the screen reader only reads the MultiSelect itself. */}
      <p aria-hidden="true" className="text-sm text-muted-foreground">
        Selected values:{' '}
        <span className="font-medium">{value.length > 0 ? value.join(', ') : 'none'}</span>
      </p>
    </A11yDebugHarness>
  );
};
