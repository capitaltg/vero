import type { Meta, StoryObj } from '@storybook/react';
import { App } from '../app/App';
import sourceCode from '../app/App.tsx?raw';

const meta: Meta<typeof App> = {
  title: 'Examples/Kitchen Sink',
  component: App,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A comprehensive example showcasing all Vero components in a single form. This demonstrates how components work together in a real-world application.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The Kitchen Sink example displays all Vero components in action.
 * This comprehensive form demonstrates:
 * - Text inputs with various transformations (uppercase, lowercase, trim)
 * - Single and multi-select components (Select, Combobox, MultiSelect)
 * - Date pickers and date range pickers
 * - Radio buttons (default, tile, and button variants)
 * - Checkbox groups
 * - Switch groups
 * - Tag input
 * - Badges
 * - Form validation
 * - Theme switching
 *
 * Use this as a reference for building complex forms and seeing how components integrate together.
 */
export const Default: Story = {
  render: () => <App />,
  parameters: {
    controls: { disable: true },
    docs: {
      source: {
        code: sourceCode,
        language: 'tsx',
      },
    },
  },
};
