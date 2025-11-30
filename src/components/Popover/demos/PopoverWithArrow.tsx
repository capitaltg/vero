import { Button } from '@/components/Button';
import { Popover, PopoverContent, PopoverTrigger } from '../src/Popover';

export const PopoverWithArrow = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="input">Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent className="w-80" hasArrow>
      <div className="grid gap-4">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
        </div>
        <div className="grid gap-2">
          <div className="grid grid-cols-3 items-center gap-4">
            <label htmlFor="width" className="text-sm">
              Width
            </label>
            <input
              id="width"
              defaultValue="100%"
              className="col-span-2 h-8 rounded-sm border border-input bg-transparent px-3 text-sm"
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <label htmlFor="height" className="text-sm">
              Height
            </label>
            <input
              id="height"
              defaultValue="25px"
              className="col-span-2 h-8 rounded-sm border border-input bg-transparent px-3 text-sm"
            />
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
);
