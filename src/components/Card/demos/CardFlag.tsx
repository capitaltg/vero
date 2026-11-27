import { Button } from '../../Button';
import { Card, CardBody, CardFooter, CardHeader, CardMedia, CardTitle } from '../src/Card';
import { CardGroup } from '../src/CardGroup';
import { images } from './images';

/**
 * Flag layout. From 640px up, the media fills a column beside the content; below that
 * the card stacks like the default layout. `mediaPosition="right"` mirrors it.
 */
export const CardFlag = () => (
  <CardGroup columns={1}>
    <Card layout="flag">
      <CardHeader>
        <CardTitle>Accessibility features</CardTitle>
      </CardHeader>
      <CardMedia alt="" src={images.accessibility} />
      <CardBody>
        <p>
          Every component is built for WCAG 2.1 AA, with keyboard navigation and screen reader
          support.
        </p>
      </CardBody>
      <CardFooter>
        <Button variant="primary">Learn about accessibility</Button>
      </CardFooter>
    </Card>
    <Card layout="flag" mediaPosition="right">
      <CardHeader>
        <CardTitle>Design tokens</CardTitle>
      </CardHeader>
      <CardMedia alt="" src={images.design} />
      <CardBody>
        <p>Colors, spacing and type scales shared across every component and theme.</p>
      </CardBody>
      <CardFooter>
        <Button variant="primary">Browse tokens</Button>
      </CardFooter>
    </Card>
  </CardGroup>
);
