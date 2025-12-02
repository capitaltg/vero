import { HTMLAttributes } from 'react';

export interface Step {
  id: string;
  label: string;
  description?: string;
}

type StepId<T extends readonly Step[] | Step[]> = T[number]['id'];

export interface StepIndicatorProps<T extends readonly Step[] | Step[] = readonly Step[]>
  extends HTMLAttributes<HTMLDivElement> {
  steps: T;
  currentStep: StepId<T>;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  size?: 'default' | 'sm' | 'lg';
  /**
   * If true, the current step will be shown as completed instead of current.
   * Useful for showing the final step as completed when the process is finished.
   */
  showCurrentAsCompleted?: boolean;
}

/**
 * Helper type to extract the step id type from a steps array.
 * Useful for typing state variables that hold the current step id.
 *
 * @example
 * ```ts
 * const steps = [{ id: '1', label: 'Step 1' }, { id: '2', label: 'Step 2' }] as const;
 * type StepId = StepIdFromSteps<typeof steps>; // '1' | '2'
 * const [currentStep, setCurrentStep] = useState<StepId>('1');
 * ```
 */
export type StepIdFromSteps<T extends readonly Step[] | Step[]> = StepId<T>;
