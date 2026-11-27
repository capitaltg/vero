import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../Button';
import { CardFlag } from '../demos/CardFlag';
import sourceFlag from '../demos/CardFlag.tsx?raw';
import { CardGroupDefault } from '../demos/CardGroupDefault';
import sourceGroup from '../demos/CardGroupDefault.tsx?raw';
import { CardLinked } from '../demos/CardLinked';
import sourceLinked from '../demos/CardLinked.tsx?raw';
import { CardMediaVariants } from '../demos/CardMediaVariants';
import sourceMediaVariants from '../demos/CardMediaVariants.tsx?raw';
import { images } from '../demos/images';
import { Card, CardBody, CardFooter, CardHeader, CardMedia, CardTitle } from '../src/Card';

const meta = {
  title: 'Data & Display/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          'A bordered container for one item in a collection, aligned with the ' +
          '[USWDS card](https://designsystem.digital.gov/components/card/). Compose `Card` ' +
          'from `CardHeader` (with `CardTitle`), `CardMedia`, `CardBody` and `CardFooter`, ' +
          'in that order: the media follows the header in the markup and CSS shows it ' +
          'first. Put related cards in a `CardGroup`, which renders a list.\n\n' +
          'Use cards for collections of related content that each link to more detail. ' +
          "Don't use them for tabular data, a single call to action, or decoration.",
      },
    },
  },
  tags: ['autodocs'],
  args: {
    headerFirst: false,
    layout: 'default',
    mediaPosition: 'left',
  },
  argTypes: {
    layout: {
      control: 'radio',
      options: ['default', 'flag'],
      description:
        '`flag` places the media beside the content from 640px up, and stacks it below that.',
      table: { defaultValue: { summary: 'default' }, type: { summary: 'default | flag' } },
    },
    mediaPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Which side the media sits on in the `flag` layout.',
      table: { defaultValue: { summary: 'left' }, type: { summary: 'left | right' } },
    },
    headerFirst: {
      control: 'boolean',
      description: 'Show the header above the media instead of below it.',
      table: { defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
  },
  render: args => (
    <div className="max-w-2xl">
      <Card {...args}>
        <CardHeader>
          <CardTitle>Design system principles</CardTitle>
        </CardHeader>
        <CardMedia alt="" src={images.design} />
        <CardBody>
          <p>
            Build consistent, accessible interfaces with shared typography, color, spacing and
            component patterns.
          </p>
        </CardBody>
        <CardFooter>
          <Button variant="primary">Explore design</Button>
        </CardFooter>
      </Card>
    </div>
  ),
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const withSource = (code: string) => ({
  controls: { disable: true },
  docs: { source: { code, language: 'tsx' } },
});

/**
 * Use the controls to try each layout option on a single card.
 */
export const Playground: Story = {
  tags: ['!autodocs'],
};

/**
 * A group of cards with a header, media, body and footer. `CardGroup` shows one column
 * on small screens, two from 768px and three from 1280px; set `columns` to change the
 * maximum.
 */
export const Group: Story = {
  render: () => <CardGroupDefault />,
  parameters: withSource(sourceGroup),
};

/**
 * Linked cards: a `CardLink` in the title makes the whole card clickable.
 */
export const Linked: Story = {
  render: () => <CardLinked />,
  parameters: withSource(sourceLinked),
};

/**
 * The flag layout, with the media on the left or right.
 */
export const Flag: Story = {
  render: () => <CardFlag />,
  parameters: withSource(sourceFlag),
};

/**
 * Default, inset and exdent media, and the header-first ordering.
 */
export const MediaVariants: Story = {
  render: () => <CardMediaVariants />,
  parameters: withSource(sourceMediaVariants),
};

/**
 * A card with no media.
 */
export const TextOnly: Story = {
  render: () => (
    <div className="max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle>TypeScript support</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Every component ships with complete type definitions, so you get autocomplete and type
            checking in your editor.
          </p>
        </CardBody>
        <CardFooter>
          <Button variant="primary">View types</Button>
        </CardFooter>
      </Card>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
