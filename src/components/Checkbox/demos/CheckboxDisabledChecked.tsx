import { useEffect, useState } from 'react';
import { Checkbox } from '../src/Checkbox';

export const CheckboxDisabledChecked = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  useEffect(() => {
    setIsChecked(true);
  }, []);

  return (
    <div className="space-y-4">
      <Checkbox
        label="Disabled checked checkbox"
        id="disabled-checked"
        isChecked={isChecked}
        onCheckedChange={() => setIsChecked(!isChecked)}
        isDisabled={true}
      />
      <p className="text-sm text-muted-foreground">
        Checkbox {isChecked ? 'is checked' : 'is unchecked'}
      </p>
    </div>
  );
};
