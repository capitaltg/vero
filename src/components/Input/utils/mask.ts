import type { InputMask, MaskPattern } from '../types';

/**
 * Predefined mask patterns
 */
const MASK_PATTERNS: Record<MaskPattern, string> = {
  // Phone
  phone: '(999) 999-9999',
  'phone-us': '(999) 999-9999',
  'phone-international': '+99 999 999 9999',
  'phone-uk': '+44 9999 999999',
  'phone-ca': '(999) 999-9999',
  'phone-us-ext': '(999) 999-9999 x9999',
  // Identification
  ssn: '999-99-9999',
  'tax-id': '99-9999999',
  passport: 'a99999999',
  license: 'a9999999',
  'a-number': 'A999999999',
  'z-number': 'Z999999999',
  // Financial
  'credit-card': '9999 9999 9999 9999',
  'credit-card-amex': '9999 999999 99999',
  'routing-number': '999999999',
  currency: '$999,999.99',
  // Dates & Time
  date: '99/99/9999',
  'date-us': '99/99/9999',
  'date-iso': '9999-99-99',
  'date-eu': '99/99/9999',
  time: '99:99 AM',
  'time-24': '99:99',
  datetime: '99/99/9999 99:99',
  // Address
  'zip-code': '99999',
  'zip-code-us': '99999-9999',
  'postal-ca': 'a9a 9a9',
  'postal-uk': 'aa99 9aa',
};

/**
 * Gets the mask pattern string from a mask input
 */
export function getMaskPattern(mask: InputMask | undefined): string | null {
  if (!mask) return null;
  return MASK_PATTERNS[mask as MaskPattern] || mask;
}

/**
 * Extracts raw input characters from a value (removes mask formatting)
 */
function extractRawValue(value: string): string {
  return value.replaceAll(/[^\da-zA-Z]/g, '');
}

/**
 * Checks if a pattern character is a placeholder
 */
function isPlaceholder(char: string): boolean {
  return char === '9' || char === 'a' || char === '*';
}

/**
 * Checks if a character matches a placeholder pattern
 */
function matchesPlaceholder(char: string, placeholder: string): boolean {
  if (placeholder === '9') return /\d/.test(char);
  if (placeholder === 'a') return /[a-zA-Z]/.test(char);
  if (placeholder === '*') return /[\da-zA-Z]/.test(char);
  return false;
}

type MaskState = {
  maskedValue: string;
  valueIndex: number;
  hasProcessedInput: boolean;
  shouldBreak: boolean;
};

/**
 * Processes a placeholder character in the pattern
 */
function processPlaceholderChar(
  patternChar: string,
  rawValue: string,
  state: MaskState,
): MaskState {
  if (state.valueIndex >= rawValue.length) {
    return { ...state, shouldBreak: true };
  }

  const char = rawValue[state.valueIndex];
  if (matchesPlaceholder(char, patternChar)) {
    return {
      maskedValue: state.maskedValue + char,
      valueIndex: state.valueIndex + 1,
      hasProcessedInput: true,
      shouldBreak: false,
    };
  }

  return { ...state, shouldBreak: true };
}

/**
 * Checks if a trailing literal should be added when at end of input
 */
function shouldAddTrailingLiteral(remainingPattern: string): boolean {
  const nextPlaceholderIdx = remainingPattern.search(/[9a*]/);
  // Add literal only if there are more literals before the next placeholder
  return nextPlaceholderIdx > 0;
}

/**
 * Processes a literal character in the pattern
 */
