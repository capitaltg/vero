import { Button } from '@/components/Button';
import { type ComponentRef, useRef, useState } from 'react';
import { Radio } from '../../Radio';
import { RadioGroup } from '../src/RadioGroup';

export const RadioGroupWithChildrenRef = () => {
  const [value, setValue] = useState('yes');
  const firstRadioRef = useRef<ComponentRef<typeof Radio>>(null);

  const focusFirstRadio = () => {
    firstRadioRef.current?.focus();
  };

  return (
    <div className="space-y-4">
      <RadioGroup value={value} onChange={setValue}>
        <div className="flex flex-col gap-2">
          <Radio ref={firstRadioRef} id="ref-yes" label="Yes" value="yes" />
          <Radio id="ref-no" label="No" value="no" />
        </div>
      </RadioGroup>
      <Button size="sm" type="button" variant="primary" onClick={focusFirstRadio}>
        Focus first radio
      </Button>
      <p className="text-sm text-muted-foreground">Selected: {value}</p>
    </div>
  );
};
