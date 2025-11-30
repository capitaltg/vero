import { useState } from 'react';
import { Switch } from '../src/Switch';

export const SwitchDefault = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Switch
        id="airplane-mode"
        isChecked={isChecked}
        label="Airplane Mode"
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">Switch {isChecked ? 'is on' : 'is off'}</p>
    </div>
  );
};
