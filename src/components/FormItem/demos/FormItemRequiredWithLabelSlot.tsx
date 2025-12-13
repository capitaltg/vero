import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Tooltip, TooltipProvider } from '@/components/Tooltip';
import { HelpCircle } from 'lucide-react';
import { FormItem } from '../src/FormItem';

export const FormItemRequiredWithLabelSlot = () => (
  <TooltipProvider>
    <FormItem
      elementId="api-key-element-id"
      hintText="Enter your unique API key"
      isRequired={true}
      label="API Key"
      labelSlot={
        <Tooltip content="Your API key can be found in your account settings">
          <Button className="h-auto p-1" size="sm" variant="ghost">
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </Button>
        </Tooltip>
      }
    >
      <Input placeholder="Enter your API Key" type="password" />
    </FormItem>
  </TooltipProvider>
);
