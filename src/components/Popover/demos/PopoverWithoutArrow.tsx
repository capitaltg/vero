import { Button } from '@/components/Button';
import { Popover, PopoverContent, PopoverTrigger } from '../src/Popover';
import { PopoverContentProps } from '../types';

export const PopoverWithoutArrow = ({
  hasArrow = false,
  className = 'w-80',
  ...args
}: Partial<PopoverContentProps>) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="input">Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent className={className} hasArrow={hasArrow} {...args}>
      <p className="text-sm">This is a simple popover without an arrow.</p>
    </PopoverContent>
  </Popover>
);
