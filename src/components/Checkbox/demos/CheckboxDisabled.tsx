import { useState } from 'react';
import { Checkbox } from '../src/Checkbox';

export const CheckboxDisabled = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Checkbox
        id="disabled"
        isChecked={isChecked}
        isDisabled={true}
        label="Disabled checkbox"
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Checkbox {isChecked ? 'is checked' : 'is unchecked'}
      </p>
    </div>
  );
};
