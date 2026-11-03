import { VariantProps } from 'class-variance-authority';
import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { cardGroupVariants, cardMediaFrameVariants } from './constants';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * `flag` places the media beside the content (USWDS `usa-card--flag`) from the `sm`
   * breakpoint (640px) up, and stacks it on top below that. Requires a `CardMedia`.
   * Defaults to `default`.
   */
  layout?: 'default' | 'flag';
  /**
   * Which side the media sits on in the `flag` layout (USWDS `usa-card--media-right`).
   * Defaults to `left`.
   */
  mediaPosition?: 'left' | 'right';
  /**
   * Show the header above the media instead of below it (USWDS
   * `usa-card--header-first`). Defaults to `false`.
   */
  headerFirst?: boolean;
}

export type CardSectionProps = HTMLAttributes<HTMLDivElement>;

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * The heading level. Pick the level that fits the page outline. Defaults to `h3`.
   */
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export interface CardLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Render the child element instead of an `<a>`, merging props onto it. Use this for
   * router links, e.g. `<CardLink asChild><Link href="/keys">Florida Keys</Link></CardLink>`.
   */
  asChild?: boolean;
}

export interface CardMediaProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardMediaFrameVariants> {
  /** Image source. Pass `children` instead to render your own media element. */
  src?: string;
  /**
   * Image alt text. Use `""` when the image is decorative, which is usual when the card
   * title already says what the image shows.
   */
  alt?: string;
  /**
   * `inset` pads the media inside the card's border (USWDS `usa-card__media--inset`).
   * `exdent` extends it over the border to the card's edge (USWDS
   * `usa-card__media--exdent`). Defaults to `default`.
   */
  variant?: 'default' | 'inset' | 'exdent';
  children?: ReactNode;
}

export interface CardGroupProps
  extends HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof cardGroupVariants> {
  children: ReactNode;
}
