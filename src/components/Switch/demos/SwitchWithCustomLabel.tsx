import { useState } from 'react';
import { Switch } from '../src/Switch';

export const SwitchWithCustomLabel = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Switch
        id="dark-mode"
        isChecked={isChecked}
        label={
          <div className="flex flex-col">
            <span className="font-bold">Dark Mode</span>
            <span className="text-sm text-muted-foreground">Enable dark mode theme</span>
          </div>
        }
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">Switch {isChecked ? 'is on' : 'is off'}</p>
    </div>
  );
};
