import { tw } from '@/lib/utils';
import { cva } from 'class-variance-authority';

/* Sizes follow the USWDS card defaults (`$theme-card-*`): a 2px border, `lg` radius,
   24px perimeter padding and 16px between sections, split 8px either side of each
   section boundary. The rules that depend on a part's siblings or on the card's layout
   (flag layout, header-first ordering, media corners, the linked-card hover and focus
   states) live in `src/styles/components.css`, keyed on the card's data attributes. */

export const cardClasses = tw`relative flex h-full flex-col rounded-lg border-2 border-muted bg-card
text-card-foreground`;

export const cardHeaderClasses = tw`px-6 pb-2 pt-6 last:pb-6 [&>:first-child]:mt-0
[&>:last-child]:mb-0`;

export const cardTitleClasses = tw`m-0 text-xl font-bold leading-tight`;

/* The `::after` overlay stretches the link over the whole card (the nearest positioned
   ancestor), so the title stays the link's accessible name while the card is the click
   target. The footer sits above the overlay so its own controls stay clickable. */
export const cardLinkClasses = tw`text-inherit no-underline after:absolute after:inset-0
after:rounded-lg after:content-[''] hover:underline focus-visible:outline-none`;

export const cardBodyClasses = tw`flex-1 px-6 py-2 first:pt-6 last:pb-6 [&>:first-child]:mt-0
[&>:last-child]:mb-0`;

export const cardFooterClasses = tw`relative z-[1] mt-auto px-6 pb-6 pt-2 first:pt-6`;

export const cardMediaFrameVariants = cva('relative overflow-hidden bg-base-100', {
  variants: {
    aspectRatio: {
      auto: '',
      video: 'aspect-video',
      '4/3': 'aspect-[4/3]',
      square: 'aspect-square',
    },
  },
  defaultVariants: {
    aspectRatio: 'video',
  },
});

export const cardMediaContentClasses = tw`[&>*]:block [&>*]:size-full [&>*]:object-cover`;

/* USWDS shows one column below `tablet-lg` (880px), two up to `widescreen` (1400px) and
   three beyond. The nearest Tailwind breakpoints are `md` (768px) and `xl` (1280px).
   Spelled out per column count because Tailwind only generates literal class names. */
export const cardGroupVariants = cva('m-0 grid list-none grid-cols-1 gap-x-4 gap-y-8 p-0', {
  variants: {
    columns: {
      1: '',
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-2 xl:grid-cols-3',
      4: 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    },
  },
  defaultVariants: {
    columns: 3,
  },
});
