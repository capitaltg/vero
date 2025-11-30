import { useEffect, useState } from 'react';
import { Radio } from '../src/Radio';

export const RadioTileSelected = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  useEffect(() => {
    setIsChecked(true);
  }, []);

  return (
    <div className="space-y-4">
      <Radio
        label="Selected Tile Radio"
        description="This tile radio option is selected"
        id="radio-tile-selected"
        value="option-tile-selected"
        variant="tile"
        isChecked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Radio {isChecked ? 'is selected' : 'is not selected'}
      </p>
    </div>
  );
};
