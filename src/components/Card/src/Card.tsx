import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import {
  cardBodyClasses,
  cardClasses,
  cardFooterClasses,
  cardHeaderClasses,
  cardLinkClasses,
  cardMediaContentClasses,
  cardMediaFrameVariants,
  cardTitleClasses,
} from '../constants';
import {
  CardLinkProps,
  CardMediaProps,
  CardProps,
  CardSectionProps,
  CardTitleProps,
} from '../types';

/**
 * A bordered container for one item in a collection, aligned with the USWDS card.
 * Compose it from `CardHeader`, `CardMedia`, `CardBody` and `CardFooter`, in that DOM
 * order: the media is moved above the header with CSS, as USWDS requires.
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { className, layout = 'default', mediaPosition = 'left', headerFirst = false, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn('vero-card', cardClasses, className)}
        data-header-first={headerFirst}
        data-layout={layout}
        data-media-position={mediaPosition}
        {...props}
      />
    );
  },
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, CardSectionProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('vero-card-header', cardHeaderClasses, className)} {...props} />
  ),
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, headingLevel: HeadingTag = 'h3', ...props }, ref) => (
    <HeadingTag
      ref={ref}
      className={cn('vero-card-title', cardTitleClasses, className)}
      {...props}
    />
  ),
);
CardTitle.displayName = 'CardTitle';

/**
 * Makes the whole card a link. Place it inside `CardTitle` so the title is the link's
 * accessible name. Controls in `CardFooter` stay clickable; links in `CardBody` are
 * covered by the card link, so keep other actions in the footer.
 */
const CardLink = React.forwardRef<HTMLAnchorElement, CardLinkProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a';
    return (
      <Comp ref={ref} className={cn('vero-card-link', cardLinkClasses, className)} {...props} />
    );
  },
);
CardLink.displayName = 'CardLink';

const CardMedia = React.forwardRef<HTMLDivElement, CardMediaProps>(
  ({ className, src, alt, variant = 'default', aspectRatio, children, ...props }, ref) => (
    <div ref={ref} className={cn('vero-card-media', className)} data-variant={variant} {...props}>
      <div
        className={cn(
          'vero-card-media-frame',
          cardMediaFrameVariants({ aspectRatio }),
          cardMediaContentClasses,
        )}
      >
        {src ? <img alt={alt ?? ''} src={src} /> : children}
      </div>
    </div>
  ),
);
CardMedia.displayName = 'CardMedia';

const CardBody = React.forwardRef<HTMLDivElement, CardSectionProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('vero-card-body', cardBodyClasses, className)} {...props} />
  ),
);
CardBody.displayName = 'CardBody';

const CardFooter = React.forwardRef<HTMLDivElement, CardSectionProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('vero-card-footer', cardFooterClasses, className)} {...props} />
  ),
);
CardFooter.displayName = 'CardFooter';

export { Card, CardBody, CardFooter, CardHeader, CardLink, CardMedia, CardTitle };
