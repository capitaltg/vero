/**
 * Returns the `checked` prop object only when the value is defined (controlled mode).
 * Omit it when undefined so the radio can be used uncontrolled.
 */
export function getCheckedProp(isChecked: boolean | undefined): { checked?: boolean } {
  return isChecked === undefined ? {} : { checked: isChecked };
}
