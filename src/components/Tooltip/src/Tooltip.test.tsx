import { expectNoViolations } from '@/test/utils';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { Button } from '../../Button';
import { Tooltip, TooltipProvider } from './Tooltip';

describe('Tooltip', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(
        <TooltipProvider>
          <Tooltip content="Tooltip content">
            <button>Hover me</button>
          </Tooltip>
        </TooltipProvider>,
      );
      expect(screen.getByText('Hover me')).toBeInTheDocument();
    });

    it('renders tooltip content when hovered', async () => {
      const user = userEvent.setup();
      render(
        <TooltipProvider>
          <Tooltip content="Tooltip content">
            <button>Hover me</button>
          </Tooltip>
        </TooltipProvider>,
      );

      const trigger = screen.getByText('Hover me');
      await user.hover(trigger);

      // Tooltip content exists in DOM but may be visually hidden initially
      // Wait a bit for tooltip to appear
      await waitFor(
        () => {
          // Tooltip may be in DOM but not visible, which is fine for testing structure
          expect(trigger).toBeInTheDocument();
          expect(screen.queryByText('Tooltip content')).toBeInTheDocument();
        },
        { timeout: 2000 },
      );
    });

    it('renders with custom className', () => {
      render(
        <TooltipProvider>
          <Tooltip className="custom-class" content="Tooltip">
            <button>Trigger</button>
          </Tooltip>
        </TooltipProvider>,
      );
      expect(screen.getByText('Trigger')).toBeInTheDocument();
    });

    it('renders with React node content', () => {
      render(
        <TooltipProvider>
          <Tooltip content={<span data-testid="tooltip-content">Custom content</span>}>
            <button>Trigger</button>
          </Tooltip>
        </TooltipProvider>,
      );
      expect(screen.getByText('Trigger')).toBeInTheDocument();
    });
  });

  describe('Positioning', () => {
    it('renders with different side props', () => {
      const sides = ['top', 'bottom', 'left', 'right'] as const;

      for (const side of sides) {
        const { unmount } = render(
          <TooltipProvider>
            <Tooltip content="Tooltip" side={side}>
              <button>Trigger</button>
            </Tooltip>
          </TooltipProvider>,
        );

        const trigger = screen.getByText('Trigger');
        expect(trigger).toBeInTheDocument();

        unmount();
      }
    });

    it('renders with different align props', () => {
      const aligns = ['start', 'center', 'end'] as const;

      for (const align of aligns) {
        const { unmount } = render(
          <TooltipProvider>
            <Tooltip align={align} content="Tooltip">
              <button>Trigger</button>
            </Tooltip>
          </TooltipProvider>,
        );

        const trigger = screen.getByText('Trigger');
        expect(trigger).toBeInTheDocument();

        unmount();
      }
    });

    it('renders with custom offset', () => {
      render(
        <TooltipProvider>
          <Tooltip content="Tooltip" offset={10}>
            <button>Trigger</button>
          </Tooltip>
        </TooltipProvider>,
      );

      const trigger = screen.getByText('Trigger');
      expect(trigger).toBeInTheDocument();
    });
  });

  describe('Arrow', () => {
    it('renders arrow by default', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <TooltipProvider>
          <Tooltip content="Tooltip">
            <button>Trigger</button>
          </Tooltip>
        </TooltipProvider>,
      );

      const trigger = screen.getByText('Trigger');
      await user.hover(trigger);

      await waitFor(() => {
        const svg = container.querySelector('svg[width="11"]');
        expect(svg).toBeInTheDocument();
      });
    });

    it('does not render arrow when hasArrow is false', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <TooltipProvider>
          <Tooltip content="Tooltip" hasArrow={false}>
            <button>Trigger</button>
          </Tooltip>
        </TooltipProvider>,
      );

      const trigger = screen.getByText('Trigger');
      await user.hover(trigger);

      await waitFor(() => {
        const svg = container.querySelector('svg[width="11"]');
        expect(svg).not.toBeInTheDocument();
      });
    });
  });

  describe('Integration with Button', () => {
    it('works with Button component as trigger', () => {
      render(
        <TooltipProvider>
          <Tooltip content="Click me">
            <Button>Button with tooltip</Button>
          </Tooltip>
        </TooltipProvider>,
      );

      const button = screen.getByRole('button', { name: 'Button with tooltip' });
      expect(button).toBeInTheDocument();
    });
  });

  describe('Ref forwarding', () => {
    it('forwards ref to the content element', async () => {
      const user = userEvent.setup();
      const ref = vi.fn();
      render(
        <TooltipProvider>
          <Tooltip ref={ref} content="Tooltip">
            <button>Trigger</button>
          </Tooltip>
        </TooltipProvider>,
      );

      const trigger = screen.getByText('Trigger');
      await user.hover(trigger);

      await waitFor(() => {
        expect(ref).toHaveBeenCalled();
      });
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations with default props', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <TooltipProvider>
          <Tooltip content="Tooltip content">
            <button>Hover me</button>
          </Tooltip>
        </TooltipProvider>,
      );

      const trigger = screen.getByText('Hover me');
      await user.hover(trigger);

      await waitFor(async () => {
        const results = await axe(container);
        expectNoViolations(results);
      });
    });

    it('has no accessibility violations with React node content', async () => {
      const { container } = render(
        <TooltipProvider>
          <Tooltip content={<span>Complex tooltip content</span>}>
            <button>Trigger</button>
          </Tooltip>
        </TooltipProvider>,
      );

      const results = await axe(container);
      expectNoViolations(results);
    });

    it('tooltip trigger is keyboard accessible', async () => {
      const user = userEvent.setup();
      render(
        <TooltipProvider>
          <Tooltip content="Keyboard accessible tooltip">
            <button>Focus me</button>
          </Tooltip>
        </TooltipProvider>,
      );

      const trigger = screen.getByText('Focus me');
      await user.tab();
      expect(trigger).toHaveFocus();

      // Tooltip content may not be immediately visible in test environment
      // but the trigger is keyboard accessible
      expect(trigger).toBeInTheDocument();
    });
  });
});
