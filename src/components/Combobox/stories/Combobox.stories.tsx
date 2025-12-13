import type { Meta, StoryObj } from '@storybook/react';
import { ComboboxCustomPlaceholders } from '../demos/ComboboxCustomPlaceholders';
import sourceCodeCustomPlaceholders from '../demos/ComboboxCustomPlaceholders.tsx?raw';
import { ComboboxDefault } from '../demos/ComboboxDefault';
import sourceCodeDefault from '../demos/ComboboxDefault.tsx?raw';
import { ComboboxWithValue } from '../demos/ComboboxWithValue';
import sourceCodeWithValue from '../demos/ComboboxWithValue.tsx?raw';
import { Combobox } from '../src/Combobox';

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
    placeholder: 'Select framework...',
    onChange: () => {},
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the Combobox component.
 * Shows a searchable dropdown with framework options.
 */
export const Default: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({ onChange, ...args }) => <ComboboxDefault {...args} />,
  args: {
    options,
    value: '',
    placeholder: 'Select framework...',
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
 * Combobox with a pre-selected value.
 * Demonstrates how the component appears with an initial selection.
 */
export const WithValue: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({ onChange, ...args }) => <ComboboxWithValue {...args} />,
  args: {
    options,
    value: 'react',
    placeholder: 'Select framework...',
    onChange: () => {},
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({ onChange, ...args }) => <ComboboxCustomPlaceholders {...args} />,
  args: {
    options,
    value: '',
    placeholder: 'Choose your framework',
    searchPlaceholder: 'Search frameworks...',
    emptyMessage: 'No frameworks found',
    onChange: () => {},
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
