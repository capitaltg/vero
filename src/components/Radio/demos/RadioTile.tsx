import { useState } from 'react';
import { Radio } from '../src/Radio';

export const RadioTile = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Radio
        description="This is a description for the tile radio option"
        id="radio-tile"
        isChecked={isChecked}
        label="Tile Radio"
        value="option-tile"
        variant="tile"
        onClick={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Radio {isChecked ? 'is selected' : 'is not selected'}
      </p>
    </div>
  );
};
