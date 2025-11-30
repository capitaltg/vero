import { Button } from '@/components/Button';
import { Popover, PopoverContent, PopoverTrigger } from '../src/Popover';

export const PopoverWithoutArrow = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="input">Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent className="w-80">
      <p className="text-sm">This is a simple popover without an arrow.</p>
    </PopoverContent>
  </Popover>
);
