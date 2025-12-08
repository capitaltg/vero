import { cn } from '@/lib/utils';
import {
  stepIndicatorStepContentDescriptionVariants,
  stepIndicatorStepContentLabelVariants,
} from '../constants';

export interface StepIndicatorStepContentProps {
  readonly className?: string;
  readonly description?: string;
  readonly isCompleted: boolean;
  readonly isCurrent: boolean;
  readonly label: string;
}

export function StepIndicatorStepContent({
  className,
  description,
  isCompleted,
  isCurrent,
  label,
}: StepIndicatorStepContentProps) {
  let status: 'default' | 'current' | 'completed';
  if (isCompleted) {
    status = 'completed';
  } else if (isCurrent) {
    status = 'current';
  } else {
    status = 'default';
  }

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
