import { cn } from '@/lib/utils';
import { stepIndicatorSegmentVariants, stepIndicatorSegmentsVariants } from '../constants';
import { Step } from '../types';
import { StepIndicatorStepContent } from './StepIndicatorStepContent';
import { calculateStepStatus, getStepStatusSuffix } from './utils';

export interface StepIndicatorSegmentsProps<T extends readonly Step[] | Step[]> {
  readonly currentStep: string;
  readonly currentStepIndex: number;
  readonly showCurrentAsCompleted: boolean;
  readonly showLabels: boolean;
  readonly steps: T;
}

export function StepIndicatorSegments<T extends readonly Step[] | Step[]>({
  currentStep,
  currentStepIndex,
  showCurrentAsCompleted,
  showLabels,
  steps,
}: StepIndicatorSegmentsProps<T>) {
  return (
    <ol
      aria-label="Steps"
      className={cn(stepIndicatorSegmentsVariants({ orientation: 'horizontal' }))}
    >
      {steps.map((step, index) => {
        const isCurrent = step.id === currentStep;
        const isCompleted =
          currentStepIndex !== -1 &&
          (index < currentStepIndex || (showCurrentAsCompleted && isCurrent));

        const status = calculateStepStatus(isCurrent, isCompleted);

        return (
          <li
            key={step.id}
            className="flex flex-1 flex-col"
            {...(isCurrent && { 'aria-current': 'step' })}
          >
            <div
              className={cn(stepIndicatorSegmentVariants({ status, orientation: 'horizontal' }))}
            >
              <span className="sr-only">
                {step.label}
                {getStepStatusSuffix(status)}
              </span>
            </div>
            {showLabels ? (
              <StepIndicatorStepContent
                className="mt-2 flex flex-col"
                description={step.description}
                label={step.label}
                status={status}
              />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
