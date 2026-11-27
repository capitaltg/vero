import { useState } from 'react';
import { SelectGroup, SelectRoot, SelectValue } from '../src/Select';
import { SelectContent } from '../src/SelectContent';
import { SelectItem } from '../src/SelectItem';
import { SelectLabel } from '../src/SelectLabel';
import { SelectSeparator } from '../src/SelectSeparator';
import { SelectTrigger } from '../src/SelectTrigger';

export const SelectFromParts = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <SelectRoot value={value} onValueChange={setValue}>
        <SelectTrigger aria-label="Food" className="w-64" hasValue={!!value}>
          <SelectValue placeholder="Select a food..." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem disabled value="mango">
              Mango (out of season)
            </SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
            <SelectItem value="spinach">Spinach</SelectItem>
          </SelectGroup>
        </SelectContent>
      </SelectRoot>
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
