import { HelpCircle } from 'lucide-react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Tooltip, TooltipProvider } from '@/components/Tooltip';
import { FormItem } from '../src/FormItem';

export const FormItemRequiredWithLabelSlot = () => (
  <TooltipProvider>
    <FormItem
      label="API Key"
      elementId="api-key-element-id"
      isRequired={true}
      labelSlot={
        <Tooltip content="Your API key can be found in your account settings">
          <Button variant="ghost" size="sm" className="h-auto p-1">
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </Button>
        </Tooltip>
      }
      hintText="Enter your unique API key"
    >
      <Input type="password" placeholder="Enter your API Key" />
    </FormItem>
  </TooltipProvider>
);
