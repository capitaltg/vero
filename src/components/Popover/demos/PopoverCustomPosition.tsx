import { Button } from '@/components/Button';
import { Popover, PopoverContent, PopoverTrigger } from '../src/Popover';

export const PopoverCustomPosition = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="input">Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent className="w-80" align="start" hasArrow>
      <p className="text-sm">This popover is aligned to the start.</p>
    </PopoverContent>
  </Popover>
);
