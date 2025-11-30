import { useState } from 'react';
import { Radio } from '../src/Radio';

export const RadioTileDisabled = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Radio
        label="Disabled Tile Radio"
        description="This tile radio option is disabled"
        id="radio-tile-disabled"
        value="option-tile-disabled"
        variant="tile"
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
