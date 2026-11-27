import type { Meta, StoryObj } from '@storybook/react';
import { MultiSelectCustomPlaceholders } from '../demos/MultiSelectCustomPlaceholders';
import sourceCodeCustomPlaceholders from '../demos/MultiSelectCustomPlaceholders.tsx?raw';
import { MultiSelectDefault } from '../demos/MultiSelectDefault';
import sourceCodeDefault from '../demos/MultiSelectDefault.tsx?raw';
import { MultiSelectMinWidthPopover } from '../demos/MultiSelectMinWidthPopover';
import sourceCodeMinWidthPopover from '../demos/MultiSelectMinWidthPopover.tsx?raw';
import { MultiSelectWithManyOptions } from '../demos/MultiSelectWithManyOptions';
import sourceCodeWithManyOptions from '../demos/MultiSelectWithManyOptions.tsx?raw';
import { MultiSelectWithSelection } from '../demos/MultiSelectWithSelection';
import sourceCodeWithSelection from '../demos/MultiSelectWithSelection.tsx?raw';
import { MultiSelect } from '../src/MultiSelect';

const meta = {
  title: 'Inputs & Forms/MultiSelect',
  component: MultiSelect,
  parameters: {},
  // The docs page is MultiSelect.mdx, so there's no autodocs page.
  argTypes: {
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
  },
} satisfies Meta<typeof MultiSelect>;

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
    value: [],
    onChange: () => {},
    placeholder: 'Select frameworks...',
  },
};

/**
 * The default state of the MultiSelect component.
 * Shows a searchable dropdown that allows multiple selections from a list of frameworks.
 */
export const Default: Story = {
  render: args => <MultiSelectDefault {...args} />,
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Select frameworks...',
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
 * MultiSelect with pre-selected values.
 * Demonstrates how the component appears with multiple items already selected.
 */
export const WithSelection: Story = {
  render: args => <MultiSelectWithSelection {...args} />,
  args: {
    options,
    value: ['react', 'vue'],
    onChange: () => {},
    placeholder: 'Select frameworks...',
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
 * MultiSelect with custom placeholder text.
 * Shows how to customize the placeholder and search text for better user guidance.
 */
export const CustomPlaceholders: Story = {
  render: args => <MultiSelectCustomPlaceholders {...args} />,
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Choose your frameworks',
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

/**
 * MultiSelect with an extended list of options.
 * Demonstrates how the component handles a larger set of choices with scrolling.
 */
export const WithManyOptions: Story = {
  render: args => <MultiSelectWithManyOptions {...args} />,
  args: {
    options: [
      ...options,
      { value: 'next', label: 'Next.js' },
      { value: 'nuxt', label: 'Nuxt.js' },
      { value: 'gatsby', label: 'Gatsby' },
      { value: 'remix', label: 'Remix' },
      { value: 'astro', label: 'Astro' },
    ],
    value: [],
    onChange: () => {},
    placeholder: 'Select frameworks...',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithManyOptions,
        language: 'tsx',
      },
    },
  },
};

/**
 * Uses a fixed-width trigger (demonstrates ellipsis when the label is too long). Popover
 * uses `popoverClassName` so it can be wider than the trigger - the dropdown expands to
 * fit long option labels.
 */
export const MinWidthPopover: Story = {
  render: args => <MultiSelectMinWidthPopover {...args} />,
  args: {
    options: [],
    value: [],
    onChange: () => {},
  },
  parameters: {
    docs: {
      description: {
        story:
          'Uses a fixed-width trigger, which demonstrates ellipsis when the label content is too long. The popover content uses popoverClassName to set a minimum width, so it can grow when options are wider. Open the dropdown to see it expand for long labels.',
      },
      source: {
        code: sourceCodeMinWidthPopover,
        language: 'tsx',
      },
    },
  },
};
