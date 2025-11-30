import { Button } from '@/components/Button';
import { Tooltip, TooltipProvider } from '../src/Tooltip';

export const TooltipAlignment = () => (
  <TooltipProvider delayDuration={0}>
    <Tooltip content="This tooltip is start-aligned" align="start">
      <Button variant="primary">Hover me</Button>
    </Tooltip>
  </TooltipProvider>
);
