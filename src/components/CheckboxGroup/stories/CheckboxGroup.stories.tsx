import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxGroupButton } from '../demos/CheckboxGroupButton';
import sourceCodeButton from '../demos/CheckboxGroupButton.tsx?raw';
import { CheckboxGroupButtonVertical } from '../demos/CheckboxGroupButtonVertical';
import sourceCodeButtonVertical from '../demos/CheckboxGroupButtonVertical.tsx?raw';
import { CheckboxGroupButtonWithSelection } from '../demos/CheckboxGroupButtonWithSelection';
import sourceCodeButtonWithSelection from '../demos/CheckboxGroupButtonWithSelection.tsx?raw';
import { CheckboxGroupDefault } from '../demos/CheckboxGroupDefault';
import sourceCodeDefault from '../demos/CheckboxGroupDefault.tsx?raw';
import { CheckboxGroupHorizontal } from '../demos/CheckboxGroupHorizontal';
import sourceCodeHorizontal from '../demos/CheckboxGroupHorizontal.tsx?raw';
import { CheckboxGroupSingleColumn } from '../demos/CheckboxGroupSingleColumn';
import sourceCodeSingleColumn from '../demos/CheckboxGroupSingleColumn.tsx?raw';
import { CheckboxGroupThreeColumns } from '../demos/CheckboxGroupThreeColumns';
import sourceCodeThreeColumns from '../demos/CheckboxGroupThreeColumns.tsx?raw';
import { CheckboxGroupTile } from '../demos/CheckboxGroupTile';
import sourceCodeTile from '../demos/CheckboxGroupTile.tsx?raw';
import { CheckboxGroupTileWithSelection } from '../demos/CheckboxGroupTileWithSelection';
import sourceCodeTileWithSelection from '../demos/CheckboxGroupTileWithSelection.tsx?raw';
import { CheckboxGroupVertical } from '../demos/CheckboxGroupVertical';
import sourceCodeVertical from '../demos/CheckboxGroupVertical.tsx?raw';
import { CheckboxGroupWithDescription } from '../demos/CheckboxGroupWithDescription';
import sourceCodeWithDescription from '../demos/CheckboxGroupWithDescription.tsx?raw';
import { CheckboxGroupWithSelection } from '../demos/CheckboxGroupWithSelection';
import sourceCodeWithSelection from '../demos/CheckboxGroupWithSelection.tsx?raw';
import { CheckboxGroup } from '../src/CheckboxGroup';

const meta = {
  title: 'Inputs & Forms/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {},
  argTypes: {
    value: {
      control: 'object',
      description: 'Array of selected checkbox IDs',
      type: { name: 'array', value: { name: 'string' }, required: false },
    },
    onChange: {
      description: 'Callback when selection changes',
      type: { name: 'function', required: true },
      action: 'selection changed',
    },
    options: {
      control: 'object',
      description: 'Array of checkbox options',
      type: { name: 'array', value: { name: 'object', value: {} }, required: true },
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description:
        'Layout orientation of the checkbox group (only applies to default and button variants)',
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
      description: 'Visual variant of checkboxes',
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
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { id: 'option1', label: 'Option 1' },
  { id: 'option2', label: 'Option 2' },
  { id: 'option3', label: 'Option 3' },
];

const tileOptions = [
  {
    id: 'startup',
    label: 'Startup',
    description: 'Perfect for new businesses and small teams',
  },
  {
    id: 'business',
    label: 'Business',
    description: 'For medium-sized businesses and growing teams',
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    description: 'For large organizations and enterprise teams',
  },
];

/**
 * Interactive playground for the CheckboxGroup component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    options: defaultOptions,
    value: [],
    onChange: () => {},
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the CheckboxGroup component.
 * Shows a basic vertical checkbox group with no initial selection.
 */
export const Default: Story = {
  render: () => <CheckboxGroupDefault />,
  args: {
    options: defaultOptions,
    value: [],
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
 * CheckboxGroup with pre-selected values.
 * Demonstrates how the group appears with multiple checkboxes selected.
 */
export const WithSelection: Story = {
  render: () => <CheckboxGroupWithSelection />,
  args: {
    options: defaultOptions,
    value: ['option1', 'option3'],
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
 * CheckboxGroup with horizontal layout.
 * Shows checkboxes arranged in a horizontal line.
 */
export const Horizontal: Story = {
  render: () => <CheckboxGroupHorizontal />,
  args: {
    options: defaultOptions,
    value: [],
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
 * CheckboxGroup with vertical layout.
 * Shows checkboxes stacked vertically.
 */
export const Vertical: Story = {
  render: () => <CheckboxGroupVertical />,
  args: {
    options: defaultOptions,
    value: [],
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
 * CheckboxGroup with tile variant.
 * Shows checkboxes as larger tiles with descriptions.
 */
export const Tile: Story = {
  render: () => <CheckboxGroupTile />,
  args: {
    options: tileOptions,
    value: [],
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
 * Tile variant CheckboxGroup with pre-selected values.
 * Demonstrates how tile checkboxes appear with initial selections.
 */
export const TileWithSelection: Story = {
  render: () => <CheckboxGroupTileWithSelection />,
  args: {
    options: tileOptions,
    value: ['business'],
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
 * CheckboxGroup with button variant.
 * Shows checkboxes styled as buttons.
 */
export const Button: Story = {
  render: () => <CheckboxGroupButton />,
  args: {
    options: defaultOptions,
    value: [],
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
 * Button variant CheckboxGroup with vertical layout.
 * Shows checkboxes styled as buttons arranged vertically.
 */
export const ButtonVertical: Story = {
  render: () => <CheckboxGroupButtonVertical />,
  args: {
    options: defaultOptions,
    value: [],
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
 * Button variant CheckboxGroup with pre-selected values.
 * Demonstrates how button checkboxes appear with initial selections.
 */
export const ButtonWithSelection: Story = {
  render: () => <CheckboxGroupButtonWithSelection />,
  args: {
    options: defaultOptions,
    value: ['option2'],
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
 * CheckboxGroup in a single column layout.
 * Shows checkboxes stacked vertically in one column.
 */
export const SingleColumn: Story = {
  render: () => <CheckboxGroupSingleColumn />,
  args: {
    options: defaultOptions,
    columns: 1,
    value: [],
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
 * CheckboxGroup in a three-column layout.
 * Demonstrates how checkboxes can be arranged in multiple columns.
 */
export const ThreeColumns: Story = {
  render: () => <CheckboxGroupThreeColumns />,
  args: {
    options: defaultOptions,
    columns: 3,
    value: [],
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

/**
 * CheckboxGroup with descriptions in default variant.
 * Shows checkbox options with descriptions below each label.
 */
export const WithDescription: Story = {
  render: () => <CheckboxGroupWithDescription />,
  args: {
    options: [
      {
        id: 'option1',
        label: 'Option 1',
        description: 'This is a description for option 1 that provides additional context.',
      },
      {
        id: 'option2',
        label: 'Option 2',
        description: 'This is a description for option 2 that provides additional context.',
      },
      {
        id: 'option3',
        label: 'Option 3',
        description: 'This is a description for option 3 that provides additional context.',
      },
      {
        id: 'option4',
        label: 'Option 4',
        description: 'This is a description for option 4 that provides additional context.',
      },
    ],
    value: [],
    onChange: () => {},
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
