export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'loading'> {
  /** The image URL. Changing it shows the loading placeholder again until the new image loads. */
  src: string;
  /** Text describing the image for screen readers. Pass `''` for a decorative image. */
  alt: string;
  /** An image URL to show instead if `src` fails to load. */
  fallback?: string;
  /** Loads the image only when it nears the viewport, with `loading="lazy"`. Defaults to `true`. */
  isLazy?: boolean;
  /** The corner style: `square`, `rounded` or `circle`. Defaults to `square`. */
  shape?: 'square' | 'rounded' | 'circle';
  /**
   * Classes for the wrapper `<div>`, merged after the defaults. The `<img>` fills the wrapper
   * and is cropped to fit.
   */
  className?: string;
}
