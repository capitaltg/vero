import { useState } from 'react';
import { Radio } from '../src/Radio';

export const RadioDefault = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Radio
        id="radio-1"
        isChecked={isChecked}
        label="Radio option"
        value="option-1"
        onClick={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Radio {isChecked ? 'is selected' : 'is not selected'}
      </p>
    </div>
  );
};
