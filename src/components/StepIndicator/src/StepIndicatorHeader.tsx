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
    <HeadingTag className="flex items-center gap-2 text-xl">
      <span className="inline-flex items-center gap-1">
        <span className="sr-only">Step</span>
        <span
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-400
            text-white"
        >
          {currentStepNumber}
        </span>
        <span className="text-primary-400">of</span>
        <span className="text-primary-400">{totalSteps}</span>
      </span>
      <span className="font-bold">{currentStepLabel}</span>
    </HeadingTag>
  );
}
