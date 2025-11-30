import { useEffect, useState } from 'react';
import { Radio } from '../src/Radio';

export const RadioSelected = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  useEffect(() => {
    setIsChecked(true);
  }, []);

  return (
    <div className="space-y-4">
      <Radio
        label="Selected radio"
        id="radio-2"
        value="option-2"
        isChecked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Radio {isChecked ? 'is selected' : 'is not selected'}
      </p>
    </div>
  );
};
