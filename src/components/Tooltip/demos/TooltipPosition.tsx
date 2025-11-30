import { Button } from '@/components/Button';
import { Tooltip, TooltipProvider } from '../src/Tooltip';

export const TooltipPosition = () => (
  <TooltipProvider delayDuration={0}>
    <Tooltip content="This tooltip appears on the right" side="right" offset={8}>
      <Button variant="primary">Hover me</Button>
    </Tooltip>
  </TooltipProvider>
);
