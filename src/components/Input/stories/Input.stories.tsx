import type { Meta, StoryObj } from '@storybook/react';
import { InputWithKeyboardEvents } from '../demos/InputWithKeyboardEvents';
import sourceCodeWithKeyboardEvents from '../demos/InputWithKeyboardEvents.tsx?raw';
import { InputWithMask } from '../demos/InputWithMask';
import sourceCodeWithMask from '../demos/InputWithMask.tsx?raw';
import { InputWithRawValue } from '../demos/InputWithRawValue';
import sourceCodeWithRawValue from '../demos/InputWithRawValue.tsx?raw';
import { Input } from '../src/Input';

const meta = {
  title: 'Inputs & Forms/Input',
  component: Input,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'The input type attribute',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    value: {
      control: 'text',
      description: 'The value of the input',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    transform: {
      control: 'select',
      options: ['uppercase', 'lowercase', 'trim', 'none'],
      description: 'Text transformation to apply to the input value',
      table: {
        type: {
          summary: 'TextTransform | TextTransform[]',
        },
      },
    },
    mask: {
      control: 'select',
      options: [
        // Phone
        'phone',
        'phone-us',
        'phone-uk',
        'phone-ca',
        'phone-us-ext',
        'phone-international',
        // Identification
        'ssn',
        'tax-id',
        'passport',
        'license',
        'a-number',
        'z-number',
        // Financial
        'credit-card',
        'credit-card-amex',
        'routing-number',
        'currency',
        // Dates & Time
        'date',
        'date-us',
        'date-iso',
        'date-eu',
        'time',
        'time-24',
        'datetime',
        // Address
        'zip-code',
        'zip-code-us',
        'postal-ca',
        'postal-uk',
      ],
      description:
        'Input mask pattern for formatting user input. Can be a predefined pattern or a custom pattern string. Custom patterns: "9" = digit, "a" = letter, "*" = alphanumeric, other chars = literal.',
      table: {
        type: {
          summary: 'InputMask',
        },
      },
    },
    isDisabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    className: {
      type: 'string',
      description: 'Additional class names to apply to the input',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default state of the Input component.
 * Shows a basic text input field with placeholder text.
 */
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

/**
 * Input with a specific type attribute.
 * Demonstrates using the input as an email field.
 */
export const WithType: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter email...',
  },
};

/**
 * Input with a pre-filled value.
 * Shows how the input appears with initial text content.
 */
export const WithValue: Story = {
  args: {
    value: 'Hello World',
    placeholder: 'Enter text...',
  },
};

/**
 * A disabled input field.
 * Shows how the input appears when it's not interactive.
 */
export const Disabled: Story = {
  args: {
    isDisabled: true,
    placeholder: 'Disabled input',
  },
};

/**
 * Input with automatic text transformation to uppercase.
 * Demonstrates the transform feature for uppercase text.
 */
export const WithTransformUppercase: Story = {
  args: {
    transform: 'uppercase',
    placeholder: 'Text will be uppercase',
  },
};

/**
 * Input with automatic text transformation to lowercase.
 * Demonstrates the transform feature for lowercase text.
 */
export const WithTransformLowercase: Story = {
  args: {
    transform: 'lowercase',
    placeholder: 'Text will be lowercase',
  },
};

/**
 * Input with automatic whitespace trimming.
 * Shows how the transform feature removes leading and trailing spaces.
 */
export const WithTransformTrim: Story = {
  args: {
    transform: 'trim',
    placeholder: 'Whitespace will be trimmed',
  },
};

/**
 * Input with multiple text transformations.
 * Demonstrates combining multiple transform operations.
 */
export const WithMultipleTransforms: Story = {
  args: {
    transform: ['trim', 'uppercase'],
    placeholder: 'Text will be trimmed and uppercase',
  },
};

/**
 * Input with onKeyDown and onKeyUp event handlers.
 * Demonstrates that keyboard events are properly handled.
 * Press any key to see the events logged in the console.
 */
export const WithKeyboardEvents: Story = {
  args: {
    transform: 'uppercase',
  },

  render: () => <InputWithKeyboardEvents />,

  parameters: {
    docs: {
      source: {
        code: sourceCodeWithKeyboardEvents,
      },
    },
  },
};

/**
 * Input with various mask patterns.
 * Demonstrates how input masks format user input in real-time.
 * Examples include phone numbers, SSN, credit cards, dates, and custom patterns.
 */
export const WithMask: Story = {
  render: () => <InputWithMask />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithMask,
        language: 'tsx',
      },
    },
  },
};

/**
 * Input with raw value extraction.
 * Demonstrates how to access both the masked (formatted) value and the raw value
 * (without mask literals) from the onChange event. The rawValue property is useful
 * when you need to store or process the unformatted data while displaying the
 * formatted value to users.
 */
export const WithRawValue: Story = {
  render: () => <InputWithRawValue />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithRawValue,
        language: 'tsx',
      },
    },
  },
};
