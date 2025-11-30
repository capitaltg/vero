import { Button } from '@/components/Button';
import { Tooltip, TooltipProvider } from '../src/Tooltip';

export const TooltipAlignment = () => (
  <TooltipProvider delayDuration={0}>
    <Tooltip align="start" content="This tooltip is start-aligned">
      <Button variant="primary">Hover me</Button>
    </Tooltip>
  </TooltipProvider>
);
