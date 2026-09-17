import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '../src/DatePicker';
import { DatePickerDefault } from '../demos/DatePickerDefault';
import { DatePickerWithValue } from '../demos/DatePickerWithValue';
import { DatePickerWithStartAndEndMonth } from '../demos/DatePickerWithStartAndEndMonth';
import { DatePickerCustomPlaceholder } from '../demos/DatePickerCustomPlaceholder';
import { DatePickerWithMinAndMaxDate } from '../demos/DatePickerWithMinAndMaxDate';
import sourceCodeDefault from '../demos/DatePickerDefault.tsx?raw';
import sourceCodeWithValue from '../demos/DatePickerWithValue.tsx?raw';
import sourceCodeWithStartAndEndMonth from '../demos/DatePickerWithStartAndEndMonth.tsx?raw';
import sourceCodeCustomPlaceholder from '../demos/DatePickerCustomPlaceholder.tsx?raw';
import sourceCodeWithMinAndMaxDate from '../demos/DatePickerWithMinAndMaxDate.tsx?raw';

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
    minDate: {
      control: 'date',
      description: 'The earliest date a user can select, inclusive. Days before this are disabled.',
      table: {
        type: {
          summary: 'Date',
        },
      },
    },
    maxDate: {
      control: 'date',
      description: 'The latest date a user can select, inclusive. Days after this are disabled.',
      table: {
        type: {
          summary: 'Date',
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
 * These limit which months the user can navigate to. They work at month
 * granularity -- every day within the boundary months stays selectable. To
 * restrict selection to specific days, use `minDate` and `maxDate` instead.
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

/**
 * DatePicker restricted to a specific range of days.
 * `minDate` and `maxDate` are inclusive: days outside the window are disabled
 * in the calendar and cannot be selected by mouse or keyboard. Navigation is
 * limited to the surrounding months unless `startMonth`/`endMonth` are set
 * explicitly.
 */
export const WithMinAndMaxDate: Story = {
  render: () => <DatePickerWithMinAndMaxDate />,
  args: {
    onChange: () => {},
    placeholder: 'Pick a date',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithMinAndMaxDate,
        language: 'tsx',
      },
    },
  },
};
