import { useState } from 'react';
import { Checkbox } from '../src/Checkbox';

export const CheckboxTileDisabled = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Checkbox
        description="This tile checkbox option is disabled"
        id="checkbox-tile-disabled"
        isChecked={isChecked}
        isDisabled={true}
        label="Disabled Tile Checkbox"
        variant="tile"
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Checkbox {isChecked ? 'is checked' : 'is unchecked'}
      </p>
    </div>
  );
};
