import { mockSearchLibraries } from '@/mocks';
import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete } from '../src/Autocomplete';
import { AutocompleteDefault } from '../demos/AutocompleteDefault';
import { AutocompleteWithStaticOptions } from '../demos/AutocompleteWithStaticOptions';
import sourceCodeDefault from '../demos/AutocompleteDefault.tsx?raw';
import sourceCodeWithStaticOptions from '../demos/AutocompleteWithStaticOptions.tsx?raw';

const meta = {
  title: 'Data & Display/Autocomplete',
  component: Autocomplete,
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
      description: 'Placeholder text for the input',
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
    loadingMessage: {
      control: 'text',
      description: 'Message to display while loading options',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    errorMessage: {
      control: 'text',
      description: 'Message to display when async fetch fails',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    maxSuggestions: {
      control: 'number',
      description: 'Maximum number of suggestions to display',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    debounceMs: {
      control: 'number',
      description: 'Debounce delay for async searches (in milliseconds)',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    minSearch: {
      control: 'number',
      description: 'Minimum characters before triggering async search',
      table: {
        type: {
          summary: 'number',
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
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive playground for the Autocomplete component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    loadOptions: mockSearchLibraries,
    value: '',
    onChange: () => {},
    placeholder: 'Search...',
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the Autocomplete component with async loading of options.
 * This demonstrates the basic functionality with a search input that loads results after a delay.
 * Search for "React" to see results.
 */
export const Default: Story = {
  render: args => <AutocompleteDefault {...args} />,
  args: {
    loadOptions: mockSearchLibraries,
    value: '',
    onChange: () => {},
    placeholder: 'Search...',
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
 * An example of the Autocomplete component with static options instead of async loading.
 * This shows how the component behaves with a predefined list of options.
 */
export const WithStaticOptions: Story = {
  render: args => <AutocompleteWithStaticOptions {...args} />,
  args: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    value: '',
    onChange: () => {},
    placeholder: 'Select an option...',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithStaticOptions,
        language: 'tsx',
      },
    },
  },
};
