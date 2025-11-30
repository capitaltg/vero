import { useState } from 'react';
import { Switch } from '../src/Switch';

export const SwitchDisabled = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Switch
        id="disabled"
        isChecked={isChecked}
        isDisabled={true}
        label="Disabled switch"
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">Switch {isChecked ? 'is on' : 'is off'}</p>
    </div>
  );
};
