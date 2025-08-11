import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// IntelliSense-friendly Tailwind helper
export const tw = <T extends string>(strings: TemplateStringsArray, ...values: unknown[]): T => {
  return String.raw({ raw: strings }, ...values) as T;
};
