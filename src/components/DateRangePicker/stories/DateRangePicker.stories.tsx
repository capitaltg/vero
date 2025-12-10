import type { Meta, StoryObj } from '@storybook/react';
import { addWeeks } from 'date-fns';
import { DateRangePicker } from '../src/DateRangePicker';
import { DateRangePickerDefault } from '../demos/DateRangePickerDefault';
import { DateRangePickerWithValue } from '../demos/DateRangePickerWithValue';
import { DateRangePickerCustomPlaceholders } from '../demos/DateRangePickerCustomPlaceholders';
import sourceCodeDefault from '../demos/DateRangePickerDefault.tsx?raw';
import sourceCodeWithValue from '../demos/DateRangePickerWithValue.tsx?raw';
import sourceCodeCustomPlaceholders from '../demos/DateRangePickerCustomPlaceholders.tsx?raw';

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
    className: {
      type: 'string',
      description: 'Additional class names to apply to the component',
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
