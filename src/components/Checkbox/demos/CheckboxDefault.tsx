import { useState } from 'react';
import { Checkbox } from '../src/Checkbox';

export const CheckboxDefault = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Checkbox
        label="Accept terms and conditions"
        id="terms2"
        isChecked={isChecked}
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Checkbox {isChecked ? 'is checked' : 'is unchecked'}
      </p>
    </div>
  );
};
