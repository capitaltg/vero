import { useState } from 'react';
import { Checkbox } from '../../Checkbox';
import { CheckboxGroup } from '../src/CheckboxGroup';

export const CheckboxGroupWithChildren = () => {
  const [value, setValue] = useState<string[]>(['email']);

  const toggle = (id: string) => (isChecked: boolean) =>
    setValue(prev => (isChecked ? [...prev, id] : prev.filter(v => v !== id)));

  return (
    <div className="space-y-4">
      <CheckboxGroup>
        <div className="flex flex-col gap-2">
          <Checkbox
            id="children-email"
            isChecked={value.includes('email')}
            label="Email"
            onCheckedChange={toggle('email')}
          />
          <Checkbox
            id="children-sms"
            isChecked={value.includes('sms')}
            label="SMS"
            onCheckedChange={toggle('sms')}
          />
        </div>
      </CheckboxGroup>
      <p className="text-sm text-muted-foreground">Selected: {value.join(', ') || 'none'}</p>
    </div>
  );
};
