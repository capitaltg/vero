import { useState } from 'react';
import { SwitchGroup } from '../src/SwitchGroup';

const options = [
  { id: 'notifications', label: 'Enable notifications' },
  { id: 'emails', label: 'Receive emails' },
  { id: 'marketing', label: 'Marketing communications' },
  { id: 'updates', label: 'Auto-updates' },
  { id: 'backup', label: 'Automatic backup' },
  { id: 'location', label: 'Location tracking (disabled)', isDisabled: true },
  { id: 'sync', label: 'Cloud sync' },
  { id: 'analytics', label: 'Usage analytics (disabled)', isDisabled: true },
  { id: 'beta', label: 'Beta features' },
];

export const SwitchGroupWithManyOptions = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <SwitchGroup columns={2} options={options} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected IDs: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
