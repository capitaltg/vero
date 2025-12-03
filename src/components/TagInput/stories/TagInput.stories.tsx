import type { Meta, StoryObj } from '@storybook/react';
import { TagInputDefault } from '../demos/TagInputDefault';
import sourceCodeDefault from '../demos/TagInputDefault.tsx?raw';
import { TagInputDisabled } from '../demos/TagInputDisabled';
import sourceCodeDisabled from '../demos/TagInputDisabled.tsx?raw';
import { TagInputEmpty } from '../demos/TagInputEmpty';
import sourceCodeEmpty from '../demos/TagInputEmpty.tsx?raw';
import { TagInputWithMaxTags } from '../demos/TagInputWithMaxTags';
import sourceCodeWithMaxTags from '../demos/TagInputWithMaxTags.tsx?raw';
import { TagInputWithMultipleDelimiters } from '../demos/TagInputWithMultipleDelimiters';
import sourceCodeWithMultipleDelimiters from '../demos/TagInputWithMultipleDelimiters.tsx?raw';
import { TagInputWithSingleDelimiter } from '../demos/TagInputWithSingleDelimiter';
import sourceCodeWithSingleDelimiter from '../demos/TagInputWithSingleDelimiter.tsx?raw';
import { TagInput } from '../src/TagInput';

const meta = {
  title: 'Inputs & Forms/TagInput',
  component: TagInput,
  parameters: {},
  argTypes: {
    value: {
      control: 'object',
      description: 'Array of id/string pairs representing tags',
      type: { name: 'array', value: { name: 'object', value: {} }, required: true },
    },
    delimiterChars: {
      control: 'object',
      description: 'Array delimiter characters to split tags',
      type: { name: 'array', value: { name: 'object', value: {} }, required: false },
    },
    isDisabled: {
      control: 'boolean',
    },
  },
  tags: ['!dev'], // This story will be hidden from the sidebar
} satisfies Meta<typeof TagInput>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive playground for the TagInput component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: { value: [], delimiterChars: [], onChange: () => {}, placeholder: 'Add tags...' },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the TagInput component.
 * Shows a tag input with some pre-existing tags for React and TypeScript.
 */
export const Default: Story = {
  args: {
    value: [
      { id: '1', text: 'React' },
      { id: '2', text: 'TypeScript' },
    ],
    onChange: () => {},
    placeholder: 'Add tags...',
  },
  render: () => <TagInputDefault />,
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
 * An empty TagInput.
 * Shows the initial state before any tags are added.
 */
export const Empty: Story = {
  args: {
    value: [],
    onChange: () => {},
    placeholder: 'Add tags...',
  },
  render: () => <TagInputEmpty />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeEmpty,
        language: 'tsx',
      },
    },
  },
};

/**
 * A disabled TagInput.
 * Shows how the component appears when it's not interactive.
 */
export const Disabled: Story = {
  args: {
    value: [
      { id: '1', text: 'React' },
      { id: '2', text: 'TypeScript' },
    ],
    onChange: () => {},
    placeholder: 'Add tags...',
    isDisabled: true,
  },
  render: () => <TagInputDisabled />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeDisabled,
        language: 'tsx',
      },
    },
  },
};

/**
 * TagInput with a maximum number of tags.
 * Demonstrates how the component behaves when it reaches its tag limit.
 */
export const WithMaxTags: Story = {
  args: {
    value: [
      { id: '1', text: 'React' },
      { id: '2', text: 'TypeScript' },
    ],
    onChange: () => {},
    placeholder: 'Add tags...',
    maxTags: 3,
  },
  render: () => <TagInputWithMaxTags />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithMaxTags,
        language: 'tsx',
      },
    },
  },
};

/**
 * TagInput with a single delimiter character.
 * Shows how tags can be created using a comma as a separator.
 */
export const WithSingleDelimiter: Story = {
  args: {
    value: [{ id: '1', text: 'React' }],
    onChange: () => {},
    placeholder: 'Add tags...',
    delimiterChars: ',',
  },
  render: () => <TagInputWithSingleDelimiter />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithSingleDelimiter,
        language: 'tsx',
      },
    },
  },
};

/**
 * TagInput with multiple delimiter characters.
 * Demonstrates using multiple characters (comma, space, and pipe) to create tags.
 */
export const WithMultipleDelimiters: Story = {
  args: {
    value: [{ id: '1', text: 'React' }],
    onChange: () => {},
    placeholder: 'Add tags...',
    delimiterChars: [',', ' ', '|'],
  },
  render: () => <TagInputWithMultipleDelimiters />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithMultipleDelimiters,
        language: 'tsx',
      },
    },
  },
};
