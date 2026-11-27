import { Button } from '../../Button';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardLink,
  CardMedia,
  CardTitle,
} from '../src/Card';
import { CardGroup } from '../src/CardGroup';
import { images } from './images';

/**
 * Linked cards. A `CardLink` inside the title makes the whole card clickable, while the
 * title stays the link's accessible name. Hover highlights the card, and keyboard focus
 * rings the whole card. Footer controls stay separately clickable. For router links,
 * use `<CardLink asChild><Link href="…">…</Link></CardLink>`.
 */
export const CardLinked = () => (
  <CardGroup>
    <Card>
      <CardHeader>
        <CardTitle>
          <CardLink href="#design">Design system principles</CardLink>
        </CardTitle>
      </CardHeader>
      <CardMedia alt="" src={images.design} />
      <CardBody>
        <p>Typography, color, spacing and the patterns that tie them together.</p>
      </CardBody>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>
          <CardLink href="#forms">Building accessible forms</CardLink>
        </CardTitle>
        <p className="mt-1 text-sm text-muted-foreground">Tutorial · 15 min read</p>
      </CardHeader>
      <CardMedia alt="" src={images.forms} />
      <CardBody>
        <p>Validation, error messages and labelling that work with assistive technology.</p>
      </CardBody>
      <CardFooter>
        <Button size="sm">Save for later</Button>
      </CardFooter>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>
          <CardLink href="#types">TypeScript support</CardLink>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <p>Every component ships with complete type definitions and inline documentation.</p>
      </CardBody>
    </Card>
  </CardGroup>
);
