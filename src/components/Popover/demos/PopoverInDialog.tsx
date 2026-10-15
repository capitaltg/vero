import { Button } from '@/components/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/Dialog';
import { FormItem } from '@/components/FormItem';
import { Input } from '@/components/Input';
import { Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../src/Popover';
import { PopoverContentProps } from '../types';

const colors = [
  { name: 'Gray', hex: '#6b7280' },
  { name: 'Red', hex: '#dc2626' },
  { name: 'Orange', hex: '#ea580c' },
  { name: 'Green', hex: '#16a34a' },
  { name: 'Blue', hex: '#2563eb' },
  { name: 'Purple', hex: '#9333ea' },
];

export const PopoverInDialog = ({
  align = 'start',
  className = 'w-auto',
  ...args
}: Partial<PopoverContentProps>) => {
  const [color, setColor] = useState(colors[4]);
  const [colorOpen, setColorOpen] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">New Label</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Label</DialogTitle>
          <DialogDescription>Labels help you group and filter related issues.</DialogDescription>
        </DialogHeader>
        <FormItem label="Name">
          <Input id="label-name" placeholder="e.g. Needs review" />
        </FormItem>
        <Popover open={colorOpen} onOpenChange={setColorOpen}>
          <FormItem label="Color">
            <PopoverTrigger asChild id="label-color">
              <Button className="w-fit gap-2" variant="input">
                <span className="h-4 w-4 rounded-full" style={{ backgroundColor: color.hex }} />
                {color.name}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
          </FormItem>
          <PopoverContent align={align} className={className} {...args}>
            <div className="grid grid-cols-6 gap-2">
              {colors.map(option => (
                <button
                  key={option.name}
                  aria-label={option.name}
                  aria-pressed={option.name === color.name}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: option.hex }}
                  type="button"
                  onClick={() => {
                    setColor(option);
                    setColorOpen(false);
                  }}
                >
                  {option.name === color.name ? <Check className="h-4 w-4" /> : null}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <DialogFooter>
          <Button type="submit" variant="primary">
            Create Label
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
