import { useEffect, useState } from 'react';
import { Checkbox } from '../src/Checkbox';

export const CheckboxChecked = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  useEffect(() => {
    setIsChecked(true);
  }, []);

  return (
    <div className="space-y-4">
      <Checkbox
        label="Checked checkbox"
        id="checked"
        isChecked={isChecked}
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Checkbox {isChecked ? 'is checked' : 'is unchecked'}
      </p>
    </div>
  );
};
