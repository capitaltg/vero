import { Button } from '@/components/Button';
import { type ComponentRef, useRef, useState } from 'react';
import { Checkbox } from '../../Checkbox';
import { CheckboxGroup } from '../src/CheckboxGroup';

export const CheckboxGroupWithChildrenRef = () => {
  const [value, setValue] = useState<string[]>(['email']);
  const firstCheckboxRef = useRef<ComponentRef<typeof Checkbox>>(null);

  const toggle = (id: string) => (isChecked: boolean) =>
    setValue(prev => (isChecked ? [...prev, id] : prev.filter(v => v !== id)));

  const focusFirstCheckbox = () => {
    firstCheckboxRef.current?.focus();
  };

  return (
    <div className="space-y-4">
      <CheckboxGroup>
        <div className="flex flex-col gap-2">
          <Checkbox
            ref={firstCheckboxRef}
            id="ref-email"
            isChecked={value.includes('email')}
            label="Email"
            onCheckedChange={toggle('email')}
          />
          <Checkbox
            id="ref-sms"
            isChecked={value.includes('sms')}
            label="SMS"
            onCheckedChange={toggle('sms')}
          />
        </div>
      </CheckboxGroup>
      <Button size="sm" type="button" variant="primary" onClick={focusFirstCheckbox}>
        Focus first checkbox
      </Button>
      <p className="text-sm text-muted-foreground">Selected: {value.join(', ') || 'none'}</p>
    </div>
  );
};
