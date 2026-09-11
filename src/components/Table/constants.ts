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
 *
 * Note: those tokens are raw `var(--token)` colors, so Tailwind cannot apply an
 * opacity modifier to them — `bg-muted/40` compiles to nothing at all. Use the
 * flat token (`bg-muted`) rather than a tinted one.
 */
export const tableVariants = cva(
  tw`vero-table w-full border-collapse text-left align-top text-sm text-foreground [&_caption]:mb-3
  [&_caption]:text-left [&_caption]:text-base [&_caption]:font-bold [&_caption]:text-foreground
  [&_tbody_th]:bg-muted [&_tbody_th]:text-left [&_tbody_th]:align-middle [&_td]:px-4 [&_td]:py-2
  [&_td]:align-top [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:align-bottom [&_th]:font-bold
  [&_thead_th]:bg-muted [&_thead_th]:text-foreground`,
  {
    variants: {
      variant: {
        bordered: tw`[&_td]:border [&_td]:border-base-500 [&_th]:border [&_th]:border-base-500`,
        borderless: tw`[&_tbody_td]:border-b [&_tbody_td]:border-input [&_tbody_th]:border-b
        [&_tbody_th]:border-input [&_tbody_th]:bg-transparent [&_td]:border-0 [&_th]:border-0
        [&_thead_th]:border-b-2 [&_thead_th]:border-base-500 [&_thead_th]:bg-transparent`,
      },
      striped: {
        true: tw`[&_tbody_tr:nth-child(even)_td]:bg-muted`,
        false: '',
      },
      density: {
        default: '',
        compact: tw`text-[0.8125rem] [&_td]:px-3 [&_td]:py-1 [&_th]:px-3 [&_th]:py-1`,
      },
      /**
       * Pins the header row to the top of the viewport while the body scrolls
       * past it (USWDS `usa-table--sticky-header`). Sticky cells need
       * `border-separate` so their borders travel with them instead of being
       * collapsed into the neighbouring cell.
       */
      stickyHeader: {
        true: tw`border-separate border-spacing-0 [&_tbody_tr:last-child>*]:border-b-0
        [&_td]:border-l-0 [&_td]:border-t-0 [&_th]:border-l-0 [&_th]:border-t-0 [&_thead_th]:sticky
        [&_thead_th]:top-0 [&_thead_th]:z-10 [&_tr>*:last-child]:border-r-0`,
        false: '',
      },
    },
    compoundVariants: [
      // border-collapse: separate drops the table's own outer edge, so a
      // bordered sticky table draws it back on the <table> itself.
      { stickyHeader: true, variant: 'bordered', class: tw`border border-base-500` },
    ],
    defaultVariants: {
      variant: 'bordered',
      striped: false,
      density: 'default',
      stickyHeader: false,
    },
  },
);

/**
 * Card/stacked reflow, applied to the `<table>` root when
 * `responsive="stack"`. Rules are gated behind `max-*` (max-width) variants so
 * they apply ONLY below the breakpoint and leave the normal grid — and its
 * variant borders — untouched at and above it.
 *
 * These are the USWDS `usa-table--stacked` / `usa-table--stacked-header` rules,
 * restated as utilities (Prettier sorts the class strings, so read them here):
 *
 * 1. `thead` is hidden — each cell carries its own label instead.
 * 2. Each row becomes a card, separated by a heavy bottom rule on the `<tr>`.
 * 3. Cells become full-width blocks; their bottom grid line and any stripe are
 *    dropped so the remaining side borders read as the card's edges. (Forcing
 *    `text-left` is ours, not USWDS's: a right-aligned value reads as detached
 *    from the label sitting above it.)
 * 4. The seam between cards: the first cell of a row loses its top rule, and
 *    the very first cell gets the same heavy rule that closes each card.
 * 5. A cell's `data-label` renders above its value as a bold label
 *    (`content: attr(data-label)`), exactly like USWDS. {@link DataTable} fills
 *    `data-label` in from the column definitions, and `Table` derives it from
 *    the header row for hand-composed tables, so both work with no extra
 *    markup.
 * 6. With `stackedStyle="headers"` (USWDS `usa-table--stacked-header`) the
 *    first cell of each card becomes the card's heading and drops its label.
 *
 * The three breakpoints are spelled out because Tailwind only generates classes
 * it can find as literal strings in the source.
 */
