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
        id="radio-4"
        isChecked={isChecked}
        isDisabled={true}
        label="Disabled selected radio"
        value="option-4"
        onClick={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Radio {isChecked ? 'is selected' : 'is not selected'}
      </p>
    </div>
  );
};
