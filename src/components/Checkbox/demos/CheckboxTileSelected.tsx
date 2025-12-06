import { useEffect, useState } from 'react';
import { Checkbox } from '../src/Checkbox';

export const CheckboxTileSelected = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  useEffect(() => {
    setIsChecked(true);
  }, []);

  return (
    <div className="space-y-4">
      <Checkbox
        description="This tile checkbox option is selected"
        id="checkbox-tile-selected"
        isChecked={isChecked}
        label="Selected Tile Checkbox"
        variant="tile"
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Checkbox {isChecked ? 'is checked' : 'is unchecked'}
      </p>
    </div>
  );
};
