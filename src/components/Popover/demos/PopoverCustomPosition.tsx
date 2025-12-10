import { Button } from '@/components/Button';
import { Popover, PopoverContent, PopoverTrigger } from '../src/Popover';
import { PopoverContentProps } from '../types';

export const PopoverCustomPosition = ({
  hasArrow = true,
  align = 'start',
  className = 'w-80',
  ...args
}: Partial<PopoverContentProps>) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="input">Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent align={align} className={className} hasArrow={hasArrow} {...args}>
      <p className="text-sm">This popover is aligned to the start.</p>
    </PopoverContent>
  </Popover>
);
