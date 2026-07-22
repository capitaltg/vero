import { useState } from 'react';
import { Button } from '../../Button';
import { Image } from '../src/Image';

const landscapeSrc = 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg';
const gradientSrc = 'https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg';

/**
 * Demonstrates changing the `src` at runtime. The image starts with an empty src and can
 * be swapped between two URLs; the loading skeleton clears once the new image loads
 * instead of getting stuck. A cache-busting query param is appended so the skeleton is
 * visible on each change.
 */
export const ImageChangingSrc = () => {
  const [src, setSrc] = useState('');
  const load = (url: string) => setSrc(`${url}?v=${Date.now()}`);

  return (
    <div className="space-y-4">
      <Image alt="Runtime src change demo" height={400} src={src} width={800} />
      <div className="flex flex-wrap gap-2">
        <Button variant="ghost" onClick={() => setSrc('')}>
          Set empty src
        </Button>
        <Button onClick={() => load(landscapeSrc)}>Load landscape</Button>
        <Button onClick={() => load(gradientSrc)}>Load gradient</Button>
      </div>
      <p className="text-sm text-muted-foreground">
        Current src: {src ? src.split('?')[0] : '(empty)'}
      </p>
    </div>
  );
};
