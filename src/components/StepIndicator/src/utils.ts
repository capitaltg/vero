export type StepIndicatorStatus = 'default' | 'current' | 'completed';

/**
 * Calculates the status of a step based on whether it's current or completed.
 */
export function calculateStepStatus(isCurrent: boolean, isCompleted: boolean): StepIndicatorStatus {
  if (isCompleted) {
    return 'completed';
  }
  if (isCurrent) {
    return 'current';
  }
  return 'default';
}

/**
 * Gets the screen reader text suffix for a step based on its status.
 */
export function getStepStatusSuffix(status: StepIndicatorStatus): string {
  if (status === 'completed') {
    return ' completed';
  }
  if (status === 'current') {
    return '';
  }
  return ' not completed';
}
