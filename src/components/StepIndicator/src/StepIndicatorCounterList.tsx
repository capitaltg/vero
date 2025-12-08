import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import {
  stepIndicatorCircleVariants,
  stepIndicatorConnectorVariants,
  stepIndicatorVariants,
} from '../constants';
import { Step } from '../types';
import { StepIndicatorStepContent } from './StepIndicatorStepContent';

type StepIndicatorStatus = 'default' | 'current' | 'completed';

export interface StepIndicatorCounterListProps<T extends readonly Step[] | Step[]> {
  readonly currentStep: string;
  readonly currentStepIndex: number;
  readonly orientation: 'horizontal' | 'vertical';
  readonly showCurrentAsCompleted: boolean;
  readonly steps: T;
}

export function StepIndicatorCounterList<T extends readonly Step[] | Step[]>({
  currentStep,
  currentStepIndex,
  orientation,
  showCurrentAsCompleted,
  steps,
}: StepIndicatorCounterListProps<T>) {
  return (
    <ol aria-label="Steps" className={cn(stepIndicatorVariants({ orientation }))}>
      {steps.map((step, index) => {
        const isCurrent = step.id === currentStep;
        const isCompleted =
          currentStepIndex !== -1 &&
          (index < currentStepIndex || (showCurrentAsCompleted && isCurrent));

        // Determine the status of the step indicator
        let status: StepIndicatorStatus = 'default';
        if (isCompleted) {
          status = 'completed';
        } else if (isCurrent) {
          status = 'current';
        }

        return (
          <li
            key={step.id}
            className={cn(
              'relative flex items-start',
              orientation === 'horizontal' && 'flex-1 justify-center',
            )}
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
            {/* Step item */}
            <div
              className={cn(
                'relative flex',
                orientation === 'vertical' ? 'flex-row items-start' : 'flex-col items-center',
              )}
            >
              {/* Step circle */}
              <div className={cn(stepIndicatorCircleVariants({ status }))}>
                {isCompleted ? (
                  <Check className="h-4 w-4" strokeWidth={3} />
                ) : (
                  <span>{(index + 1).toString()}</span>
                )}
              </div>

              {/* Step text */}
              <StepIndicatorStepContent
                className={cn(
                  'flex flex-col',
                  orientation === 'vertical' ? 'ml-4' : 'mt-2 text-center',
                )}
                description={step.description}
                isCompleted={isCompleted}
                isCurrent={isCurrent}
                label={step.label}
              />
            </div>

            {/* Connector line */}
            {index < steps.length - 1 ? (
              <div
                className={cn(
                  stepIndicatorConnectorVariants({ orientation }),
                  isCompleted && 'bg-primary-400',
                )}
              />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
