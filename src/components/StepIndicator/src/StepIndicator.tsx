import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import * as React from 'react';
import {
  stepIndicatorCircleVariants,
  stepIndicatorConnectorVariants,
  stepIndicatorDefaultContainerVariants,
  stepIndicatorHeaderCounterVariants,
  stepIndicatorHeaderVariants,
  stepIndicatorSegmentVariants,
  stepIndicatorSegmentsVariants,
  stepIndicatorTextVariants,
  stepIndicatorVariants,
} from '../constants';
import { Step, StepIndicatorProps } from '../types';

type StepIndicatorStatus = 'default' | 'current' | 'completed';

function StepIndicatorInner<T extends readonly Step[] | Step[]>(
  {
    steps,
    currentStep,
    orientation = 'horizontal',
    size = 'default',
    className,
    variant = 'default',
    showCurrentAsCompleted = false,
    ...props
  }: StepIndicatorProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const currentStepIndex = steps.findIndex(s => s.id === currentStep);
  const currentStepData = steps[currentStepIndex];
  const currentStepNumber = currentStepIndex + 1;
  const totalSteps = steps.length;

  // Render USWDS-style default variant (always horizontal)
  if (variant === 'default') {
    return (
      <div
        ref={ref}
        className={cn(
          stepIndicatorDefaultContainerVariants({ orientation: 'horizontal' }),
          className,
        )}
        {...props}
      >
        {/* Segments */}
        <ol className={cn(stepIndicatorSegmentsVariants({ orientation: 'horizontal' }), 'gap-1')}>
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
                className={cn(
                  stepIndicatorSegmentVariants({ status, orientation: 'horizontal' }),
                  'first:rounded-l-md last:rounded-r-md',
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
              </li>
            );
          })}
        </ol>

        {/* Header */}
        <div className={cn(stepIndicatorHeaderVariants({ size }))}>
          <h4 className="flex items-center gap-2">
            <span className={cn(stepIndicatorHeaderCounterVariants({ size }))}>
              <span className="sr-only">Step</span>
              <span>{currentStepNumber}</span>
              <span> of {totalSteps}</span>
            </span>
            <span>{currentStepData?.label}</span>
          </h4>
        </div>
      </div>
    );
  }

  // Render counter variant (original implementation)
  return (
    <div
      ref={ref}
      className={cn(stepIndicatorVariants({ orientation, size }), className)}
      {...props}
    >
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
          <div
            key={step.id}
            className={cn(
              'relative flex items-start',
              orientation === 'horizontal' && 'flex-1 justify-center',
            )}
          >
            {/* Step item */}
            <div
              className={cn(
                'relative flex',
                orientation === 'vertical' ? 'flex-row items-start' : 'flex-col items-center',
              )}
            >
              {/* Step circle */}
              <div className={cn(stepIndicatorCircleVariants({ size, status }))}>
                {isCompleted ? (
                  <Check className="h-4 w-4" strokeWidth={3} />
                ) : (
                  <span>{(index + 1).toString()}</span>
                )}
              </div>

              {/* Step text */}
              <div
                className={cn(
                  'flex flex-col',
                  orientation === 'vertical' ? 'ml-4' : 'mt-2 text-center',
                )}
              >
                <span
                  className={cn(
                    stepIndicatorTextVariants({ size }),
                    isCurrent || isCompleted ? 'text-foreground' : 'text-muted-foreground',
                  )}
                >
                  {step.label}
                </span>
                {step.description ? (
                  <span
                    className={cn(
                      'text-sm text-muted-foreground',
                      orientation === 'horizontal' && 'text-center',
                    )}
                  >
                    {step.description}
                  </span>
                ) : null}
              </div>
            </div>

            {/* Connector line */}
            {index < steps.length - 1 ? (
              <div
                className={cn(
                  stepIndicatorConnectorVariants({ size, orientation }),
                  isCompleted && 'bg-primary-400',
                )}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

const StepIndicatorBase = React.forwardRef(StepIndicatorInner);
StepIndicatorBase.displayName = 'StepIndicator';

const StepIndicator = StepIndicatorBase as unknown as <
  T extends readonly Step[] | Step[] = readonly Step[],
>(
  props: StepIndicatorProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> },
) => React.ReactElement;

export { StepIndicator };
