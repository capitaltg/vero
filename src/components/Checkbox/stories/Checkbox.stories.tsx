import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxChecked } from '../demos/CheckboxChecked';
import sourceCodeChecked from '../demos/CheckboxChecked.tsx?raw';
import { CheckboxDefault } from '../demos/CheckboxDefault';
import sourceCodeDefault from '../demos/CheckboxDefault.tsx?raw';
import { CheckboxDisabled } from '../demos/CheckboxDisabled';
import sourceCodeDisabled from '../demos/CheckboxDisabled.tsx?raw';
import { CheckboxDisabledChecked } from '../demos/CheckboxDisabledChecked';
import sourceCodeDisabledChecked from '../demos/CheckboxDisabledChecked.tsx?raw';
import { CheckboxTile } from '../demos/CheckboxTile';
import sourceCodeTile from '../demos/CheckboxTile.tsx?raw';
import { CheckboxTileDisabled } from '../demos/CheckboxTileDisabled';
import sourceCodeTileDisabled from '../demos/CheckboxTileDisabled.tsx?raw';
import { CheckboxTileSelected } from '../demos/CheckboxTileSelected';
import sourceCodeTileSelected from '../demos/CheckboxTileSelected.tsx?raw';
import { CheckboxWithDescription } from '../demos/CheckboxWithDescription';
import sourceCodeWithDescription from '../demos/CheckboxWithDescription.tsx?raw';
import { Checkbox } from '../src/Checkbox';

const meta = {
  title: 'Inputs & Forms/Checkbox',
  component: Checkbox,
  parameters: {},
  argTypes: {
    isChecked: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    variant: {
      control: 'radio',
      options: ['default', 'tile', 'button'],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive playground for the Checkbox component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    label: 'Accept terms and conditions',
    id: 'terms',
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the Checkbox component.
 * Shows a basic checkbox with a label and interactive state.
 */
export const Default: Story = {
  render: () => <CheckboxDefault />,
  args: {
    label: 'Accept terms and conditions',
    id: 'terms2',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault,
        language: 'tsx',
      },
    },
  },
};

/**
 * A checkbox in its checked state.
 * Demonstrates the appearance of a selected checkbox.
 */
export const Checked: Story = {
  render: () => <CheckboxChecked />,
  args: {
    label: 'Checked checkbox',
    id: 'checked',
    isChecked: true,
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeChecked,
        language: 'tsx',
      },
    },
  },
};

/**
 * A disabled checkbox.
 * Shows how the checkbox appears when it's not interactive.
 */
export const Disabled: Story = {
  render: () => <CheckboxDisabled />,
  args: {
    label: 'Disabled checkbox',
    id: 'disabled',
    isDisabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDisabled,
        language: 'tsx',
      },
    },
  },
};

/**
 * A disabled checkbox in its checked state.
 * Demonstrates a non-interactive checkbox that's already selected.
 */
export const DisabledChecked: Story = {
  render: () => <CheckboxDisabledChecked />,
  args: {
    label: 'Disabled checked checkbox',
    id: 'disabled-checked',
    isChecked: true,
    isDisabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDisabledChecked,
        language: 'tsx',
      },
    },
  },
};

/**
 * Checkbox with tile styling.
 * Shows a larger checkbox option with a title and description.
 */
export const Tile: Story = {
  render: () => <CheckboxTile />,
  args: {
    label: 'Tile Checkbox',
    description: 'This is a description for the tile checkbox option',
    id: 'checkbox-tile',
    variant: 'tile',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeTile,
        language: 'tsx',
      },
    },
  },
};

/**
 * Selected tile checkbox.
 * Demonstrates how a tile checkbox option appears when selected.
 */
export const TileSelected: Story = {
  render: () => <CheckboxTileSelected />,
  args: {
    label: 'Selected Tile Checkbox',
    description: 'This tile checkbox option is selected',
    id: 'checkbox-tile-selected',
    variant: 'tile',
    isChecked: true,
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeTileSelected,
        language: 'tsx',
      },
    },
  },
};

/**
 * Disabled tile checkbox.
 * Shows how a tile checkbox option appears when it's not interactive.
 */
export const TileDisabled: Story = {
  render: () => <CheckboxTileDisabled />,
  args: {
    label: 'Disabled Tile Checkbox',
    description: 'This tile checkbox option is disabled',
    id: 'checkbox-tile-disabled',
    variant: 'tile',
    isDisabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeTileDisabled,
        language: 'tsx',
      },
    },
  },
};

/**
 * Checkbox with description in default variant.
 * Shows a standard checkbox with a description below the label.
 */
export const WithDescription: Story = {
  render: () => <CheckboxWithDescription />,
  args: {
    label: 'Checkbox with description',
    description:
      'This is a helpful description that provides additional context about this checkbox option.',
    id: 'checkbox-with-description',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithDescription,
        language: 'tsx',
      },
    },
  },
};
