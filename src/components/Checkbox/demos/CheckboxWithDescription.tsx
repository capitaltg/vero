import { useState } from 'react';
import { Checkbox } from '../src/Checkbox';

export const CheckboxWithDescription = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Checkbox
        description="This is a helpful description that provides additional context about this checkbox option."
        id="checkbox-with-description"
        isChecked={isChecked}
        label="Checkbox with description"
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Checkbox {isChecked ? 'is checked' : 'is unchecked'}
      </p>
    </div>
  );
};
