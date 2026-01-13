import { useState } from 'react';
import { Radio } from '../src/Radio';

export const RadioWithDescription = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Radio
        description="This is a helpful description that provides additional context about this radio option."
        id="radio-with-description"
        isChecked={isChecked}
        label="Radio option with description"
        value="option-with-description"
        onClick={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Radio {isChecked ? 'is selected' : 'is not selected'}
      </p>
    </div>
  );
};
