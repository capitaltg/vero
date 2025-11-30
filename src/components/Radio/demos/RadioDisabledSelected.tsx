import { useEffect, useState } from 'react';
import { Radio } from '../src/Radio';

export const RadioDisabledSelected = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  useEffect(() => {
    setIsChecked(true);
  }, []);

  return (
    <div className="space-y-4">
      <Radio
        label="Disabled selected radio"
        id="radio-4"
        value="option-4"
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
