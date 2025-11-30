import { HelpCircle } from 'lucide-react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Tooltip, TooltipProvider } from '@/components/Tooltip';
import { FormItem } from '../src/FormItem';

export const FormItemWithLabelSlot = () => (
  <TooltipProvider>
    <FormItem
      label="Password"
      elementId="password-label-slot-element-id"
      labelSlot={
        <Tooltip content="Password must be at least 8 characters with uppercase, lowercase, and numbers">
          <Button variant="ghost" size="sm" className="h-auto p-1">
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </Button>
        </Tooltip>
      }
      hintText="Must be at least 8 characters long"
    >
      <Input type="password" placeholder="Enter your password" />
    </FormItem>
  </TooltipProvider>
);
