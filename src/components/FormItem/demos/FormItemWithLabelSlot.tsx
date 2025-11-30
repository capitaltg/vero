import { HelpCircle } from 'lucide-react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Tooltip, TooltipProvider } from '@/components/Tooltip';
import { FormItem } from '../src/FormItem';

export const FormItemWithLabelSlot = () => (
  <TooltipProvider>
    <FormItem
      elementId="password-label-slot-element-id"
      hintText="Must be at least 8 characters long"
      label="Password"
      labelSlot={
        <Tooltip content="Password must be at least 8 characters with uppercase, lowercase, and numbers">
          <Button className="h-auto p-1" size="sm" variant="ghost">
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </Button>
        </Tooltip>
      }
    >
      <Input placeholder="Enter your password" type="password" />
    </FormItem>
  </TooltipProvider>
);
