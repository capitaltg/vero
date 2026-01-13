import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioDefault } from '../demos/RadioDefault';
import sourceCodeDefault from '../demos/RadioDefault.tsx?raw';
import { RadioDisabled } from '../demos/RadioDisabled';
import sourceCodeDisabled from '../demos/RadioDisabled.tsx?raw';
import { RadioDisabledSelected } from '../demos/RadioDisabledSelected';
import sourceCodeDisabledSelected from '../demos/RadioDisabledSelected.tsx?raw';
import { RadioSelected } from '../demos/RadioSelected';
import sourceCodeSelected from '../demos/RadioSelected.tsx?raw';
import { RadioTile } from '../demos/RadioTile';
import sourceCodeTile from '../demos/RadioTile.tsx?raw';
import { RadioTileDisabled } from '../demos/RadioTileDisabled';
import sourceCodeTileDisabled from '../demos/RadioTileDisabled.tsx?raw';
import { RadioTileSelected } from '../demos/RadioTileSelected';
import sourceCodeTileSelected from '../demos/RadioTileSelected.tsx?raw';
import { RadioWithDescription } from '../demos/RadioWithDescription';
import sourceCodeWithDescription from '../demos/RadioWithDescription.tsx?raw';
import { Radio } from '../src/Radio';

const meta = {
  title: 'Inputs & Forms/Radio',
  component: Radio,
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
      options: ['default', 'tile'],
    },
  },
  decorators: [
    Story => (
      <RadioGroupPrimitive.Root defaultValue="option-1">
        <Story />
      </RadioGroupPrimitive.Root>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive playground for the Radio component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    label: 'Radio option',
    id: 'radio-playground',
    value: 'option-playground',
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the Radio component.
 * Shows a basic radio button with a label.
 */
export const Default: Story = {
  render: () => <RadioDefault />,
  args: {
    label: 'Radio option',
    id: 'radio-1',
    value: 'option-1',
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
 * Selected radio button.
 * Shows how a standard radio button appears when selected.
 */
export const Selected: Story = {
  render: () => <RadioSelected />,
  args: {
    label: 'Selected radio',
    id: 'radio-2',
    value: 'option-2',
    isChecked: true,
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeSelected,
        language: 'tsx',
      },
    },
  },
};

/**
 * Disabled radio button.
 * Demonstrates how a standard radio button appears when disabled.
 */
export const Disabled: Story = {
  render: () => <RadioDisabled />,
  args: {
    label: 'Disabled radio',
    id: 'radio-3',
    value: 'option-3',
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
 * Disabled and selected radio button.
 * Shows a radio button that is both selected and not interactive.
 */
export const DisabledSelected: Story = {
  render: () => <RadioDisabledSelected />,
  args: {
    label: 'Disabled selected radio',
    id: 'radio-4',
    value: 'option-4',
    isChecked: true,
    isDisabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDisabledSelected,
        language: 'tsx',
      },
    },
  },
};

/**
 * Radio with tile styling.
 * Shows a larger radio option with a title and description.
 */
export const Tile: Story = {
  render: () => <RadioTile />,
  args: {
    label: 'Tile Radio',
    description: 'This is a description for the tile radio option',
    id: 'radio-tile',
    value: 'option-tile',
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
 * Selected tile radio.
 * Demonstrates how a tile radio option appears when selected.
 */
export const TileSelected: Story = {
  render: () => <RadioTileSelected />,
  args: {
    label: 'Selected Tile Radio',
    description: 'This tile radio option is selected',
    id: 'radio-tile-selected',
    value: 'option-tile-selected',
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
 * Disabled tile radio.
 * Shows how a tile radio option appears when it's not interactive.
 */
export const TileDisabled: Story = {
  render: () => <RadioTileDisabled />,
  args: {
    label: 'Disabled Tile Radio',
    description: 'This tile radio option is disabled',
    id: 'radio-tile-disabled',
    value: 'option-tile-disabled',
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
 * Radio with description in default variant.
 * Shows a standard radio button with a description below the label.
 */
export const WithDescription: Story = {
  render: () => <RadioWithDescription />,
  args: {
    label: 'Radio option with description',
    description:
      'This is a helpful description that provides additional context about this radio option.',
    id: 'radio-with-description',
    value: 'option-with-description',
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
