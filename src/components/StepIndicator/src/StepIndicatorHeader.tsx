import { cn } from '@/lib/utils';

export interface StepIndicatorHeaderProps {
  readonly currentStepLabel?: string;
  readonly currentStepNumber: number;
  readonly headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  readonly totalSteps: number;
}

export function StepIndicatorHeader({
  currentStepLabel,
  currentStepNumber,
  headingLevel = 'h4',
  totalSteps,
}: StepIndicatorHeaderProps) {
  const HeadingTag = headingLevel;

  return (
    <HeadingTag
      className={cn('vero-step-indicator-header', 'mb-0 mt-0 flex items-center gap-3 text-xl')}
    >
      <span className={cn('vero-step-indicator-header-count', 'inline-flex items-center gap-1')}>
        <span className="sr-only">Step</span>
        <span
          className={cn(
            'vero-step-indicator-header-number',
            `mr-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-400
            text-white`,
          )}
        >
          {currentStepNumber}
        </span>
        <span className={cn('vero-step-indicator-header-of', 'text-primary-400')}>of</span>
        <span className={cn('vero-step-indicator-header-total', 'text-primary-400')}>
          {totalSteps}
        </span>
      </span>
      <span className={cn('vero-step-indicator-header-label', 'font-bold')}>
        {currentStepLabel}
      </span>
    </HeadingTag>
  );
}
