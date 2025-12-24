/**
 * Extracts the value and label from an option object, converting them to strings.
 */
export function extractOptionFields<T, K extends keyof T, L extends keyof T>(
  option: T,
  valueKey: K,
  labelKey: L,
): { value: string; label: string } {
  const optionValue = option[valueKey];
  const label = option[labelKey];

  let optLabel = '';
  if (typeof label === 'string') {
    optLabel = label;
  } else if (typeof label === 'number' || typeof label === 'boolean' || typeof label === 'bigint') {
    optLabel = String(label);
  }

  return {
    value: String(optionValue ?? ''),
    label: optLabel,
  };
}
