import { expectNoViolations } from '@/test/utils';
import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { CardFlag } from '../demos/CardFlag';
import { CardGroupDefault } from '../demos/CardGroupDefault';
import { CardLinked } from '../demos/CardLinked';
import { CardMediaVariants } from '../demos/CardMediaVariants';
import { Card, CardBody, CardHeader, CardLink, CardMedia, CardTitle } from './Card';
import { CardGroup } from './CardGroup';

describe('Card', () => {
  describe('Accessibility', () => {
    it('has no violations for a card group', async () => {
      const { container } = render(<CardGroupDefault />);
      expectNoViolations(await axe(container));
    });

    it('has no violations for linked cards', async () => {
      const { container } = render(<CardLinked />);
      expectNoViolations(await axe(container));
    });

    it('has no violations for flag cards', async () => {
      const { container } = render(<CardFlag />);
      expectNoViolations(await axe(container));
    });

    it('has no violations for each media variant', async () => {
      const { container } = render(<CardMediaVariants />);
      expectNoViolations(await axe(container));
    });
  });

  it('exposes its layout options as data attributes for the stylesheet', () => {
    render(<Card headerFirst data-testid="card" layout="flag" mediaPosition="right" />);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('vero-card');
    expect(card).toHaveAttribute('data-layout', 'flag');
    expect(card).toHaveAttribute('data-media-position', 'right');
    expect(card).toHaveAttribute('data-header-first', 'true');
  });

  it('keeps the header before the media in the DOM', () => {
    render(
      <Card data-testid="card">
        <CardHeader>
          <CardTitle>Title</CardTitle>
        </CardHeader>
        <CardMedia alt="" src="/image.jpg" />
        <CardBody>Body</CardBody>
      </Card>,
    );
    const parts = Array.from(screen.getByTestId('card').children).map(el => el.className);
    expect(parts[0]).toContain('vero-card-header');
    expect(parts[1]).toContain('vero-card-media');
    expect(parts[2]).toContain('vero-card-body');
  });

  it('renders the title at the requested heading level, h3 by default', () => {
    render(
      <>
        <CardTitle>Default</CardTitle>
        <CardTitle headingLevel="h2">Level two</CardTitle>
      </>,
    );
    expect(screen.getByRole('heading', { level: 3, name: 'Default' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Level two' })).toBeInTheDocument();
  });

  describe('CardMedia', () => {
    it('renders an image from src, decorative when alt is omitted', () => {
      const { container } = render(<CardMedia src="/image.jpg" />);
      const img = container.querySelector('img');
      expect(img).toHaveAttribute('src', '/image.jpg');
      expect(img).toHaveAttribute('alt', '');
    });

    it('renders custom media from children', () => {
      render(
        <CardMedia>
          <video aria-label="Product tour" />
        </CardMedia>,
      );
      expect(screen.getByLabelText('Product tour').tagName).toBe('VIDEO');
    });

    it('defaults to a 16:9 frame and the default variant', () => {
      const { container } = render(<CardMedia src="/image.jpg" />);
      const media = container.firstElementChild;
      expect(media).toHaveAttribute('data-variant', 'default');
      expect(media?.firstElementChild).toHaveClass('aspect-video');
    });

    it('applies the requested variant and aspect ratio', () => {
      const { container } = render(<CardMedia aspectRatio="square" src="/a.jpg" variant="inset" />);
      const media = container.firstElementChild;
      expect(media).toHaveAttribute('data-variant', 'inset');
      expect(media?.firstElementChild).toHaveClass('aspect-square');
    });
  });

  describe('CardLink', () => {
    it('makes the title the accessible name of the card link', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>
              <CardLink href="/keys">Florida Keys</CardLink>
            </CardTitle>
          </CardHeader>
        </Card>,
      );
      const link = screen.getByRole('link', { name: 'Florida Keys' });
      expect(link).toHaveAttribute('href', '/keys');
      expect(link).toHaveClass('vero-card-link');
    });

    it('renders its child instead of an anchor with asChild', () => {
      render(
        <CardLink asChild>
          <a data-router="true" href="/keys">
            Florida Keys
          </a>
        </CardLink>,
      );
      const link = screen.getByRole('link', { name: 'Florida Keys' });
      expect(link).toHaveAttribute('data-router', 'true');
      expect(link).toHaveClass('vero-card-link');
    });
  });
});

describe('CardGroup', () => {
  it('renders a list with one item per card, skipping empty children', () => {
    render(
      <CardGroup aria-label="Topics">
        <Card>One</Card>
        {null}
        {false}
        <Card>Two</Card>
      </CardGroup>,
    );
    const list = screen.getByRole('list', { name: 'Topics' });
    expect(within(list).getAllByRole('listitem')).toHaveLength(2);
  });

  it('caps the column count at the requested maximum', () => {
    render(
      <CardGroup aria-label="Topics" columns={2}>
        <Card>One</Card>
      </CardGroup>,
    );
    const list = screen.getByRole('list', { name: 'Topics' });
    expect(list).toHaveClass('md:grid-cols-2');
    expect(list).not.toHaveClass('xl:grid-cols-3');
  });
});
