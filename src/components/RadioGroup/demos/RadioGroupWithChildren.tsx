import { useState } from 'react';
import { Radio } from '../../Radio';
import { RadioGroup } from '../src/RadioGroup';

export const RadioGroupWithChildren = () => {
  const [value, setValue] = useState('yes');

  return (
    <div className="space-y-4">
      <RadioGroup value={value} onChange={setValue}>
        <div className="flex flex-col gap-2">
          <Radio id="children-yes" label="Yes" value="yes" />
          <Radio id="children-no" label="No" value="no" />
        </div>
      </RadioGroup>
      <p className="text-sm text-muted-foreground">Selected: {value}</p>
    </div>
  );
};
