import { cn } from '@/lib/utils';
import {
  stepIndicatorStepContentDescriptionVariants,
  stepIndicatorStepContentLabelVariants,
} from '../constants';
import type { StepIndicatorStatus } from './utils';

export interface StepIndicatorStepContentProps {
  readonly className?: string;
  readonly description?: string;
  readonly label: string;
  readonly status: StepIndicatorStatus;
}

export function StepIndicatorStepContent({
  className,
  description,
  label,
  status,
}: StepIndicatorStepContentProps) {
  return (
    <div className={className}>
      <span className={cn(stepIndicatorStepContentLabelVariants({ status }))}>{label}</span>
      {description ? (
        <span
          className={cn(
            stepIndicatorStepContentDescriptionVariants({
              status,
            }),
          )}
        >
          {description}
        </span>
      ) : null}
    </div>
  );
}
