import { HTMLAttributes } from 'react';

export interface Step {
  /** A unique id for the step, used as `currentStep`. */
  id: string;
  /** The step's name, shown under its segment or counter. */
  label: string;
  /** More detail about the step. */
  description?: string;
}

type StepId<T extends readonly Step[] | Step[]> = T[number]['id'];

export interface StepIndicatorProps<T extends readonly Step[] | Step[] = readonly Step[]>
  extends HTMLAttributes<HTMLDivElement> {
  /** The steps, in order. Declare the array `as const` to type `currentStep` by its ids. */
  steps: T;
  /** The id of the current step. Steps before it show as completed. */
  currentStep: StepId<T>;
  /** Classes for the outer element, merged after the defaults. */
  className?: string;
  /**
   * Layout orientation of the step indicator.
   * Only available for the 'counter' variant.
   * The 'default' variant is always horizontal.
   */
  // orientation?: 'horizontal' | 'vertical';
  /**
   * Variant style of the step indicator.
   * - 'default': USWDS-style with header showing "Step X of Y" and segments
   * - 'counter': Counter style with numbered circles and connectors
   */
  variant?: 'default' | 'counter';
  /**
   * If true, the current step will be shown as completed instead of current.
   * Useful for showing the final step as completed when the process is finished.
   */
  showCurrentAsCompleted?: boolean;
  /**
   * The heading level for the step indicator header.
   * Defaults to 'h4'.
   */
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * If false, labels will not be shown below the segments or counter list.
   * Defaults to true.
   */
  showLabels?: boolean;
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
