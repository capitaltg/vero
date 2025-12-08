import { cn } from '@/lib/utils';
import { stepIndicatorSegmentVariants, stepIndicatorSegmentsVariants } from '../constants';
import { Step } from '../types';
import { StepIndicatorStepContent } from './StepIndicatorStepContent';

type StepIndicatorStatus = 'default' | 'current' | 'completed';

export interface StepIndicatorSegmentsProps<T extends readonly Step[] | Step[]> {
  readonly currentStep: string;
  readonly currentStepIndex: number;
  readonly showCurrentAsCompleted: boolean;
  readonly steps: T;
}

export function StepIndicatorSegments<T extends readonly Step[] | Step[]>({
  currentStep,
  currentStepIndex,
  showCurrentAsCompleted,
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

        let status: StepIndicatorStatus = 'default';
        if (isCompleted) {
          status = 'completed';
        } else if (isCurrent) {
          status = 'current';
        }

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
                {(() => {
                  if (isCompleted) return ' completed';
                  if (isCurrent) return '';
                  return ' not completed';
                })()}
              </span>
            </div>
            <StepIndicatorStepContent
              className="mt-2 flex flex-col"
              description={step.description}
              isCompleted={isCompleted}
              isCurrent={isCurrent}
              label={step.label}
            />
          </li>
        );
      })}
    </ol>
  );
}
