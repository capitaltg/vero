import { Button } from '@/components/Button';
import { Tooltip, TooltipProvider } from '../src/Tooltip';

export const TooltipPosition = () => (
  <TooltipProvider delayDuration={0}>
    <Tooltip content="This tooltip appears on the right" offset={8} side="right">
      <Button variant="primary">Hover me</Button>
    </Tooltip>
  </TooltipProvider>
);
