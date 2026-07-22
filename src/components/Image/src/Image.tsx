import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { ImageProps } from '../types';

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, fallback, isLazy = true, shape = 'square', className, onError, ...props }, ref) => {
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Reset error/loading state when `src` changes, so a newly valid src is shown instead
    // of continuing to display the fallback or a stale loading skeleton. This runs during
    // render (React's "adjusting state when a prop changes" pattern) rather than in an
    // effect: an effect runs asynchronously after commit and could reset `isLoading` to
    // true *after* the new image's load event already fired, leaving the skeleton (the
    // "gray box") shown forever with no further load event to clear it.
    const [trackedSrc, setTrackedSrc] = useState(src);
    if (src !== trackedSrc) {
      setTrackedSrc(src);
      setHasError(false);
      setIsLoading(true);
    }

    const handleError = (evt: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setHasError(true);
      onError?.(evt);
    };

    const handleLoad = () => {
      setIsLoading(false);
    };

    const shapeStyles = {
      square: '',
      rounded: 'rounded-lg',
      circle: 'rounded-full',
    };

    return (
      <div className={cn('vero-image', 'relative overflow-hidden', shapeStyles[shape], className)}>
        {isLoading ? (
          <div
            aria-hidden="true"
            className="absolute inset-0 animate-pulse bg-muted"
            role="presentation"
          />
        ) : null}
        <img
          ref={ref}
          alt={alt}
          className={cn('h-full w-full object-cover', isLoading && 'invisible')}
          loading={isLazy ? 'lazy' : 'eager'}
          src={hasError && fallback ? fallback : src}
          onError={handleError}
          onLoad={handleLoad}
          {...props}
        />
      </div>
    );
  },
);
Image.displayName = 'Image';

export { Image };
