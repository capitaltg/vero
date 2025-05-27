import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import * as React from 'react';
import {
  stepIndicatoConnectorVariants,
  stepIndicatorCircleVariants,
  stepIndicatorTextVariants,
  stepIndicatorVariants,
} from '../constants';
import { StepIndicatorProps } from '../types';

type StepIndicatorStatus = 'default' | 'current' | 'completed';

const StepIndicator = React.forwardRef<HTMLDivElement, StepIndicatorProps>(
  ({ steps, currentStep, orientation = 'horizontal', size = 'default', className }, ref) => {
    return (
      <div ref={ref} className={cn(stepIndicatorVariants({ orientation, size }), className)}>
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          // Determine the status of the step indicator
          let status: StepIndicatorStatus = 'default';
          if (isCurrent) status = 'current';
          if (isCompleted) status = 'completed';

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
                    stepIndicatoConnectorVariants({ size, orientation }),
                    isCompleted && 'bg-primary-400',
                  )}
                />
              ) : null}
            </div>
          );
        })}
      </div>
    );
  },
);
StepIndicator.displayName = 'StepIndicator';

export { StepIndicator };