export const tableStackVariants: Record<TableStackBreakpoint, string> = {
  sm: tw`max-sm:[&[data-stacked-style=headers]_tbody_tr>*:first-child]:bg-muted
  max-sm:[&[data-stacked-style=headers]_tbody_tr>*:first-child]:px-4
  max-sm:[&[data-stacked-style=headers]_tbody_tr>*:first-child]:py-3
  max-sm:[&[data-stacked-style=headers]_tbody_tr>*:first-child]:text-lg
  max-sm:[&[data-stacked-style=headers]_tbody_tr>*:first-child]:font-bold
  max-sm:[&[data-stacked-style=headers]_tbody_tr>*:first-child]:before:hidden
  max-sm:[&_tbody_[data-label]]:pb-3 max-sm:[&_tbody_[data-label]]:before:block
  max-sm:[&_tbody_[data-label]]:before:pb-1 max-sm:[&_tbody_[data-label]]:before:font-bold
  max-sm:[&_tbody_[data-label]]:before:content-[attr(data-label)] max-sm:[&_tbody_td]:block
  max-sm:[&_tbody_td]:w-full max-sm:[&_tbody_td]:border-b-0 max-sm:[&_tbody_td]:text-left
  max-sm:[&_tbody_th]:block max-sm:[&_tbody_th]:w-full max-sm:[&_tbody_th]:border-b-0
  max-sm:[&_tbody_th]:bg-transparent max-sm:[&_tbody_th]:text-left
  max-sm:[&_tbody_tr:first-child>*:first-child]:border-t-4
  max-sm:[&_tbody_tr:first-child>*:first-child]:border-base-500
  max-sm:[&_tbody_tr:nth-child(even)_td]:bg-transparent max-sm:[&_tbody_tr>*:first-child]:border-t-0
  max-sm:[&_tbody_tr]:border-0 max-sm:[&_tbody_tr]:border-b-4 max-sm:[&_tbody_tr]:border-base-500
  max-sm:[&_thead]:hidden`,

  md: tw`max-md:[&[data-stacked-style=headers]_tbody_tr>*:first-child]:bg-muted
  max-md:[&[data-stacked-style=headers]_tbody_tr>*:first-child]:px-4
  max-md:[&[data-stacked-style=headers]_tbody_tr>*:first-child]:py-3
  max-md:[&[data-stacked-style=headers]_tbody_tr>*:first-child]:text-lg
  max-md:[&[data-stacked-style=headers]_tbody_tr>*:first-child]:font-bold
  max-md:[&[data-stacked-style=headers]_tbody_tr>*:first-child]:before:hidden
  max-md:[&_tbody_[data-label]]:pb-3 max-md:[&_tbody_[data-label]]:before:block
  max-md:[&_tbody_[data-label]]:before:pb-1 max-md:[&_tbody_[data-label]]:before:font-bold
  max-md:[&_tbody_[data-label]]:before:content-[attr(data-label)] max-md:[&_tbody_td]:block
  max-md:[&_tbody_td]:w-full max-md:[&_tbody_td]:border-b-0 max-md:[&_tbody_td]:text-left
  max-md:[&_tbody_th]:block max-md:[&_tbody_th]:w-full max-md:[&_tbody_th]:border-b-0
  max-md:[&_tbody_th]:bg-transparent max-md:[&_tbody_th]:text-left
  max-md:[&_tbody_tr:first-child>*:first-child]:border-t-4
  max-md:[&_tbody_tr:first-child>*:first-child]:border-base-500
  max-md:[&_tbody_tr:nth-child(even)_td]:bg-transparent max-md:[&_tbody_tr>*:first-child]:border-t-0
  max-md:[&_tbody_tr]:border-0 max-md:[&_tbody_tr]:border-b-4 max-md:[&_tbody_tr]:border-base-500
  max-md:[&_thead]:hidden`,

  lg: tw`max-lg:[&[data-stacked-style=headers]_tbody_tr>*:first-child]:bg-muted
  max-lg:[&[data-stacked-style=headers]_tbody_tr>*:first-child]:px-4
  max-lg:[&[data-stacked-style=headers]_tbody_tr>*:first-child]:py-3
  max-lg:[&[data-stacked-style=headers]_tbody_tr>*:first-child]:text-lg
  max-lg:[&[data-stacked-style=headers]_tbody_tr>*:first-child]:font-bold
  max-lg:[&[data-stacked-style=headers]_tbody_tr>*:first-child]:before:hidden
  max-lg:[&_tbody_[data-label]]:pb-3 max-lg:[&_tbody_[data-label]]:before:block
  max-lg:[&_tbody_[data-label]]:before:pb-1 max-lg:[&_tbody_[data-label]]:before:font-bold
  max-lg:[&_tbody_[data-label]]:before:content-[attr(data-label)] max-lg:[&_tbody_td]:block
  max-lg:[&_tbody_td]:w-full max-lg:[&_tbody_td]:border-b-0 max-lg:[&_tbody_td]:text-left
  max-lg:[&_tbody_th]:block max-lg:[&_tbody_th]:w-full max-lg:[&_tbody_th]:border-b-0
  max-lg:[&_tbody_th]:bg-transparent max-lg:[&_tbody_th]:text-left
  max-lg:[&_tbody_tr:first-child>*:first-child]:border-t-4
  max-lg:[&_tbody_tr:first-child>*:first-child]:border-base-500
  max-lg:[&_tbody_tr:nth-child(even)_td]:bg-transparent max-lg:[&_tbody_tr>*:first-child]:border-t-0
  max-lg:[&_tbody_tr]:border-0 max-lg:[&_tbody_tr]:border-b-4 max-lg:[&_tbody_tr]:border-base-500
  max-lg:[&_thead]:hidden`,
};
