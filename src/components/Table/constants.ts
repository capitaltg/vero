import { tw } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import type { TableStackBreakpoint } from './types';

/**
 * USWDS-inspired styling for the `<table>` root. Structural rules are applied
 * with descendant selectors so the semantic primitives stay thin and the whole
 * look can be re-themed from one place.
 *
 * Colors use theme-adaptive tokens where possible (`muted`, `foreground`,
 * `input`) so the table works in the default, `.dark`, and `.theme-uswds`
 * themes. Grid lines use `base-500` (a mid gray) so they remain visible on both
 * light and dark surfaces.
 */
export const tableVariants = cva(
  tw`vero-table [&_tbody_th]:bg-muted/40 w-full border-collapse text-left align-top text-sm
  text-foreground [&_caption]:mb-3 [&_caption]:text-left [&_caption]:text-base [&_caption]:font-bold
  [&_caption]:text-foreground [&_tbody_th]:text-left [&_tbody_th]:align-middle [&_td]:px-4
  [&_td]:py-2 [&_td]:align-top [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:align-bottom
  [&_th]:font-bold [&_thead_th]:bg-muted [&_thead_th]:text-foreground`,
  {
    variants: {
      variant: {
        bordered: tw`[&_td]:border [&_td]:border-base-500 [&_th]:border [&_th]:border-base-500`,
        borderless: tw`[&_tbody_td]:border-b [&_tbody_td]:border-input [&_tbody_th]:border-b
        [&_tbody_th]:border-input [&_tbody_th]:bg-transparent [&_td]:border-0 [&_th]:border-0
        [&_thead_th]:border-b-2 [&_thead_th]:border-base-500 [&_thead_th]:bg-transparent`,
      },
      striped: {
        true: tw`[&_tbody_tr:nth-child(even)_td]:bg-muted/50`,
        false: '',
      },
      density: {
        default: '',
        compact: tw`text-[0.8125rem] [&_td]:px-3 [&_td]:py-1 [&_th]:px-3 [&_th]:py-1`,
      },
    },
    defaultVariants: {
      variant: 'bordered',
      striped: false,
      density: 'default',
    },
  },
);

/**
 * Card/stacked reflow, applied to the `<table>` root when
 * `responsive="stack"`. Rules are gated behind `max-*` (max-width) variants so
 * they apply ONLY below the breakpoint and leave the normal grid — and its
 * variant borders — untouched at and above it.
 *
 * Below the breakpoint the header row is hidden and each cell is laid out as a
 * label/value pair; {@link Table} renders a visible per-cell label so the
 * data stays perceivable.
 */
export const tableStackVariants: Record<TableStackBreakpoint, string> = {
  sm: tw`max-sm:[&_tbody_td]:flex max-sm:[&_tbody_td]:justify-between max-sm:[&_tbody_td]:gap-4
  max-sm:[&_tbody_td]:border-0 max-sm:[&_tbody_td]:border-b max-sm:[&_tbody_td]:border-input
  max-sm:[&_tbody_td]:text-right max-sm:[&_tbody_th]:flex max-sm:[&_tbody_th]:justify-between
  max-sm:[&_tbody_th]:gap-4 max-sm:[&_tbody_th]:border-0 max-sm:[&_tbody_th]:border-b
  max-sm:[&_tbody_th]:border-input max-sm:[&_tbody_th]:bg-transparent max-sm:[&_tbody_th]:text-right
  max-sm:[&_tbody_tr:last-child]:mb-0 max-sm:[&_tbody_tr>*:last-child]:border-b-0
  max-sm:[&_tbody_tr]:mb-4 max-sm:[&_tbody_tr]:block max-sm:[&_tbody_tr]:border
  max-sm:[&_tbody_tr]:border-base-500 max-sm:[&_thead]:hidden`,
  md: tw`max-md:[&_tbody_td]:flex max-md:[&_tbody_td]:justify-between max-md:[&_tbody_td]:gap-4
  max-md:[&_tbody_td]:border-0 max-md:[&_tbody_td]:border-b max-md:[&_tbody_td]:border-input
  max-md:[&_tbody_td]:text-right max-md:[&_tbody_th]:flex max-md:[&_tbody_th]:justify-between
  max-md:[&_tbody_th]:gap-4 max-md:[&_tbody_th]:border-0 max-md:[&_tbody_th]:border-b
  max-md:[&_tbody_th]:border-input max-md:[&_tbody_th]:bg-transparent max-md:[&_tbody_th]:text-right
  max-md:[&_tbody_tr:last-child]:mb-0 max-md:[&_tbody_tr>*:last-child]:border-b-0
  max-md:[&_tbody_tr]:mb-4 max-md:[&_tbody_tr]:block max-md:[&_tbody_tr]:border
  max-md:[&_tbody_tr]:border-base-500 max-md:[&_thead]:hidden`,
  lg: tw`max-lg:[&_tbody_td]:flex max-lg:[&_tbody_td]:justify-between max-lg:[&_tbody_td]:gap-4
  max-lg:[&_tbody_td]:border-0 max-lg:[&_tbody_td]:border-b max-lg:[&_tbody_td]:border-input
  max-lg:[&_tbody_td]:text-right max-lg:[&_tbody_th]:flex max-lg:[&_tbody_th]:justify-between
  max-lg:[&_tbody_th]:gap-4 max-lg:[&_tbody_th]:border-0 max-lg:[&_tbody_th]:border-b
  max-lg:[&_tbody_th]:border-input max-lg:[&_tbody_th]:bg-transparent max-lg:[&_tbody_th]:text-right
  max-lg:[&_tbody_tr:last-child]:mb-0 max-lg:[&_tbody_tr>*:last-child]:border-b-0
  max-lg:[&_tbody_tr]:mb-4 max-lg:[&_tbody_tr]:block max-lg:[&_tbody_tr]:border
  max-lg:[&_tbody_tr]:border-base-500 max-lg:[&_thead]:hidden`,
};

/**
 * Visibility classes for the per-cell stacked label (shown below the
 * breakpoint, hidden at and above it). Kept as literal strings so Tailwind's
 * content scanner picks them up.
 */
export const tableStackLabelVisibility: Record<TableStackBreakpoint, string> = {
  sm: tw`hidden max-sm:block`,
  md: tw`hidden max-md:block`,
  lg: tw`hidden max-lg:block`,
};
