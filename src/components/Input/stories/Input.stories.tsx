import type { Meta, StoryObj } from '@storybook/react';
import { InputWithKeyboardEvents } from '../demos/InputWithKeyboardEvents';
import sourceCodeWithKeyboardEvents from '../demos/InputWithKeyboardEvents.tsx?raw';
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
      options: [
        'uppercase',
        'lowercase',
        'trim',
        'capitalize',
        'remove-spaces',
        'numbers-only',
        'alphanumeric',
        'slug',
        'kebab-case',
        'snake-case',
        'none',
      ],
      description:
        'Text transformation to apply. Can be a preset string, a custom function, or an array combining both.',
      table: {
        type: {
          summary:
            'TextTransform | TextTransformFunction | (TextTransform | TextTransformFunction)[]',
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
 * Input with automatic capitalization of each word.
 * Demonstrates the transform feature for title case text.
 */
export const WithTransformCapitalize: Story = {
  args: {
    transform: 'capitalize',
    placeholder: 'Each word will be capitalized',
  },
};

/**
 * Input that removes all spaces.
 * Demonstrates the transform feature for removing whitespace.
 */
export const WithTransformRemoveSpaces: Story = {
  args: {
    transform: 'remove-spaces',
    placeholder: 'All spaces will be removed',
  },
};

/**
 * Input that only allows numbers.
 * Demonstrates the transform feature for numeric-only input.
 */
export const WithTransformNumbersOnly: Story = {
  args: {
    transform: 'numbers-only',
    placeholder: 'Only numbers allowed',
  },
};

/**
 * Input that only allows alphanumeric characters.
 * Demonstrates the transform feature for alphanumeric-only input.
 */
export const WithTransformAlphanumeric: Story = {
  args: {
    transform: 'alphanumeric',
    placeholder: 'Only letters and numbers allowed',
  },
};

/**
 * Input with automatic slug transformation.
 * Demonstrates the transform feature for URL-friendly slugs.
 */
export const WithTransformSlug: Story = {
  args: {
    transform: 'slug',
    placeholder: 'Text will be converted to a slug',
  },
};

/**
 * Input with automatic kebab-case transformation.
 * Demonstrates the transform feature for kebab-case text.
 */
export const WithTransformKebabCase: Story = {
  args: {
    transform: 'kebab-case',
    placeholder: 'Text will be converted to kebab-case',
  },
};

/**
 * Input with automatic snake_case transformation.
 * Demonstrates the transform feature for snake_case text.
 */
export const WithTransformSnakeCase: Story = {
  args: {
    transform: 'snake-case',
    placeholder: 'Text will be converted to snake_case',
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
 * Input with a custom transform function.
 * This example formats input as a US phone number: (123) 456-7890
 */
export const WithCustomTransformPhone: Story = {
  args: {
    placeholder: 'Enter phone number',
    transform: (value: string) => {
      // Remove all non-digits
      const digits = value.replace(/\D/g, '').slice(0, 10);
      // Format as phone number
      if (digits.length <= 3) return digits;
      if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<Input
  placeholder="Enter phone number"
  transform={(value) => {
    const digits = value.replace(/\\D/g, '').slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return \`(\${digits.slice(0, 3)}) \${digits.slice(3)}\`;
    return \`(\${digits.slice(0, 3)}) \${digits.slice(3, 6)}-\${digits.slice(6)}\`;
  }}
/>`,
      },
    },
  },
};

/**
 * Input with a custom regex-based transform.
 * This example only allows currency input (numbers with up to 2 decimal places).
 */
export const WithCustomTransformCurrency: Story = {
  args: {
    placeholder: 'Enter amount (e.g., 123.45)',
    transform: (value: string) => {
      // Allow only numbers and a single decimal point
      const cleaned = value.replace(/[^\d.]/g, '');
      // Ensure only one decimal point
      const parts = cleaned.split('.');
      if (parts.length > 2) return parts[0] + '.' + parts.slice(1).join('');
      // Limit to 2 decimal places
      if (parts[1]?.length > 2) return parts[0] + '.' + parts[1].slice(0, 2);
      return cleaned;
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<Input
  placeholder="Enter amount"
  transform={(value) => {
    const cleaned = value.replace(/[^\\d.]/g, '');
    const parts = cleaned.split('.');
    if (parts.length > 2) return parts[0] + '.' + parts.slice(1).join('');
    if (parts[1]?.length > 2) return parts[0] + '.' + parts[1].slice(0, 2);
    return cleaned;
  }}
/>`,
      },
    },
  },
};

/**
 * Input combining preset and custom transforms.
 * This example trims whitespace, converts to uppercase, then applies a custom max-length limit.
 */
export const WithMixedTransforms: Story = {
  args: {
    placeholder: 'Max 10 chars, uppercase',
    transform: ['trim', 'uppercase', (value: string) => value.slice(0, 10)],
  },
  parameters: {
    docs: {
      source: {
        code: `<Input
  placeholder="Max 10 chars, uppercase"
  transform={['trim', 'uppercase', (value) => value.slice(0, 10)]}
/>`,
      },
    },
  },
};