function processLiteralChar(
  patternChar: string,
  rawValue: string,
  pattern: string,
  patternIndex: number,
  isDeleting: boolean,
  state: MaskState,
): MaskState {
  // Case 1: There's more input to process
  if (state.valueIndex < rawValue.length) {
    const newValueIndex =
      rawValue[state.valueIndex] === patternChar ? state.valueIndex + 1 : state.valueIndex;
    return {
      ...state,
      maskedValue: state.maskedValue + patternChar,
      valueIndex: newValueIndex,
    };
  }

  // Case 2: No more input, adding mode, and we've processed some input
  if (!isDeleting && state.hasProcessedInput) {
    const remainingPattern = pattern.slice(patternIndex + 1);
    if (shouldAddTrailingLiteral(remainingPattern)) {
      return { ...state, maskedValue: state.maskedValue + patternChar };
    }
  }

  // Case 3: Stop processing
  return { ...state, shouldBreak: true };
}

/**
 * Applies a mask pattern to a value
 * @param value - The input value (may already contain some mask characters)
 * @param pattern - The mask pattern string
 * @param isDeleting - Whether the user is deleting (affects literal handling)
 * @returns The masked/formatted value
 */
export function applyMask(value: string, pattern: string, isDeleting = false): string {
  if (!pattern) return value;

  const rawValue = extractRawValue(value);
  if (!rawValue) return '';

  let state: MaskState = {
    maskedValue: '',
    valueIndex: 0,
    hasProcessedInput: false,
    shouldBreak: false,
  };

  for (let i = 0; i < pattern.length; i++) {
    const patternChar = pattern[i];

    state = isPlaceholder(patternChar)
      ? processPlaceholderChar(patternChar, rawValue, state)
      : processLiteralChar(patternChar, rawValue, pattern, i, isDeleting, state);

    if (state.shouldBreak) break;
  }

  return state.maskedValue;
}

/**
 * Gets the raw value length from a masked value
 */
export function getRawLength(value: string): number {
  return extractRawValue(value).length;
}

type RemoveMaskState = {
  rawValue: string[];
  valueIndex: number;
  patternIndex: number;
};

/**
 * Processes a placeholder when removing mask
 */
function processPlaceholderRemoval(
  patternChar: string,
  valueChar: string,
  nextPatternChar: string | undefined,
  state: RemoveMaskState,
): RemoveMaskState {
  if (matchesPlaceholder(valueChar, patternChar)) {
    return {
      rawValue: [...state.rawValue, valueChar],
      valueIndex: state.valueIndex + 1,
      patternIndex: state.patternIndex,
    };
  }

  // Skip literal if it matches the next pattern char
  if (valueChar === nextPatternChar) {
    return { ...state, patternIndex: state.patternIndex + 1 };
  }

  return { ...state, valueIndex: state.valueIndex + 1 };
}

/**
 * Processes a literal character when removing mask
 */
function processLiteralRemoval(
  patternChar: string,
  valueChar: string,
  remainingPattern: string,
  state: RemoveMaskState,
): RemoveMaskState {
  if (valueChar === patternChar) {
    return { ...state, valueIndex: state.valueIndex + 1 };
  }

  // If value char doesn't match literal, check if next pattern char is a placeholder
  const hasNextPlaceholder = /^[9a*]/.test(remainingPattern);
  if (hasNextPlaceholder) {
    // Don't advance valueIndex, let the next iteration handle it
    return state;
  }

  return { ...state, valueIndex: state.valueIndex + 1 };
}

/**
 * Removes mask formatting from a value, returning only the raw input
 * @param value - The masked/formatted value
 * @param pattern - The mask pattern string
 * @returns The raw value without mask characters
 */
export function removeMask(value: string, pattern: string): string {
  if (!pattern) return value;

  let state: RemoveMaskState = { rawValue: [], valueIndex: 0, patternIndex: 0 };

  for (let i = 0; i < pattern.length && state.valueIndex < value.length; i = state.patternIndex) {
    const patternChar = pattern[i];
    const valueChar = value[state.valueIndex];
    state.patternIndex = i + 1;

    state = isPlaceholder(patternChar)
      ? processPlaceholderRemoval(patternChar, valueChar, pattern[i + 1], state)
      : processLiteralRemoval(patternChar, valueChar, pattern.slice(i + 1), state);
  }

  return state.rawValue.join('');
}
