import type { Meta, StoryObj } from '@storybook/react';
import { MultiSelect } from '../src/MultiSelect';
import { MultiSelectDefault } from '../demos/MultiSelectDefault';
import { MultiSelectWithSelection } from '../demos/MultiSelectWithSelection';
import { MultiSelectCustomPlaceholders } from '../demos/MultiSelectCustomPlaceholders';
import { MultiSelectWithManyOptions } from '../demos/MultiSelectWithManyOptions';
import sourceCodeDefault from '../demos/MultiSelectDefault.tsx?raw';
import sourceCodeWithSelection from '../demos/MultiSelectWithSelection.tsx?raw';
import sourceCodeCustomPlaceholders from '../demos/MultiSelectCustomPlaceholders.tsx?raw';
import sourceCodeWithManyOptions from '../demos/MultiSelectWithManyOptions.tsx?raw';

const meta = {
  title: 'Inputs & Forms/MultiSelect',
  component: MultiSelect,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

/**
 * Interactive playground for the MultiSelect component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Select frameworks...',
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the MultiSelect component.
 * Shows a searchable dropdown that allows multiple selections from a list of frameworks.
 */
export const Default: Story = {
  render: () => <MultiSelectDefault />,
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Select frameworks...',
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
 * MultiSelect with pre-selected values.
 * Demonstrates how the component appears with multiple items already selected.
 */
export const WithSelection: Story = {
  render: () => <MultiSelectWithSelection />,
  args: {
    options,
    value: ['react', 'vue'],
    onChange: () => {},
    placeholder: 'Select frameworks...',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithSelection,
        language: 'tsx',
      },
    },
  },
};

/**
 * MultiSelect with custom placeholder text.
 * Shows how to customize the placeholder and search text for better user guidance.
 */
export const CustomPlaceholders: Story = {
  render: () => <MultiSelectCustomPlaceholders />,
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Choose your frameworks',
    searchPlaceholder: 'Search frameworks...',
    emptyMessage: 'No frameworks found',
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
 * MultiSelect with an extended list of options.
 * Demonstrates how the component handles a larger set of choices with scrolling.
 */
export const WithManyOptions: Story = {
  render: () => <MultiSelectWithManyOptions />,
  args: {
    options: [
      ...options,
      { value: 'next', label: 'Next.js' },
      { value: 'nuxt', label: 'Nuxt.js' },
      { value: 'gatsby', label: 'Gatsby' },
      { value: 'remix', label: 'Remix' },
      { value: 'astro', label: 'Astro' },
    ],
    value: [],
    onChange: () => {},
    placeholder: 'Select frameworks...',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithManyOptions,
        language: 'tsx',
      },
    },
  },
};
