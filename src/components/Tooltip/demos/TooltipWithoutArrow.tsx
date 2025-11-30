import { Button } from '@/components/Button';
import { Tooltip, TooltipProvider } from '../src/Tooltip';

export const TooltipWithoutArrow = () => (
  <TooltipProvider delayDuration={0}>
    <Tooltip content="This tooltip has no arrow" hasArrow={false}>
      <Button variant="primary">Hover me</Button>
    </Tooltip>
  </TooltipProvider>
);
