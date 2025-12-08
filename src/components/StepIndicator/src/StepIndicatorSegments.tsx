import { cn } from '@/lib/utils';
import { stepIndicatorSegmentVariants, stepIndicatorSegmentsVariants } from '../constants';
import { Step } from '../types';

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
    <ol className={cn(stepIndicatorSegmentsVariants({ orientation: 'horizontal' }))}>
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
            className={cn(stepIndicatorSegmentVariants({ status, orientation: 'horizontal' }))}
            {...(isCurrent && { 'aria-current': 'step' })}
          >
            <span className="sr-only">
              {step.label}
              {(() => {
                if (isCompleted) return ' completed';
                if (isCurrent) return '';
                return ' not completed';
              })()}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
