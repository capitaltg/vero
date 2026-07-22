import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Image } from './Image';

describe('Image', () => {
  describe('Rendering', () => {
    it('renders with src and alt', () => {
      render(<Image alt="Example" src="https://example.com/image.jpg" />);
      const img = screen.getByRole('img', { name: 'Example' });
      expect(img).toHaveAttribute('src', 'https://example.com/image.jpg');
    });
  });

  describe('Fallback behavior', () => {
    it('shows the fallback when the src fails to load', () => {
      render(
        <Image
          alt="Example"
          fallback="https://example.com/fallback.jpg"
          src="https://example.com/broken.jpg"
        />,
      );
      const img = screen.getByRole('img', { name: 'Example' });

      fireEvent.error(img);

      expect(img).toHaveAttribute('src', 'https://example.com/fallback.jpg');
    });

    it('shows a newly valid src after a previous src failed instead of keeping the fallback', () => {
      const { rerender } = render(
        <Image
          alt="Example"
          fallback="https://example.com/fallback.jpg"
          src="https://example.com/broken.jpg"
        />,
      );
      const img = screen.getByRole('img', { name: 'Example' });

      // The initial src fails, so the fallback is displayed.
      fireEvent.error(img);
      expect(img).toHaveAttribute('src', 'https://example.com/fallback.jpg');

      // Updating to a valid src should reset the error state and show it.
      rerender(
        <Image
          alt="Example"
          fallback="https://example.com/fallback.jpg"
          src="https://example.com/valid.jpg"
        />,
      );
      expect(img).toHaveAttribute('src', 'https://example.com/valid.jpg');
    });

    it('falls back again if the updated src also fails', () => {
      const { rerender } = render(
        <Image
          alt="Example"
          fallback="https://example.com/fallback.jpg"
          src="https://example.com/broken.jpg"
        />,
      );
      const img = screen.getByRole('img', { name: 'Example' });

      fireEvent.error(img);
      rerender(
        <Image
          alt="Example"
          fallback="https://example.com/fallback.jpg"
          src="https://example.com/broken-2.jpg"
        />,
      );
      expect(img).toHaveAttribute('src', 'https://example.com/broken-2.jpg');

      fireEvent.error(img);
      expect(img).toHaveAttribute('src', 'https://example.com/fallback.jpg');
    });
  });

  describe('Loading state', () => {
    // The loading skeleton (the "gray box") is the .animate-pulse overlay.
    const skeleton = (container: HTMLElement) => container.querySelector('.animate-pulse');

    it('shows the skeleton while loading and hides it once the image loads', () => {
      const { container } = render(<Image alt="Example" src="https://example.com/a.jpg" />);
      const img = screen.getByRole('img', { name: 'Example' });

      expect(skeleton(container)).not.toBeNull();
      expect(img).toHaveClass('invisible');

      fireEvent.load(img);

      expect(skeleton(container)).toBeNull();
      expect(img).not.toHaveClass('invisible');
    });

    it('re-shows then clears the skeleton when src changes and the new image loads', () => {
      // Reproduces the reported flow: src starts as '' then becomes a valid src.
      const { container, rerender } = render(<Image alt="Example" src="" />);
      expect(skeleton(container)).not.toBeNull();

      rerender(<Image alt="Example" src="https://example.com/valid.jpg" />);
      // Still loading the newly-set src.
      expect(skeleton(container)).not.toBeNull();

      fireEvent.load(screen.getByRole('img', { name: 'Example' }));
      expect(skeleton(container)).toBeNull();
    });
  });

  describe('Callbacks', () => {
    it('calls onError when the image fails to load', () => {
      const handleError = vi.fn();
      render(<Image alt="Example" src="https://example.com/broken.jpg" onError={handleError} />);
      const img = screen.getByRole('img', { name: 'Example' });

      fireEvent.error(img);

      expect(handleError).toHaveBeenCalledTimes(1);
    });
  });
});
