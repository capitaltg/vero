import { expectNoViolations } from '@/test/utils';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { Badge } from './Badge';

describe('Badge', () => {
  describe('Rendering', () => {
    it('renders its children', () => {
      render(<Badge>New</Badge>);
      expect(screen.getByText('New')).toBeInTheDocument();
    });

    it('defaults to the dark tone at the default size', () => {
      render(<Badge variant="primary">New</Badge>);
      const badge = screen.getByText('New');
      expect(badge).toHaveClass('bg-primary-400', 'border-transparent', 'text-white');
      expect(badge).toHaveClass('px-2.5', 'py-0.5', 'text-xs/[1.4]');
    });

    it('renders the info variant in the dark tone', () => {
      render(<Badge variant="info">New</Badge>);
      expect(screen.getByText('New')).toHaveClass(
        'border-transparent',
        'bg-info-400',
        'text-black',
      );
    });

    it('does not leak the tone and size props onto the DOM', () => {
      render(
        <Badge size="lg" tone="light" variant="primary">
          New
        </Badge>,
      );
      const badge = screen.getByText('New');
      expect(badge).not.toHaveAttribute('tone');
      expect(badge).not.toHaveAttribute('size');
    });

    it('merges a custom className over the variant classes', () => {
      render(<Badge className="bg-purple-700">New</Badge>);
      const badge = screen.getByText('New');
      expect(badge).toHaveClass('bg-purple-700');
      expect(badge).not.toHaveClass('bg-base-200');
    });
  });

  describe('Tone', () => {
    it.each([
      ['default', 'border-base-400', 'bg-base-100', 'text-base-600'],
      ['primary', 'border-primary-400', 'bg-primary-100', 'text-primary-400'],
      ['success', 'border-success-400', 'bg-success-100', 'text-success-600'],
      ['danger', 'border-danger-400', 'bg-danger-100', 'text-danger-600'],
      ['warning', 'border-warning-400', 'bg-warning-100', 'text-warning-700'],
      ['info', 'border-info-400', 'bg-info-100', 'text-info-700'],
    ] as const)(
      'renders %s in the light tone with a matching border',
      (variant, border, bg, text) => {
        render(
          <Badge tone="light" variant={variant}>
            New
          </Badge>,
        );
        const badge = screen.getByText('New');
        expect(badge).toHaveClass(border, bg, text);
        expect(badge).not.toHaveClass('border-transparent');
      },
    );

    it('renders the outline variant the same in both tones', () => {
      const { rerender } = render(
        <Badge tone="dark" variant="outline">
          New
        </Badge>,
      );
      const darkClasses = screen.getByText('New').className;

      rerender(
        <Badge tone="light" variant="outline">
          New
        </Badge>,
      );
      expect(screen.getByText('New').className).toBe(darkClasses);
    });
  });

  describe('Size', () => {
    it('renders the large size', () => {
      render(<Badge size="lg">New</Badge>);
      expect(screen.getByText('New')).toHaveClass('px-4', 'py-1.5', 'text-base/[1.4]');
    });

    it('applies size independently of tone', () => {
      render(
        <Badge size="lg" tone="light" variant="success">
          New
        </Badge>,
      );
      const badge = screen.getByText('New');
      expect(badge).toHaveClass('px-4', 'py-1.5', 'text-base/[1.4]');
      expect(badge).toHaveClass('border-success-400', 'bg-success-100', 'text-success-600');
    });
  });

  describe('Accessibility', () => {
    it('has no violations in the light tone', async () => {
      const { container } = render(
        <Badge size="lg" tone="light" variant="danger">
          New
        </Badge>,
      );
      await expectNoViolations(await axe(container));
    });
  });
});
