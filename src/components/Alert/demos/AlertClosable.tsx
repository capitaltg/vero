import { Button } from '@/components/Button';
import { useState } from 'react';
import { Alert } from '../src/Alert';
import { AlertProps } from '../types';

export const AlertClosable = ({ ...args }: AlertProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="space-y-4">
      <Button onClick={() => setIsOpen(true)}>Show Alert</Button>
      {isOpen ? <Alert {...args} onClose={() => setIsOpen(false)} /> : null}
    </div>
  );
};
