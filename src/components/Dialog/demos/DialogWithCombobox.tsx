import { Button } from '@/components/Button';
import { Combobox } from '@/components/Combobox';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '../src/Dialog';
import { DialogDescription } from '../src/DialogDescription';
import { DialogFooter } from '../src/DialogFooter';
import { DialogHeader } from '../src/DialogHeader';
import { DialogTitle } from '../src/DialogTitle';

const fruits = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Grape', value: 'grape' },
];

export const DialogWithCombobox = () => {
  const [value, setValue] = useState('');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose a Fruit</DialogTitle>
          <DialogDescription>Pick a fruit from the list, then save.</DialogDescription>
        </DialogHeader>
        <Combobox
          options={fruits}
          placeholder="Select a fruit..."
          value={value}
          onChange={setValue}
        />
        <DialogFooter>
          <Button type="submit" variant="primary">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
