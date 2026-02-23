import type { Meta, StoryObj } from '@storybook/react';
import { ComboboxCustomFilter } from '../demos/ComboboxCustomFilter';
import sourceCodeCustomFilter from '../demos/ComboboxCustomFilter.tsx?raw';
import { ComboboxCustomPlaceholders } from '../demos/ComboboxCustomPlaceholders';
import sourceCodeCustomPlaceholders from '../demos/ComboboxCustomPlaceholders.tsx?raw';
import { ComboboxDefault } from '../demos/ComboboxDefault';
import sourceCodeDefault from '../demos/ComboboxDefault.tsx?raw';
import { ComboboxFiltering } from '../demos/ComboboxFiltering';
import sourceCodeFiltering from '../demos/ComboboxFiltering.tsx?raw';
import { ComboboxWithValue } from '../demos/ComboboxWithValue';
import sourceCodeWithValue from '../demos/ComboboxWithValue.tsx?raw';
import { Combobox } from '../src/Combobox';

const meta = {
  title: 'Inputs & Forms/Combobox',
  component: Combobox,
  parameters: {
    docs: {
      description: {
        component:
          'Combobox is a searchable single-select dropdown. Users pick one option from a list; the trigger shows the selected option’s label, and the stored value is always the option’s `value`. Search filters the list by both label and value (case-insensitive substring) by default; you can pass a custom `filter` for different matching behavior. Use it when the list is long enough that typing to narrow options is helpful, and when you need a stable programmatic value (e.g. codes or IDs) while showing friendly labels.',
      },
    },
  },
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
    name: {
      control: 'text',
      description:
        'The name attribute for form submission. This is required for the combobox value to be included in form data.',
      type: { name: 'string', required: false },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    required: {
      control: 'boolean',
      description:
        'Whether the combobox is required for form validation. When true, the form cannot be submitted without a selection.',
      type: { name: 'boolean', required: false },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    autoFocus: {
      control: 'boolean',
      description: 'Automatically focuses the combobox when the page loads.',
      type: { name: 'boolean', required: false },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    filter: {
      description:
        "Custom filter function for search. Receives the option's value and search string. Return 0 to hide, positive number to show. When not provided, default matches by both value and label (case-insensitive substring).",
      table: {
        type: {
          summary: '(value: string, search: string) => number',
        },
      },
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
  render: args => <ComboboxDefault {...args} />,
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
  render: args => <ComboboxWithValue {...args} />,
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
  render: args => <ComboboxCustomPlaceholders {...args} />,
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

/**
 * Default filtering: search matches both the option label and value (case-insensitive substring).
 * The stored value is always the option’s `value` (e.g. country code). Try searching by
 * label (“United”) or by value (“US”).
 */
const filteringOptions = [
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'MX', label: 'Mexico' },
  { value: 'AU', label: 'Australia' },
];

export const Filtering: Story = {
  render: args => <ComboboxFiltering {...args} />,
  args: {
    options: filteringOptions,
    value: '',
    onChange: () => {},
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeFiltering,
        language: 'tsx',
      },
    },
  },
};

/**
 * Custom `filter` prop: only show the option when the search exactly matches its value.
 * Type a full country code (e.g. US, CA, GB) to see that single option; leave search empty
 * to see all. Contrast with the default filter, which matches substring anywhere in value or label.
 */
const customFilterOptions = [
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'MX', label: 'Mexico' },
  { value: 'AU', label: 'Australia' },
];

export const CustomFilter: Story = {
  render: args => <ComboboxCustomFilter {...args} />,
  args: {
    options: customFilterOptions,
    value: '',
    onChange: () => {},
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeCustomFilter,
        language: 'tsx',
      },
    },
  },
};
