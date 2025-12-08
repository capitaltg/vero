import { cn } from '@/lib/utils';
import * as React from 'react';
import { stepIndicatorDefaultContainerVariants } from '../constants';
import { Step, StepIndicatorProps } from '../types';
import { StepIndicatorCounterList } from './StepIndicatorCounterList';
import { StepIndicatorHeader } from './StepIndicatorHeader';
import { StepIndicatorSegments } from './StepIndicatorSegments';

function StepIndicatorInner<T extends readonly Step[] | Step[]>(
  {
    steps,
    currentStep,
    orientation = 'horizontal',
    className,
    variant = 'default',
    showCurrentAsCompleted = false,
    ...props
  }: StepIndicatorProps<T>,
  ref: React.ForwardedRef<HTMLElement>,
) {
  const currentStepIndex = steps.findIndex(s => s.id === currentStep);
  const currentStepData = steps[currentStepIndex];
  const currentStepNumber = currentStepIndex + 1;
  const totalSteps = steps.length;

  return (
    <section
      ref={ref}
      aria-label="Step indicator"
      className={cn(
        stepIndicatorDefaultContainerVariants({ orientation: 'horizontal' }),
        className,
      )}
      {...props}
    >
      {variant === 'counter' ? (
        <StepIndicatorCounterList
          currentStep={currentStep}
          currentStepIndex={currentStepIndex}
          orientation={orientation}
          showCurrentAsCompleted={showCurrentAsCompleted}
          steps={steps}
        />
      ) : (
        <StepIndicatorSegments
          currentStep={currentStep}
          currentStepIndex={currentStepIndex}
          showCurrentAsCompleted={showCurrentAsCompleted}
          steps={steps}
        />
      )}

      <StepIndicatorHeader
        currentStepLabel={currentStepData?.label}
        currentStepNumber={currentStepNumber}
        totalSteps={totalSteps}
      />
    </section>
  );
}

const StepIndicatorBase = React.forwardRef(StepIndicatorInner);
StepIndicatorBase.displayName = 'StepIndicator';

const StepIndicator = StepIndicatorBase as unknown as <
  T extends readonly Step[] | Step[] = readonly Step[],
>(
  props: StepIndicatorProps<T> & { ref?: React.ForwardedRef<HTMLElement> },
) => React.ReactElement;

export { StepIndicator };
