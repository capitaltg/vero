import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '../src/DatePicker';
import { DatePickerDefault } from '../demos/DatePickerDefault';
import { DatePickerWithValue } from '../demos/DatePickerWithValue';
import { DatePickerWithStartAndEndMonth } from '../demos/DatePickerWithStartAndEndMonth';
import { DatePickerCustomPlaceholder } from '../demos/DatePickerCustomPlaceholder';
import sourceCodeDefault from '../demos/DatePickerDefault.tsx?raw';
import sourceCodeWithValue from '../demos/DatePickerWithValue.tsx?raw';
import sourceCodeWithStartAndEndMonth from '../demos/DatePickerWithStartAndEndMonth.tsx?raw';
import sourceCodeCustomPlaceholder from '../demos/DatePickerCustomPlaceholder.tsx?raw';

const meta = {
  title: 'Data & Display/DatePicker',
  component: DatePicker,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the date picker',
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
    name: {
      control: 'text',
      description:
        'The name attribute for form submission. This is required for the date picker value to be included in form data.',
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
        'Whether the date picker is required for form validation. When true, the form cannot be submitted without a date selection.',
      type: { name: 'boolean', required: false },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    autoFocus: {
      control: 'boolean',
      description: 'Automatically focuses the date picker when the page loads.',
      type: { name: 'boolean', required: false },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive playground for the DatePicker component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Pick a date',
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the DatePicker component.
 * Shows the basic date picker with no pre-selected date.
 */
export const Default: Story = {
  render: args => <DatePickerDefault {...args} />,
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Pick a date',
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
 * DatePicker with a pre-selected date.
 * Demonstrates how the component appears with an initial date value.
 */
export const WithValue: Story = {
  render: () => <DatePickerWithValue />,
  args: {
    value: new Date('2024-03-15'),
    onChange: () => {},
    placeholder: 'Pick a date',
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
 * DatePicker with restricted start and end months.
 * Shows how to limit the selectable date range within the specified months and years.
 */
export const WithStartAndEndMonth: Story = {
  render: () => <DatePickerWithStartAndEndMonth />,
  args: {
    onChange: () => {},
    placeholder: 'Pick a date',
    startMonth: new Date(2020, 0),
    endMonth: new Date(2025, 11),
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithStartAndEndMonth,
        language: 'tsx',
      },
    },
  },
};

/**
 * DatePicker with custom placeholder text.
 * Shows how to customize the placeholder message when no date is selected.
 */
export const CustomPlaceholder: Story = {
  render: () => <DatePickerCustomPlaceholder />,
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Select your birthday',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeCustomPlaceholder,
        language: 'tsx',
      },
    },
  },
};
