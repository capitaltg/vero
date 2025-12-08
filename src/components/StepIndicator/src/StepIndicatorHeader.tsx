import { cn } from '@/lib/utils';
import { stepIndicatorHeaderCounterVariants, stepIndicatorHeaderVariants } from '../constants';

export interface StepIndicatorHeaderProps {
  readonly currentStepLabel?: string;
  readonly currentStepNumber: number;
  readonly totalSteps: number;
}

export function StepIndicatorHeader({
  currentStepLabel,
  currentStepNumber,
  totalSteps,
}: StepIndicatorHeaderProps) {
  return (
    <div className={cn(stepIndicatorHeaderVariants())}>
      <h4 className="flex items-center gap-2">
        <span className={cn(stepIndicatorHeaderCounterVariants())}>
          <span className="sr-only">Step</span>
          <span>{currentStepNumber}</span>
          <span> of {totalSteps}</span>
        </span>
        <span>{currentStepLabel}</span>
      </h4>
    </div>
  );
}
