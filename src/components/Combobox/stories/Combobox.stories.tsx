import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from '../src/Combobox';
import { ComboboxDefault } from '../demos/ComboboxDefault';
import { ComboboxWithValue } from '../demos/ComboboxWithValue';
import { ComboboxCustomPlaceholders } from '../demos/ComboboxCustomPlaceholders';
import sourceCodeDefault from '../demos/ComboboxDefault.tsx?raw';
import sourceCodeWithValue from '../demos/ComboboxWithValue.tsx?raw';
import sourceCodeCustomPlaceholders from '../demos/ComboboxCustomPlaceholders.tsx?raw';

const meta = {
  title: 'Inputs & Forms/Combobox',
  component: Combobox,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'The selected value',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the combobox',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Placeholder text for the search input',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    emptyMessage: {
      control: 'text',
      description: 'Message to display when no options are found',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    zIndex: {
      control: 'number',
      description: 'Z-index for the popover',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    isDisabled: {
      control: 'boolean',
      description: 'Whether the component is disabled',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    className: {
      type: 'string',
      description: 'Additional class names to apply to the component',
    },
    listClassName: {
      type: 'string',
      description: 'Additional class names to apply to the options list',
    },
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

/**
 * Interactive playground for the Combobox component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Select framework...',
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the Combobox component.
 * Shows a searchable dropdown with framework options.
 */
export const Default: Story = {
  render: args => <ComboboxDefault {...args} />,
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Select framework...',
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
 * Combobox with a pre-selected value.
 * Demonstrates how the component appears with an initial selection.
 */
export const WithValue: Story = {
  render: args => <ComboboxWithValue {...args} />,
  args: {
    options,
    value: 'react',
    onChange: () => {},
    placeholder: 'Select framework...',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithValue,
        language: 'tsx',
      },
    },
  },
};

/**
 * Combobox with custom placeholder text.
 * Shows how to customize the placeholder and search text.
 */
export const CustomPlaceholders: Story = {
  render: args => <ComboboxCustomPlaceholders {...args} />,
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Choose your framework',
    searchPlaceholder: 'Search frameworks...',
    emptyMessage: 'No frameworks found',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeCustomPlaceholders,
        language: 'tsx',
      },
    },
  },
};
