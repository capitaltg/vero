import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroupButton } from '../demos/RadioGroupButton';
import sourceCodeButton from '../demos/RadioGroupButton.tsx?raw';
import { RadioGroupButtonVertical } from '../demos/RadioGroupButtonVertical';
import sourceCodeButtonVertical from '../demos/RadioGroupButtonVertical.tsx?raw';
import { RadioGroupButtonWithSelection } from '../demos/RadioGroupButtonWithSelection';
import sourceCodeButtonWithSelection from '../demos/RadioGroupButtonWithSelection.tsx?raw';
import { RadioGroupDefault } from '../demos/RadioGroupDefault';
import sourceCodeDefault from '../demos/RadioGroupDefault.tsx?raw';
import { RadioGroupHorizontal } from '../demos/RadioGroupHorizontal';
import sourceCodeHorizontal from '../demos/RadioGroupHorizontal.tsx?raw';
import { RadioGroupSingleColumn } from '../demos/RadioGroupSingleColumn';
import sourceCodeSingleColumn from '../demos/RadioGroupSingleColumn.tsx?raw';
import { RadioGroupThreeColumns } from '../demos/RadioGroupThreeColumns';
import sourceCodeThreeColumns from '../demos/RadioGroupThreeColumns.tsx?raw';
import { RadioGroupTile } from '../demos/RadioGroupTile';
import sourceCodeTile from '../demos/RadioGroupTile.tsx?raw';
import { RadioGroupTileWithSelection } from '../demos/RadioGroupTileWithSelection';
import sourceCodeTileWithSelection from '../demos/RadioGroupTileWithSelection.tsx?raw';
import { RadioGroupVertical } from '../demos/RadioGroupVertical';
import sourceCodeVertical from '../demos/RadioGroupVertical.tsx?raw';
import { RadioGroupWithSelection } from '../demos/RadioGroupWithSelection';
import sourceCodeWithSelection from '../demos/RadioGroupWithSelection.tsx?raw';
import { RadioGroup } from '../src/RadioGroup';

const meta = {
  title: 'Inputs & Forms/RadioGroup',
  component: RadioGroup,
  parameters: {},
  argTypes: {
    value: {
      control: 'text',
      description: 'Currently selected value',
      type: { name: 'string', required: false },
    },
    onChange: {
      description: 'Callback when selection changes',
      type: { name: 'function', required: true },
      action: 'selection changed',
    },
    options: {
      control: 'object',
      description: 'Array of radio options',
      type: { name: 'array', value: { name: 'object', value: {} }, required: true },
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description:
        'Layout orientation of the radio group (only applies to default and button variants)',
      type: { name: 'string', required: false },
      table: {
        type: {
          summary: 'horizontal | vertical',
        },
      },
    },
    variant: {
      control: 'radio',
      options: ['default', 'tile', 'button'],
      description: 'Visual variant of radio buttons',
      type: { name: 'string', required: false },
      table: {
        type: {
          summary: 'default | tile | button',
        },
      },
    },
    columns: {
      control: 'radio',
      options: [1, 2, 3, 4],
      description:
        'Number of columns for default variant (only applies when orientation is vertical)',
      type: { name: 'number', required: false },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const tileOptions = [
  {
    value: 'startup',
    label: 'Startup',
    description: 'Perfect for new businesses and small teams',
  },
  {
    value: 'business',
    label: 'Business',
    description: 'For medium-sized businesses and growing teams',
  },
  {
    value: 'enterprise',
    label: 'Enterprise',
    description: 'For large organizations and enterprise teams',
  },
];

/**
 * Interactive playground for the RadioGroup component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {},
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the RadioGroup component.
 * Shows a basic vertical radio group with no initial selection.
 */
export const Default: Story = {
  render: () => <RadioGroupDefault />,
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {},
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
 * RadioGroup with a pre-selected value.
 * Demonstrates how the group appears with an initial selection.
 */
export const WithSelection: Story = {
  render: () => <RadioGroupWithSelection />,
  args: {
    options: defaultOptions,
    value: 'option2',
    onChange: () => {},
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithSelection,
        language: 'tsx',
      },
    },
  },
};

/**
 * RadioGroup with horizontal layout.
 * Shows radio options arranged in a horizontal line.
 */
export const Horizontal: Story = {
  render: () => <RadioGroupHorizontal />,
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {},
    orientation: 'horizontal',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeHorizontal,
        language: 'tsx',
      },
    },
  },
};

/**
 * RadioGroup with vertical layout.
 * Shows radio options stacked vertically.
 */
export const Vertical: Story = {
  render: () => <RadioGroupVertical />,
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {},
    orientation: 'vertical',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeVertical,
        language: 'tsx',
      },
    },
  },
};

/**
 * RadioGroup with tile variant.
 * Shows radio options as larger tiles with descriptions.
 */
export const Tile: Story = {
  render: () => <RadioGroupTile />,
  args: {
    options: tileOptions,
    value: '',
    onChange: () => {},
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
 * Tile variant RadioGroup with a pre-selected value.
 * Demonstrates how tile radio options appear with an initial selection.
 */
export const TileWithSelection: Story = {
  render: () => <RadioGroupTileWithSelection />,
  args: {
    options: tileOptions,
    value: 'business',
    onChange: () => {},
    variant: 'tile',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeTileWithSelection,
        language: 'tsx',
      },
    },
  },
};

/**
 * RadioGroup with button variant.
 * Shows radio options styled as buttons.
 */
export const Button: Story = {
  render: () => <RadioGroupButton />,
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {},
    variant: 'button',
    orientation: 'horizontal',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeButton,
        language: 'tsx',
      },
    },
  },
};

/**
 * Button variant RadioGroup with vertical layout.
 * Shows radio options styled as buttons arranged vertically.
 */
export const ButtonVertical: Story = {
  render: () => <RadioGroupButtonVertical />,
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {},
    variant: 'button',
    orientation: 'vertical',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeButtonVertical,
        language: 'tsx',
      },
    },
  },
};

/**
 * Button variant RadioGroup with a pre-selected value.
 * Demonstrates how button radio options appear with an initial selection.
 */
export const ButtonWithSelection: Story = {
  render: () => <RadioGroupButtonWithSelection />,
  args: {
    options: defaultOptions,
    value: 'option2',
    onChange: () => {},
    variant: 'button',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeButtonWithSelection,
        language: 'tsx',
      },
    },
  },
};

/**
 * RadioGroup in a single column layout.
 * Shows radio options stacked vertically in one column.
 */
export const SingleColumn: Story = {
  render: () => <RadioGroupSingleColumn />,
  args: {
    options: defaultOptions,
    columns: 1,
    value: '',
    onChange: () => {},
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeSingleColumn,
        language: 'tsx',
      },
    },
  },
};

/**
 * RadioGroup in a three-column layout.
 * Demonstrates how radio options can be arranged in multiple columns.
 */
export const ThreeColumns: Story = {
  render: () => <RadioGroupThreeColumns />,
  args: {
    options: defaultOptions,
    columns: 3,
    value: '',
    onChange: () => {},
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeThreeColumns,
        language: 'tsx',
      },
    },
  },
};
