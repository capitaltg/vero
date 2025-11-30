import { useState } from 'react';
import { Radio } from '../src/Radio';

export const RadioDisabled = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Radio
        id="radio-3"
        isChecked={isChecked}
        isDisabled={true}
        label="Disabled radio"
        value="option-3"
        onClick={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Radio {isChecked ? 'is selected' : 'is not selected'}
      </p>
    </div>
  );
};
