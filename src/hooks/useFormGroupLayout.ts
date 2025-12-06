import { cn } from '@/lib/utils';

export type UseFormGroupLayoutOptions = {
  variant?: 'default' | 'tile' | 'button';
  orientation?: 'horizontal' | 'vertical';
  columns?: 1 | 2 | 3 | 4;
};

/**
 * Hook for generating className strings for form group layouts.
 *
 * Handles the layout logic for form control groups (RadioGroup, CheckboxGroup)
 * with support for different variants, orientations, and column layouts.
 *
 * @param options - Layout configuration options
 * @returns className string for the form group container
 */
export function useFormGroupLayout({
  variant = 'default',
  orientation = 'vertical',
  columns = 2,
}: UseFormGroupLayoutOptions = {}): string {
  return cn(
    variant === 'default' && orientation === 'horizontal' && 'flex flex-row gap-5',
    variant === 'default' && orientation === 'vertical' && 'grid gap-3',
    variant === 'default' && orientation === 'vertical' && columns === 1 && 'grid-cols-1',
    variant === 'default' && orientation === 'vertical' && columns === 2 && 'grid-cols-2',
    variant === 'default' && orientation === 'vertical' && columns === 3 && 'grid-cols-3',
    variant === 'default' && orientation === 'vertical' && columns === 4 && 'grid-cols-4',
    variant === 'tile' && 'grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3',
    variant === 'button' &&
      orientation === 'horizontal' &&
      `flex flex-row gap-0 [&>*:first-child]:ml-0 [&>*:first-child]:rounded-l-sm
      [&>*:last-child]:rounded-r-sm [&>*]:-ml-[1px] [&>*]:rounded-none`,
    variant === 'button' &&
      orientation === 'vertical' &&
      `flex flex-col gap-0 [&>*:first-child]:mt-0 [&>*:first-child]:rounded-t-sm
      [&>*:last-child]:rounded-b-sm [&>*]:-mt-[1px] [&>*]:rounded-none`,
  );
}
