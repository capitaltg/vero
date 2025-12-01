import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Alert } from './Alert';

describe('Alert', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Alert variant="info">Test message</Alert>);
      expect(screen.getByText('Test message')).toBeInTheDocument();
    });

    it('renders with all variants', () => {
      const { rerender } = render(<Alert variant="success">Success message</Alert>);
      expect(screen.getByText('Success message')).toBeInTheDocument();

      rerender(<Alert variant="warning">Warning message</Alert>);
      expect(screen.getByText('Warning message')).toBeInTheDocument();

      rerender(<Alert variant="danger">Danger message</Alert>);
      expect(screen.getByText('Danger message')).toBeInTheDocument();

      rerender(<Alert variant="info">Info message</Alert>);
      expect(screen.getByText('Info message')).toBeInTheDocument();
    });

    it('renders with heading', () => {
      render(
        <Alert heading="Alert Heading" variant="info">
          Alert content
        </Alert>,
      );
      expect(screen.getByText('Alert Heading')).toBeInTheDocument();
      expect(screen.getByText('Alert content')).toBeInTheDocument();
    });

    it('renders without heading', () => {
      render(<Alert variant="info">Alert content only</Alert>);
      expect(screen.queryByRole('heading')).not.toBeInTheDocument();
      expect(screen.getByText('Alert content only')).toBeInTheDocument();
    });

    it('renders with icon by default', () => {
      const { container } = render(<Alert variant="success">Message</Alert>);
      // Icon is rendered as an SVG inside a span
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('renders without icon when hasIcon is false', () => {
      const { container } = render(
        <Alert hasIcon={false} variant="info">
          Message
        </Alert>,
      );
      // When hasIcon is false and isClosable is false, there should be no SVG at all
      const svg = container.querySelector('svg');
      expect(svg).not.toBeInTheDocument();
    });

    it('renders with different sizes', () => {
      const { container: defaultContainer } = render(
        <Alert size="default" variant="info">
          Default size
        </Alert>,
      );
      // Check for size-specific classes from constants
      expect(defaultContainer.firstChild).toHaveClass('text-base');

      const { container: smContainer } = render(
        <Alert size="sm" variant="info">
          Small size
        </Alert>,
      );
      expect(smContainer.firstChild).toHaveClass('text-sm');
    });

    it('renders with different heading levels', () => {
      const { rerender } = render(
        <Alert heading="Test" headingLevel="h1" variant="info">
          Content
        </Alert>,
      );
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

      rerender(
        <Alert heading="Test" headingLevel="h3" variant="info">
          Content
        </Alert>,
      );
      expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();

      rerender(
        <Alert heading="Test" headingLevel="h6" variant="info">
          Content
        </Alert>,
      );
      expect(screen.getByRole('heading', { level: 6 })).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(
        <Alert className="custom-class" variant="info">
          Message
        </Alert>,
      );
      expect(container.firstChild).toHaveClass('custom-class');
    });
  });

  describe('Closable functionality', () => {
    it('renders close button when isClosable is true', () => {
      render(
        <Alert isClosable variant="info">
          Message
        </Alert>,
      );
      const closeButton = screen.getByRole('button', { name: /close/i });
      expect(closeButton).toBeInTheDocument();
    });

    it('does not render close button when isClosable is false', () => {
      render(
        <Alert isClosable={false} variant="info">
          Message
        </Alert>,
      );
      const closeButton = screen.queryByRole('button', { name: /close/i });
      expect(closeButton).not.toBeInTheDocument();
    });

    it('calls onClose when close button is clicked', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();

      render(
        <Alert isClosable variant="info" onClose={handleClose}>
          Message
        </Alert>,
      );

      const closeButton = screen.getByRole('button', { name: /close/i });
      await user.click(closeButton);

      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('close button has screen reader text', () => {
      render(
        <Alert isClosable variant="info">
          Message
        </Alert>,
      );
      const srText = screen.getByText('Close');
      expect(srText).toHaveClass('sr-only');
    });
  });

  describe('Accessibility', () => {
    it('renders as a div element', () => {
      const { container } = render(<Alert variant="info">Message</Alert>);
      expect(container.firstChild?.nodeName).toBe('DIV');
    });

    it('passes through HTML attributes', () => {
      const { container } = render(
        <Alert aria-label="Test alert" data-testid="alert" variant="info">
          Message
        </Alert>,
      );
      const alert = container.firstChild as HTMLElement;
      expect(alert).toHaveAttribute('data-testid', 'alert');
      expect(alert).toHaveAttribute('aria-label', 'Test alert');
    });

    it('renders heading with proper semantic HTML', () => {
      render(
        <Alert heading="Important Alert" headingLevel="h2" variant="info">
          Content
        </Alert>,
      );
      const heading = screen.getByRole('heading', { name: 'Important Alert' });
      expect(heading.tagName).toBe('H2');
    });
  });

  describe('Content rendering', () => {
    it('renders text content', () => {
      render(<Alert variant="info">Simple text message</Alert>);
      expect(screen.getByText('Simple text message')).toBeInTheDocument();
    });

    it('renders React node content', () => {
      render(
        <Alert variant="info">
          <span data-testid="custom-content">Custom content</span>
        </Alert>,
      );
      expect(screen.getByTestId('custom-content')).toBeInTheDocument();
    });

    it('renders complex content with multiple elements', () => {
      render(
        <Alert variant="info">
          <p>First paragraph</p>
          <p>Second paragraph</p>
        </Alert>,
      );
      expect(screen.getByText('First paragraph')).toBeInTheDocument();
      expect(screen.getByText('Second paragraph')).toBeInTheDocument();
    });
  });

  describe('Icon variants', () => {
    it('renders correct icon for success variant', () => {
      const { container } = render(<Alert variant="success">Success message</Alert>);
      // Icon is rendered as an SVG inside a span
      const svg = container.querySelector('span > svg');
      expect(svg).toBeInTheDocument();
    });

    it('renders correct icon for warning variant', () => {
      const { container } = render(<Alert variant="warning">Warning message</Alert>);
      const svg = container.querySelector('span > svg');
      expect(svg).toBeInTheDocument();
    });

    it('renders correct icon for danger variant', () => {
      const { container } = render(<Alert variant="danger">Danger message</Alert>);
      const svg = container.querySelector('span > svg');
      expect(svg).toBeInTheDocument();
    });

    it('renders correct icon for info variant', () => {
      const { container } = render(<Alert variant="info">Info message</Alert>);
      const svg = container.querySelector('span > svg');
      expect(svg).toBeInTheDocument();
    });
  });

  describe('Ref forwarding', () => {
    it('forwards ref to the root element', () => {
      const ref = vi.fn();
      const { container } = render(
        <Alert ref={ref} variant="info">
          Message
        </Alert>,
      );
      expect(ref).toHaveBeenCalledWith(container.firstChild);
    });
  });
});
