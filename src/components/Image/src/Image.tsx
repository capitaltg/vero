import { cn } from '@/lib/utils';
import * as React from 'react';
import { ImageProps } from '../types';

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, fallback, isLazy = true, shape = 'square', className, onError, ...props }, ref) => {
    const [hasError, setHasError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

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
      <div className={cn('relative overflow-hidden', shapeStyles[shape], className)}>
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
