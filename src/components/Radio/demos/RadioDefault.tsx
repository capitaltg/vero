import { useState } from 'react';
import { Radio } from '../src/Radio';

export const RadioDefault = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Radio
        label="Radio option"
        id="radio-1"
        value="option-1"
        isChecked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Radio {isChecked ? 'is selected' : 'is not selected'}
      </p>
    </div>
  );
};
