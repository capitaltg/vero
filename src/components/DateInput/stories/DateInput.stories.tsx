import type { Meta, StoryObj } from '@storybook/react';
import { addDays, subDays } from 'date-fns';
import { useState } from 'react';
import { DateInput } from '../src/DateInput';
import type { DateInputProps } from '../types';

const meta = {
  title: 'Data & Display/DateInput',
  component: DateInput,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const DateInputDemo = ({ value: initialValue, ...args }: DateInputProps) => {
  const [value, setValue] = useState<Date | undefined>(initialValue);
  const [isValid, setIsValid] = useState(true);
  const [validationMessage, setValidationMessage] = useState<string>('');

  return (
    <div className="space-y-4">
      <DateInput
        {...args}
        value={value}
        onChange={setValue}
        onValidationChange={(valid, message) => {
          setIsValid(valid);
          setValidationMessage(message || '');
        }}
      />
      <div className="text-sm text-muted-foreground">
        <p>Selected date: {value ? value.toLocaleDateString() : 'none'}</p>
        <p>Validation: {isValid ? '✅ Valid' : '❌ Invalid'}</p>
        {validationMessage ? <p>Message: {validationMessage}</p> : null}
      </div>
    </div>
  );
};

/**
 * Interactive playground for the DateInput component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'MM/DD/YYYY',
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the DateInput component.
 * Shows a date input with validation and DatePicker dropdown.
 */
export const Default: Story = {
  render: args => <DateInputDemo {...args} />,
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'MM/DD/YYYY',
  },
};

/**
 * DateInput with a pre-selected date.
 * Demonstrates how the component appears with an initial date value.
 */
export const WithValue: Story = {
  render: args => <DateInputDemo {...args} />,
  args: {
    value: new Date('2024-03-15'),
    onChange: () => {},
    placeholder: 'MM/DD/YYYY',
  },
};

/**
 * DateInput with date range restrictions.
 * Shows how to limit selectable dates to a specific range.
 */
export const WithDateRestrictions: Story = {
  render: args => <DateInputDemo {...args} />,
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'MM/DD/YYYY',
    minDate: subDays(new Date(), 7), // 7 days ago
    maxDate: addDays(new Date(), 30), // 30 days from now
  },
};

/**
 * DateInput with custom error message.
 * Demonstrates how to display custom validation errors.
 */
export const WithCustomError: Story = {
  render: args => <DateInputDemo {...args} />,
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'MM/DD/YYYY',
    errorText: 'This field is required',
  },
};

/**
 * DateInput with manual input disabled.
 * Shows a date input that only allows selection via the calendar dropdown.
 */
export const DropdownOnly: Story = {
  render: args => <DateInputDemo {...args} />,
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Click to select date',
    allowManualInput: false,
  },
};

/**
 * DateInput with custom date format.
 * Demonstrates using a different date format for input and display.
 */
export const CustomFormat: Story = {
  render: args => <DateInputDemo {...args} />,
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'DD-MM-YYYY',
    dateFormat: 'dd-MM-yyyy',
  },
};

/**
 * A disabled DateInput.
 * Shows how the component appears when it's not interactive.
 */
export const Disabled: Story = {
  render: args => <DateInputDemo {...args} />,
  args: {
    value: new Date('2024-03-15'),
    onChange: () => {},
    placeholder: 'MM/DD/YYYY',
    isDisabled: true,
  },
};
