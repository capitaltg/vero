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
  const isGridVariant = variant === 'default' || variant === 'tile';
  const isButtonVariant = variant === 'button';

  if (isButtonVariant) {
    return cn(
      orientation === 'horizontal' &&
        `flex flex-row gap-0 [&>*:first-child]:ml-0 [&>*:first-child]:rounded-l-sm
        [&>*:last-child]:rounded-r-sm [&>*]:-ml-[1px] [&>*]:rounded-none`,
      orientation === 'vertical' &&
        `flex flex-col gap-0 [&>*:first-child]:mt-0 [&>*:first-child]:rounded-t-sm
        [&>*:last-child]:rounded-b-sm [&>*]:-mt-[1px] [&>*]:rounded-none`,
    );
  }

  if (isGridVariant) {
    return cn(
      orientation === 'horizontal' && 'flex flex-row gap-5',
      orientation === 'vertical' && 'grid gap-3',
      orientation === 'vertical' && columns === 1 && 'grid-cols-1',
      orientation === 'vertical' && columns === 2 && 'grid-cols-1 md:grid-cols-2',
      orientation === 'vertical' && columns === 3 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      orientation === 'vertical' &&
        columns === 4 &&
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    );
  }

  return '';
}
