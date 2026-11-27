import type { Meta, StoryObj } from '@storybook/react';
import { ComboboxCustomFilter } from '../demos/ComboboxCustomFilter';
import sourceCodeCustomFilter from '../demos/ComboboxCustomFilter.tsx?raw';
import { ComboboxCustomPlaceholders } from '../demos/ComboboxCustomPlaceholders';
import sourceCodeCustomPlaceholders from '../demos/ComboboxCustomPlaceholders.tsx?raw';
import { ComboboxDefault } from '../demos/ComboboxDefault';
import sourceCodeDefault from '../demos/ComboboxDefault.tsx?raw';
import { ComboboxFiltering } from '../demos/ComboboxFiltering';
import sourceCodeFiltering from '../demos/ComboboxFiltering.tsx?raw';
import { ComboboxMinWidthPopover } from '../demos/ComboboxMinWidthPopover';
import sourceCodeMinWidthPopover from '../demos/ComboboxMinWidthPopover.tsx?raw';
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
  // The docs page is Combobox.mdx, so there's no autodocs page.
  argTypes: {
    value: {
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    placeholder: {
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    searchPlaceholder: {
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    emptyMessage: {
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    zIndex: {
      control: 'number',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    isDisabled: {
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    className: {
      type: 'string',
    },
    listClassName: {
      type: 'string',
    },
    popoverClassName: {
      type: 'string',
    },
    name: {
      control: 'text',
      type: { name: 'string', required: false },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    required: {
      control: 'boolean',
      type: { name: 'boolean', required: false },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    autoFocus: {
      control: 'boolean',
      type: { name: 'boolean', required: false },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    filter: {
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
 * Use the controls to try each option. The docs page shows it under "Try It"; keep it the
 * first story, since the Examples section skips the first one.
 */
export const Playground: Story = {
  args: {
    options,
    value: '',
    placeholder: 'Select framework...',
    onChange: () => {},
  },
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
      description: {
        story:
          'Default filtering: search matches both the option label and value (case-insensitive substring). The stored value is always the option’s `value` (e.g. country code). Try searching by label (“United”) or by value (“US”).',
      },
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
      description: {
        story:
          'Custom `filter` prop: only show the option when the search exactly matches its value. Type a full country code (e.g. US, CA, GB) to see that single option; leave search empty to see all. Contrast with the default filter, which matches substring anywhere in value or label.',
      },
      source: {
        code: sourceCodeCustomFilter,
        language: 'tsx',
      },
    },
  },
};

/**
 * Uses a fixed-width trigger (demonstrates ellipsis when the label is too long). Popover
 * uses `min-w-[--radix-popover-trigger-width]` so it is at least as wide as the trigger
 * but can grow when option labels are longer - the dropdown expands to fit the content.
 */
export const MinWidthPopover: Story = {
  render: args => <ComboboxMinWidthPopover {...args} />,
  args: {
    options: [],
    value: '',
    onChange: () => {},
  },
  parameters: {
    docs: {
      description: {
        story:
          'Uses a fixed-width trigger, which demonstrates ellipsis when the label content is too long. The popover content uses minimum width equal to the trigger width, so it can grow when options are wider. Open the dropdown to see it expand for long labels.',
      },
      source: {
        code: sourceCodeMinWidthPopover,
        language: 'tsx',
      },
    },
  },
};
