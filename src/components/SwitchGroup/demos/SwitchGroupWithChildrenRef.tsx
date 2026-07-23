import { Button } from '@/components/Button';
import { type ComponentRef, useRef, useState } from 'react';
import { Switch } from '../../Switch';
import { SwitchGroup } from '../src/SwitchGroup';

export const SwitchGroupWithChildrenRef = () => {
  const [value, setValue] = useState<string[]>(['wifi']);
  const firstSwitchRef = useRef<ComponentRef<typeof Switch>>(null);

  const toggle = (id: string) => (isChecked: boolean) =>
    setValue(prev => (isChecked ? [...prev, id] : prev.filter(v => v !== id)));

  const focusFirstSwitch = () => {
    firstSwitchRef.current?.focus();
  };

  return (
    <div className="space-y-4">
      <SwitchGroup>
        <div className="flex flex-col gap-2">
          <Switch
            ref={firstSwitchRef}
            id="ref-wifi"
            isChecked={value.includes('wifi')}
            label="Wi-Fi"
            onCheckedChange={toggle('wifi')}
          />
          <Switch
            id="ref-bluetooth"
            isChecked={value.includes('bluetooth')}
            label="Bluetooth"
            onCheckedChange={toggle('bluetooth')}
          />
        </div>
      </SwitchGroup>
      <Button size="sm" type="button" variant="primary" onClick={focusFirstSwitch}>
        Focus first switch
      </Button>
      <p className="text-sm text-muted-foreground">Enabled: {value.join(', ') || 'none'}</p>
    </div>
  );
};
