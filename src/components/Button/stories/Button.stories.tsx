import type { Meta, StoryObj } from '@storybook/react';
import { ButtonLoadingComparison } from '../demos/ButtonLoadingComparison';
import sourceCodeLoadingComparison from '../demos/ButtonLoadingComparison.tsx?raw';
import { ButtonLoadingSizes } from '../demos/ButtonLoadingSizes';
import sourceCodeLoadingSizes from '../demos/ButtonLoadingSizes.tsx?raw';
import { ButtonLoadingVariants } from '../demos/ButtonLoadingVariants';
import sourceCodeLoadingVariants from '../demos/ButtonLoadingVariants.tsx?raw';
import { ButtonSizes } from '../demos/ButtonSizes';
import sourceCodeSizes from '../demos/ButtonSizes.tsx?raw';
import { Button } from '../src/Button';

const meta = {
  title: 'Actions & Navigation/Button',
  component: Button,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'danger', 'link', 'input', 'ghost'],
      description: 'The visual style variant of the button',
    },
    size: {
      options: ['default', 'sm', 'lg'],
      control: 'radio',
      description: 'The size of the button',
    },
    className: {
      type: 'string',
      description: 'Additional class names to apply to the button',
    },
    isLoading: {
      type: 'boolean',
      description: 'Shows a loading spinner instead of the button text',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default button style.
 * This is the main call-to-action button style used throughout the application.
 */
export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'default',
  },
};

/**
 * The primary button style.
 * This is the main call-to-action button style used throughout the application.
 */
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

/**
 * The danger button style.
 * Used for dangerous or destructive actions like delete operations.
 */
export const Danger: Story = {
  args: {
    children: 'Danger Button',
    variant: 'danger',
  },
};

/**
 * The link button style.
 * Makes the button appear as a text link.
 */
export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
};

/**
 * The input button style.
 * Provides the appearance of being an input field. Used in forms where the button is part of the input (e.g. Autocomplete, ComboBox, etc.).
 */
export const Input: Story = {
  args: {
    children: 'Input Button',
    variant: 'input',
  },
};

/**
 * The ghost button style.
 * Used for buttons that are less prominent, often used in secondary actions or to avoid visual clutter (e.g. DatePicker).
 */
export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

/**
 * A disabled button state.
 * Shows how the button appears when it's not interactive.
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    isDisabled: true,
  },
};

/**
 * Button sizes.
 * Shows the small, default, and large button sizes side by side.
 */
export const Sizes: Story = {
  render: args => <ButtonSizes {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeSizes,
        language: 'tsx',
      },
    },
  },
};

/**
 * A loading button state.
 * Shows a spinner instead of the button text while maintaining the same size.
 * The button is automatically disabled when loading.
 */
export const Loading: Story = {
  render: args => <ButtonLoadingComparison {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeLoadingComparison,
        language: 'tsx',
      },
    },
  },
};

/**
 * Loading state with different variants.
 * Demonstrates how the loading spinner appears across all button variants.
 */
export const LoadingVariants: Story = {
  render: args => <ButtonLoadingVariants {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeLoadingVariants,
        language: 'tsx',
      },
    },
  },
};

/**
 * Loading state with different sizes.
 * Demonstrates how the loading spinner appears across all button sizes.
 */
export const LoadingSizes: Story = {
  render: args => <ButtonLoadingSizes {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeLoadingSizes,
        language: 'tsx',
      },
    },
  },
};
