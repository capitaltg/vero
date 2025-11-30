import { useState } from 'react';
import { Radio } from '../src/Radio';

export const RadioDisabled = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Radio
        label="Disabled radio"
        id="radio-3"
        value="option-3"
        isChecked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
        isDisabled={true}
      />
      <p className="text-sm text-muted-foreground">
        Radio {isChecked ? 'is selected' : 'is not selected'}
      </p>
    </div>
  );
};
