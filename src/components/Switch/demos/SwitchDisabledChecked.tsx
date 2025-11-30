import { useEffect, useState } from 'react';
import { Switch } from '../src/Switch';

export const SwitchDisabledChecked = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  useEffect(() => {
    setIsChecked(true);
  }, []);

  return (
    <div className="space-y-4">
      <Switch
        id="disabled-checked"
        isChecked={isChecked}
        isDisabled={true}
        label="Disabled checked switch"
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">Switch {isChecked ? 'is on' : 'is off'}</p>
    </div>
  );
};
