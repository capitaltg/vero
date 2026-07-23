import { A11yDebugHarness } from '@/stories/A11yDebugHarness';
import { useState } from 'react';
import { Combobox } from '../src/Combobox';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

/**
 * Debug harness for the Combobox's screen-reader output. Focus the trigger to
 * confirm its accessible name reads back the field label + the selected value,
 * and watch focus/live-region events as you open and choose an option.
 */
export const ComboboxAnnouncementDebug = () => {
  const [value, setValue] = useState('');
  return (
    <A11yDebugHarness>
      <Combobox
        options={options}
        placeholder="Select framework..."
        value={value}
        onChange={setValue}
      />
      {/* aria-hidden so the screen reader only reads the Combobox itself. */}
      <p aria-hidden="true" className="text-sm text-muted-foreground">
        Selected value: <span className="font-medium">{value || 'none'}</span>
      </p>
    </A11yDebugHarness>
  );
};
