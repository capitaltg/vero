import { useState } from 'react';
import { Checkbox } from '../src/Checkbox';

export const CheckboxTile = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Checkbox
        description="This is a description for the tile checkbox option"
        id="checkbox-tile"
        isChecked={isChecked}
        label="Tile Checkbox"
        variant="tile"
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Checkbox {isChecked ? 'is checked' : 'is unchecked'}
      </p>
    </div>
  );
};
