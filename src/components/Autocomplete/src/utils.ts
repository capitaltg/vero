/**
 * Extracts the value and label from an option object, converting them to strings.
 */
export function extractOptionFields<T>(option: T): { value: string; label: string } {
  const opt = option as Record<string, unknown>;
  const optionValue = opt.value;
  const label = opt.label;

  let optValue = '';
  if (typeof optionValue === 'string') {
    optValue = optionValue;
  } else if (
    typeof optionValue === 'number' ||
    typeof optionValue === 'boolean' ||
    typeof optionValue === 'bigint'
  ) {
    optValue = String(optionValue);
  }

  let optLabel = '';
  if (typeof label === 'string') {
    optLabel = label;
  } else if (typeof label === 'number' || typeof label === 'boolean' || typeof label === 'bigint') {
    optLabel = String(label);
  }

  return { value: optValue, label: optLabel };
}
