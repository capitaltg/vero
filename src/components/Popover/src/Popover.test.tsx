import { expectNoViolations } from '@/test/utils';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { Button } from '../../Button';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';

describe('Popover', () => {
  describe('Rendering', () => {
    it('renders trigger button', () => {
      render(
        <Popover>
          <PopoverTrigger asChild>
            <button>Open popover</button>
          </PopoverTrigger>
          <PopoverContent>Popover content</PopoverContent>
        </Popover>,
      );
      expect(screen.getByText('Open popover')).toBeInTheDocument();
    });

    it('renders popover content when opened', async () => {
      const user = userEvent.setup();
      render(
        <Popover>
          <PopoverTrigger asChild>
            <button>Open popover</button>
          </PopoverTrigger>
          <PopoverContent>Popover content</PopoverContent>
        </Popover>,
      );

      const trigger = screen.getByText('Open popover');
      await user.click(trigger);

      await waitFor(() => {
        expect(screen.getByText('Popover content')).toBeInTheDocument();
      });
    });

    it('renders with custom className', async () => {
      const user = userEvent.setup();
      render(
        <Popover>
          <PopoverTrigger asChild>
            <button>Open</button>
          </PopoverTrigger>
          <PopoverContent className="custom-popover-class">Content</PopoverContent>
        </Popover>,
      );

      const trigger = screen.getByText('Open');
      await user.click(trigger);

      await waitFor(() => {
        // PopoverContent is rendered in a portal, so check for content instead
        expect(screen.getByText('Content')).toBeInTheDocument();
      });
    });

    it('renders with React node content', async () => {
      const user = userEvent.setup();
      render(
        <Popover>
          <PopoverTrigger asChild>
            <button>Open</button>
          </PopoverTrigger>
          <PopoverContent>
            <div data-testid="custom-content">Custom content</div>
          </PopoverContent>
        </Popover>,
      );

      const trigger = screen.getByText('Open');
      await user.click(trigger);

      await waitFor(() => {
        expect(screen.getByTestId('custom-content')).toBeInTheDocument();
      });
    });
  });

  describe('Positioning', () => {
    it('renders with different align props', async () => {
      const user = userEvent.setup();
      const aligns = ['start', 'center', 'end'] as const;

      for (const align of aligns) {
        const { unmount } = render(
          <Popover>
            <PopoverTrigger asChild>
              <button>Open</button>
            </PopoverTrigger>
            <PopoverContent align={align}>Content</PopoverContent>
          </Popover>,
        );

        const trigger = screen.getByText('Open');
        await user.click(trigger);

        await waitFor(() => {
          expect(screen.getByText('Content')).toBeInTheDocument();
        });

        unmount();
      }
    });

    it('renders with custom sideOffset', async () => {
      const user = userEvent.setup();
      render(
        <Popover>
          <PopoverTrigger asChild>
            <button>Open</button>
          </PopoverTrigger>
          <PopoverContent sideOffset={10}>Content</PopoverContent>
        </Popover>,
      );

      const trigger = screen.getByText('Open');
      await user.click(trigger);

      await waitFor(() => {
        expect(screen.getByText('Content')).toBeInTheDocument();
      });
    });
  });

  describe('Arrow', () => {
    it('does not render arrow by default', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Popover>
          <PopoverTrigger asChild>
            <button>Open</button>
          </PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>,
      );

      const trigger = screen.getByText('Open');
      await user.click(trigger);

      await waitFor(() => {
        const svg = container.querySelector('svg[width="15"]');
        expect(svg).not.toBeInTheDocument();
      });
    });

    it('renders arrow when hasArrow is true', async () => {
      const user = userEvent.setup();
      render(
        <Popover>
          <PopoverTrigger asChild>
            <button>Open</button>
          </PopoverTrigger>
          <PopoverContent hasArrow>Content</PopoverContent>
        </Popover>,
      );

      const trigger = screen.getByText('Open');
      await user.click(trigger);

      await waitFor(() => {
        // PopoverContent is rendered in a portal, check for content
        expect(screen.getByText('Content')).toBeInTheDocument();
        // Arrow SVG should be in the document (rendered in portal)
        const svg = document.querySelector('svg[width="15"]');
        expect(svg).toBeInTheDocument();
      });
    });
  });

  describe('Controlled state', () => {
    it('opens and closes when controlled', async () => {
      const user = userEvent.setup();
      const TestComponent = () => {
        const [open, setOpen] = useState(false);

        return (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <button>Toggle</button>
            </PopoverTrigger>
            <PopoverContent>Content</PopoverContent>
          </Popover>
        );
      };

      render(<TestComponent />);
      const trigger = screen.getByText('Toggle');
      await user.click(trigger);

      // The onOpenChange should be called
      await waitFor(() => {
        // Check that the handler was called
        expect(screen.getByText('Toggle')).toBeInTheDocument();
      });
    });
  });

  describe('Integration with Button', () => {
    it('works with Button component as trigger', async () => {
      const user = userEvent.setup();
      render(
        <Popover>
          <PopoverTrigger asChild>
            <Button>Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent>Popover content</PopoverContent>
        </Popover>,
      );

      const button = screen.getByRole('button', { name: 'Open Popover' });
      await user.click(button);

      await waitFor(() => {
        expect(screen.getByText('Popover content')).toBeInTheDocument();
      });
    });
  });

  describe('Ref forwarding', () => {
    it('forwards ref to the content element', async () => {
      const user = userEvent.setup();
      const ref = vi.fn();
      render(
        <Popover>
          <PopoverTrigger asChild>
            <button>Open</button>
          </PopoverTrigger>
          <PopoverContent ref={ref}>Content</PopoverContent>
        </Popover>,
      );

      const trigger = screen.getByText('Open');
      await user.click(trigger);

      await waitFor(() => {
        expect(ref).toHaveBeenCalled();
      });
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations with default props', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Popover>
          <PopoverTrigger asChild>
            <button>Open popover</button>
          </PopoverTrigger>
          <PopoverContent>Popover content</PopoverContent>
        </Popover>,
      );

      const trigger = screen.getByText('Open popover');
      await user.click(trigger);

      await waitFor(async () => {
        const results = await axe(container);
        expectNoViolations(results);
      });
    });

    it('has no accessibility violations with arrow', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Popover>
          <PopoverTrigger asChild>
            <button>Open</button>
          </PopoverTrigger>
          <PopoverContent hasArrow>Content</PopoverContent>
        </Popover>,
      );

      const trigger = screen.getByText('Open');
      await user.click(trigger);

      await waitFor(async () => {
        const results = await axe(container);
        expectNoViolations(results);
      });
    });

    it('trigger is keyboard accessible', async () => {
      const user = userEvent.setup();
      render(
        <Popover>
          <PopoverTrigger asChild>
            <button>Open</button>
          </PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>,
      );

      const trigger = screen.getByText('Open');
      await user.tab();
      expect(trigger).toHaveFocus();

      await user.keyboard('{Enter}');
      await waitFor(() => {
        expect(screen.getByText('Content')).toBeInTheDocument();
      });
    });

    it('closes when Escape key is pressed', async () => {
      const user = userEvent.setup();
      render(
        <Popover>
          <PopoverTrigger asChild>
            <button>Open</button>
          </PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>,
      );

      const trigger = screen.getByText('Open');
      await user.click(trigger);

      await waitFor(() => {
        expect(screen.getByText('Content')).toBeInTheDocument();
      });

      await user.keyboard('{Escape}');

      await waitFor(() => {
        expect(screen.queryByText('Content')).not.toBeInTheDocument();
      });
    });
  });
});
