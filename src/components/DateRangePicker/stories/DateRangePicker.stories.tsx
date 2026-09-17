import type { Meta, StoryObj } from '@storybook/react';
import { addWeeks } from 'date-fns';
import { DateRangePicker } from '../src/DateRangePicker';
import { DateRangePickerDefault } from '../demos/DateRangePickerDefault';
import { DateRangePickerWithValue } from '../demos/DateRangePickerWithValue';
import { DateRangePickerCustomPlaceholders } from '../demos/DateRangePickerCustomPlaceholders';
import { DateRangePickerWithMinAndMaxDate } from '../demos/DateRangePickerWithMinAndMaxDate';
import sourceCodeDefault from '../demos/DateRangePickerDefault.tsx?raw';
import sourceCodeWithValue from '../demos/DateRangePickerWithValue.tsx?raw';
import sourceCodeCustomPlaceholders from '../demos/DateRangePickerCustomPlaceholders.tsx?raw';
import sourceCodeWithMinAndMaxDate from '../demos/DateRangePickerWithMinAndMaxDate.tsx?raw';

const meta = {
  title: 'Data & Display/DateRangePicker',
  component: DateRangePicker,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'object',
      description: 'Placeholder text for the start and end date inputs',
      table: {
        type: {
          summary: '{ from?: string, to?: string }',
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
    startMonth: {
      control: 'date',
      description:
        '**Deprecated** -- prefer `minDate`. Limits which months the user can navigate to, at month granularity; every day in the boundary month stays selectable. Still honoured, and takes precedence over the month derived from `minDate`, for the uncommon case of browsing a wider range than can be selected.',
      table: {
        category: 'Deprecated',
        type: {
          summary: 'Date',
        },
      },
    },
    endMonth: {
      control: 'date',
      description:
        '**Deprecated** -- prefer `maxDate`. Limits which months the user can navigate to, at month granularity; every day in the boundary month stays selectable. Still honoured, and takes precedence over the month derived from `maxDate`, for the uncommon case of browsing a wider range than can be selected.',
      table: {
        category: 'Deprecated',
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
        'The name attribute for form submission. This is required for the date range picker value to be included in form data.',
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
        'Whether the date range picker is required for form validation. When true, the form cannot be submitted without a date range selection.',
      type: { name: 'boolean', required: false },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    autoFocus: {
      control: 'boolean',
      description: 'Automatically focuses the date range picker when the page loads.',
      type: { name: 'boolean', required: false },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
  },
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive playground for the DateRangePicker component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    value: {},
    onChange: () => {},
    placeholder: {
      from: 'Start date',
      to: 'End date',
    },
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the DateRangePicker component.
 * Shows the basic date range picker with no pre-selected dates.
 */
export const Default: Story = {
  render: args => <DateRangePickerDefault {...args} />,
  args: {
    value: {},
    onChange: () => {},
    placeholder: {
      from: 'Start date',
      to: 'End date',
    },
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
 * DateRangePicker with pre-selected date range.
 * Demonstrates how the component appears with initial start and end dates.
 */
export const WithValue: Story = {
  render: () => <DateRangePickerWithValue />,
  args: {
    value: {
      from: addWeeks(new Date(), -2), // 2 weeks before
      to: new Date(),
    },
    onChange: () => {},
    placeholder: {
      from: 'Start date',
      to: 'End date',
    },
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
 * DateRangePicker with custom placeholder text.
 * Shows how to customize the placeholder messages for both start and end dates.
 */
export const CustomPlaceholders: Story = {
  render: () => <DateRangePickerCustomPlaceholders />,
  args: {
    value: {},
    onChange: () => {},
    placeholder: {
      from: 'Check-in date',
      to: 'Check-out date',
    },
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
 * DateRangePicker restricted to a specific range of days.
 * `minDate` and `maxDate` are inclusive: days outside the window are disabled
 * in the calendar, so neither end of the selected range can fall outside it.
 * Navigation is limited to the surrounding months unless `startMonth`/`endMonth`
 * are set explicitly.
 */
export const WithMinAndMaxDate: Story = {
  render: () => <DateRangePickerWithMinAndMaxDate />,
  args: {
    value: {},
    onChange: () => {},
    placeholder: {
      from: 'Start date',
      to: 'End date',
    },
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
