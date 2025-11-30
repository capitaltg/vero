import { useState } from 'react';
import { Checkbox } from '../src/Checkbox';

export const CheckboxDisabled = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Checkbox
        label="Disabled checkbox"
        id="disabled"
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
