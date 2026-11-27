import type { Meta, StoryObj } from '@storybook/react';
import { addWeeks } from 'date-fns';
import { DateRangePicker } from '../src/DateRangePicker';
import { DateRangePickerDefault } from '../demos/DateRangePickerDefault';
import { DateRangePickerWithValue } from '../demos/DateRangePickerWithValue';
import { DateRangePickerCustomPlaceholders } from '../demos/DateRangePickerCustomPlaceholders';
import { DateRangePickerWithMinAndMaxDate } from '../demos/DateRangePickerWithMinAndMaxDate';
import { DateRangePickerWithExcludedDates } from '../demos/DateRangePickerWithExcludedDates';
import sourceCodeDefault from '../demos/DateRangePickerDefault.tsx?raw';
import sourceCodeWithValue from '../demos/DateRangePickerWithValue.tsx?raw';
import sourceCodeCustomPlaceholders from '../demos/DateRangePickerCustomPlaceholders.tsx?raw';
import sourceCodeWithMinAndMaxDate from '../demos/DateRangePickerWithMinAndMaxDate.tsx?raw';
import sourceCodeWithExcludedDates from '../demos/DateRangePickerWithExcludedDates.tsx?raw';

const meta = {
  title: 'Data & Display/DateRangePicker',
  component: DateRangePicker,
  parameters: {},
  // The docs page is DateRangePicker.mdx, so there's no autodocs page.
  argTypes: {
    placeholder: {
      control: 'object',
      table: {
        type: {
          summary: '{ from?: string, to?: string }',
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
    minDate: {
      control: 'date',
      table: {
        type: {
          summary: 'Date',
        },
      },
    },
    maxDate: {
      control: 'date',
      table: {
        type: {
          summary: 'Date',
        },
      },
    },
    excludeDates: {
      control: false,
      table: {
        type: {
          summary: 'Date[] | ((date: Date) => boolean)',
        },
      },
    },
    startMonth: {
      control: 'date',
      table: {
        category: 'Deprecated',
        type: {
          summary: 'Date',
        },
      },
    },
    endMonth: {
      control: 'date',
      table: {
        category: 'Deprecated',
        type: {
          summary: 'Date',
        },
      },
    },
    className: {
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
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Use the controls to try each option. The docs page shows it under "Try It"; keep it the
 * first story, since the Examples section skips the first one.
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

/**
 * DateRangePicker with individual days excluded.
 * `excludeDates` disables days *inside* the allowed window, so they cannot be
 * used as either end of a range. A range may also not span an excluded day:
 * picking an end date across one starts a new range from that day instead.
 */
export const WithExcludedDates: Story = {
  render: () => <DateRangePickerWithExcludedDates />,
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
        code: sourceCodeWithExcludedDates,
        language: 'tsx',
      },
    },
  },
};
