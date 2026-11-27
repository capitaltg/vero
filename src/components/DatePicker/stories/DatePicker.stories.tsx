import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '../src/DatePicker';
import { DatePickerDefault } from '../demos/DatePickerDefault';
import { DatePickerWithValue } from '../demos/DatePickerWithValue';
import { DatePickerWithStartAndEndMonth } from '../demos/DatePickerWithStartAndEndMonth';
import { DatePickerCustomPlaceholder } from '../demos/DatePickerCustomPlaceholder';
import { DatePickerWithMinAndMaxDate } from '../demos/DatePickerWithMinAndMaxDate';
import { DatePickerWithExcludedDates } from '../demos/DatePickerWithExcludedDates';
import sourceCodeDefault from '../demos/DatePickerDefault.tsx?raw';
import sourceCodeWithValue from '../demos/DatePickerWithValue.tsx?raw';
import sourceCodeWithStartAndEndMonth from '../demos/DatePickerWithStartAndEndMonth.tsx?raw';
import sourceCodeCustomPlaceholder from '../demos/DatePickerCustomPlaceholder.tsx?raw';
import sourceCodeWithMinAndMaxDate from '../demos/DatePickerWithMinAndMaxDate.tsx?raw';
import sourceCodeWithExcludedDates from '../demos/DatePickerWithExcludedDates.tsx?raw';

const meta = {
  title: 'Data & Display/DatePicker',
  component: DatePicker,
  parameters: {},
  // The docs page is DatePicker.mdx, so there's no autodocs page.
  argTypes: {
    placeholder: {
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
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Use the controls to try each option. The docs page shows it under "Try It"; keep it the
 * first story, since the Examples section skips the first one.
 */
export const Playground: Story = {
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Pick a date',
  },
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
 * **Deprecated -- prefer `minDate`/`maxDate`.**
 *
 * `startMonth`/`endMonth` limit which months the user can navigate to. They
 * work at month granularity and never blocked selection: every day within the
 * boundary months stays selectable, so they cannot express a bound like "no
 * earlier than the 15th". They remain honoured, and still take precedence over
 * the months derived from `minDate`/`maxDate`, for the uncommon case of letting
 * users browse a wider range than they can select.
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

/**
 * DatePicker with individual days excluded.
 * `excludeDates` disables days *inside* the allowed window -- blackout dates,
 * weekends, holidays -- as either an explicit list or a predicate. It does not
 * change which months can be navigated to, since exclusions are holes rather
 * than edges.
 */
export const WithExcludedDates: Story = {
  render: () => <DatePickerWithExcludedDates />,
  args: {
    onChange: () => {},
    placeholder: 'Pick a date',
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
