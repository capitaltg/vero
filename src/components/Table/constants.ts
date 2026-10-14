import { tw } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import type { TableStackBreakpoint } from './types';

/**
 * USWDS-inspired styling for the `<table>` root: only what belongs to the table
 * itself. Rows, cells and the caption style themselves (see
 * {@link tableCellVariants}), reading the table's settings from context, so the
 * look never leaks into a table nested inside a cell and every class on a cell
 * carries the same weight as a consumer's own.
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
  tw`vero-table w-full border-collapse text-left align-top text-sm text-foreground`,
  {
    variants: {
      variant: {
        bordered: '',
        borderless: '',
      },
      striped: {
        true: '',
        false: '',
      },
      density: {
        default: '',
        compact: tw`text-[0.8125rem]`,
      },
      /**
       * Pins the header row to the top of the viewport while the body scrolls
       * past it (USWDS `usa-table--sticky-header`). Sticky cells need
       * `border-separate` so their borders travel with them instead of being
       * collapsed into the neighbouring cell.
       */
      stickyHeader: {
        true: tw`border-separate border-spacing-0`,
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

/** The `<caption>`'s own styling. */
export const tableCaptionClasses = tw`mb-3 text-left text-base font-bold text-foreground`;

/**
 * Styling for a `<th>` or `<td>`, driven by the table's settings and the
 * section the cell sits in. Later classes win where two conflict (`cn` merges
 * them), so the compound variants refine the base ones.
 *
 * Striping isn't here: it depends on whether the table stacks, so the cell
 * picks {@link tableStripeClass} or a breakpoint-scoped stripe itself.
 */
export const tableCellVariants = cva('', {
  variants: {
    kind: {
      th: tw`text-left align-bottom font-bold`,
      td: tw`align-top`,
    },
    section: {
      head: '',
      body: '',
      foot: '',
    },
    variant: {
      bordered: tw`border border-base-500`,
      borderless: tw`border-0`,
    },
    density: {
      default: tw`px-4 py-2`,
      compact: tw`px-3 py-1`,
    },
    stickyHeader: {
      true: tw`border-l-0 border-t-0 last:border-r-0`,
      false: '',
    },
  },
  compoundVariants: [
    { kind: 'th', section: 'head', class: tw`bg-muted text-foreground` },
    { kind: 'th', section: 'body', class: tw`bg-muted align-middle` },
    { variant: 'borderless', section: 'body', class: tw`border-b border-input` },
    { variant: 'borderless', kind: 'th', section: 'body', class: tw`bg-transparent` },
    {
      variant: 'borderless',
      kind: 'th',
      section: 'head',
      class: tw`border-b-2 border-base-500 bg-transparent`,
    },
    { stickyHeader: true, kind: 'th', section: 'head', class: tw`sticky top-0 z-10` },
    { stickyHeader: true, section: 'body', class: tw`[tr:last-child>&]:border-b-0` },
  ],
  defaultVariants: {
    variant: 'bordered',
    density: 'default',
    stickyHeader: false,
  },
});

/** Tints every other body row's data cells for `striped` tables. */
export const tableStripeClass = tw`[tr:nth-child(even)>&]:bg-muted`;

/** Classes each primitive applies to itself while its table is stacked. */
export interface TableStackClasses {
  /** `<thead>`: hidden — each cell carries its own label instead. */
  header: string;
  /** Body `<tr>`: each row becomes a card, closed by a heavy bottom rule. */
  row: string;
  /** Every body cell (`<td>` and row-header `<th>`). */
  cell: string;
  /** Body `<th>` (row headers) only. */
  headerCell: string;
  /**
   * The `striped` tint, scoped to at and above the breakpoint so a card never
   * carries a stripe — and so there is nothing for the card heading to undo.
   */
  stripe: string;
  /** A body cell that renders a stacked label. */
  labelledCell: string;
  /** The label element rendered above a cell's value. */
  label: string;
  /** Extra classes on body cells for `stackedStyle="headers"`. */
  headingCell: string;
  /** Extra classes on labels for `stackedStyle="headers"`. */
  headingLabel: string;
}

/**
 * Card/stacked reflow for `responsive="stack"`. `Table` shares its stacked
 * settings through context and each primitive applies its own slice of these
 * classes, so the rules only reach the table they belong to — a nested table
 * is unaffected. Everything is gated behind `max-*` (max-width) variants so it
 * applies ONLY below the breakpoint, leaving the normal grid untouched at and
 * above it.
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
 * 5. A cell's `label` renders above its value as a bold label. USWDS draws it
 *    with `content: attr(data-label)`; here it is a real element, so it can
 *    hold any React content.
 * 6. With `stackedStyle="headers"` (USWDS `usa-table--stacked-header`) the
 *    first cell of each card becomes the card's heading and drops its label.
 *
 * These sit beside the base cell classes from {@link tableCellVariants} at the
 * same weight, and Tailwind emits `max-*` utilities after unprefixed ones, so
 * below the breakpoint they win by source order alone.
 *
 * The three breakpoints are spelled out because Tailwind only generates classes
 * it can find as literal strings in the source.
 */
export const tableStackClasses: Record<TableStackBreakpoint, TableStackClasses> = {
  sm: {
    header: tw`max-sm:hidden`,
    row: tw`max-sm:border-0 max-sm:border-b-4 max-sm:border-base-500`,
    cell: tw`max-sm:block max-sm:w-full max-sm:border-b-0 max-sm:text-left max-sm:first:border-t-0
    max-sm:[tr:first-child>&]:first:border-t-4 max-sm:[tr:first-child>&]:first:border-base-500`,
    headerCell: tw`max-sm:bg-transparent`,
    stripe: tw`sm:[tr:nth-child(even)>&]:bg-muted`,
    labelledCell: tw`max-sm:pb-3`,
    label: tw`hidden pb-1 font-bold max-sm:block`,
    headingCell: tw`max-sm:first:bg-muted max-sm:first:px-4 max-sm:first:py-3 max-sm:first:text-lg
    max-sm:first:font-bold`,
    headingLabel: tw`max-sm:[tr>:first-child>&]:hidden`,
  },
  md: {
    header: tw`max-md:hidden`,
    row: tw`max-md:border-0 max-md:border-b-4 max-md:border-base-500`,
    cell: tw`max-md:block max-md:w-full max-md:border-b-0 max-md:text-left max-md:first:border-t-0
    max-md:[tr:first-child>&]:first:border-t-4 max-md:[tr:first-child>&]:first:border-base-500`,
    headerCell: tw`max-md:bg-transparent`,
    stripe: tw`md:[tr:nth-child(even)>&]:bg-muted`,
    labelledCell: tw`max-md:pb-3`,
    label: tw`hidden pb-1 font-bold max-md:block`,
    headingCell: tw`max-md:first:bg-muted max-md:first:px-4 max-md:first:py-3 max-md:first:text-lg
    max-md:first:font-bold`,
    headingLabel: tw`max-md:[tr>:first-child>&]:hidden`,
  },
  lg: {
    header: tw`max-lg:hidden`,
    row: tw`max-lg:border-0 max-lg:border-b-4 max-lg:border-base-500`,
    cell: tw`max-lg:block max-lg:w-full max-lg:border-b-0 max-lg:text-left max-lg:first:border-t-0
    max-lg:[tr:first-child>&]:first:border-t-4 max-lg:[tr:first-child>&]:first:border-base-500`,
    headerCell: tw`max-lg:bg-transparent`,
    stripe: tw`lg:[tr:nth-child(even)>&]:bg-muted`,
    labelledCell: tw`max-lg:pb-3`,
    label: tw`hidden pb-1 font-bold max-lg:block`,
    headingCell: tw`max-lg:first:bg-muted max-lg:first:px-4 max-lg:first:py-3 max-lg:first:text-lg
    max-lg:first:font-bold`,
    headingLabel: tw`max-lg:[tr>:first-child>&]:hidden`,
  },
};
