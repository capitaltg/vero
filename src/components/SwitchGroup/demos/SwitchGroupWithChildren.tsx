import { useState } from 'react';
import { Switch } from '../../Switch';
import { SwitchGroup } from '../src/SwitchGroup';

export const SwitchGroupWithChildren = () => {
  const [value, setValue] = useState<string[]>(['wifi']);

  const toggle = (id: string) => (isChecked: boolean) =>
    setValue(prev => (isChecked ? [...prev, id] : prev.filter(v => v !== id)));

  return (
    <div className="space-y-4">
      <SwitchGroup>
        <div className="flex flex-col gap-2">
          <Switch
            id="children-wifi"
            isChecked={value.includes('wifi')}
            label="Wi-Fi"
            onCheckedChange={toggle('wifi')}
          />
          <Switch
            id="children-bluetooth"
            isChecked={value.includes('bluetooth')}
            label="Bluetooth"
            onCheckedChange={toggle('bluetooth')}
          />
        </div>
      </SwitchGroup>
      <p className="text-sm text-muted-foreground">Enabled: {value.join(', ') || 'none'}</p>
    </div>
  );
};
