import { mockSearchLibraries } from '@/mocks';
import type { Meta, StoryObj } from '@storybook/react';
import { AutocompleteDefault } from '../demos/AutocompleteDefault';
import sourceCodeDefault from '../demos/AutocompleteDefault.tsx?raw';
import { AutocompleteWithCustomRender } from '../demos/AutocompleteWithCustomRender';
import sourceCodeWithCustomRender from '../demos/AutocompleteWithCustomRender.tsx?raw';
import { AutocompleteWithRenderValue } from '../demos/AutocompleteWithRenderValue';
import sourceCodeWithRenderValue from '../demos/AutocompleteWithRenderValue.tsx?raw';
import { AutocompleteWithItemCallback } from '../demos/AutocompleteWithItemCallback';
import sourceCodeWithItemCallback from '../demos/AutocompleteWithItemCallback.tsx?raw';
import { AutocompleteMinWidthPopover } from '../demos/AutocompleteMinWidthPopover';
import sourceCodeMinWidthPopover from '../demos/AutocompleteMinWidthPopover.tsx?raw';
import { AutocompleteWithStaticOptions } from '../demos/AutocompleteWithStaticOptions';
import sourceCodeWithStaticOptions from '../demos/AutocompleteWithStaticOptions.tsx?raw';
import { AutocompleteAnnouncementDebug } from '../demos/AutocompleteAnnouncementDebug';
import sourceCodeAnnouncementDebug from '../demos/AutocompleteAnnouncementDebug.tsx?raw';
import { Autocomplete } from '../src/Autocomplete';

const meta = {
  title: 'Data & Display/Autocomplete',
  component: Autocomplete,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'The selected value',
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
    emptyMessage: {
      control: 'text',
      description: 'Message to display when no options are found',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    loadingMessage: {
      control: 'text',
      description: 'Message to display while loading options',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    errorMessage: {
      control: 'text',
      description: 'Message to display when async fetch fails',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    maxSuggestions: {
      control: 'number',
      description: 'Maximum number of suggestions to display',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    debounceMs: {
      control: 'number',
      description: 'Debounce delay for async searches (in milliseconds)',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    minSearch: {
      control: 'number',
      description: 'Minimum characters before triggering async search',
      table: {
        type: {
          summary: 'number',
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
    listClassName: {
      type: 'string',
      description: 'Additional class names to apply to the options list',
    },
    name: {
      control: 'text',
      description:
        'The name attribute for form submission. This is required for the autocomplete value to be included in form data.',
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
        'Whether the autocomplete is required for form validation. When true, the form cannot be submitted without a selection.',
      type: { name: 'boolean', required: false },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    autoFocus: {
      control: 'boolean',
      description: 'Automatically focuses the autocomplete when the page loads.',
      type: { name: 'boolean', required: false },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
  },
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive playground for the Autocomplete component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    loadOptions: mockSearchLibraries,
    getOptionValue: (o: { value: string }) => o.value,
    getOptionLabel: (o: { label: string }) => o.label,
    value: '',
    onChange: () => {},
    placeholder: 'Search...',
  } as unknown as Story['args'],
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the Autocomplete component with async loading of options.
 * This demonstrates the basic functionality with a search input that loads results after a delay.
 * Search for "React" to see results.
 */
export const Default: Story = {
  render: () => <AutocompleteDefault value="" onChange={() => {}} />,
  // @ts-expect-error - Storybook can't properly infer generic types
  args: {},
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
 * An example of the Autocomplete component with static options instead of async loading.
 * This shows how the component behaves with a predefined list of options.
 */
export const WithStaticOptions: Story = {
  render: () => <AutocompleteWithStaticOptions value="" onChange={() => {}} />,
  // @ts-expect-error - Storybook can't properly infer generic types
  args: {},
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithStaticOptions,
        language: 'tsx',
      },
    },
  },
};

/**
 * Uses `renderValue` and `renderOption` together with `getOptionValue` — no `labelKey` or
 * `valueKey` needed. `renderValue` controls what appears in the trigger after a selection;
 * `renderOption` controls each row in the dropdown.
 */
export const WithRenderValue: Story = {
  render: () => <AutocompleteWithRenderValue />,
  // @ts-expect-error - Storybook can't properly infer generic types
  args: {},
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithRenderValue,
        language: 'tsx',
      },
    },
  },
};

/**
 * An example of the Autocomplete component with a custom renderOption function.
 * This demonstrates how to customize the appearance of each option, including showing
 * additional information like descriptions and featured badges.
 */
export const WithCustomRender: Story = {
  render: () => <AutocompleteWithCustomRender value="" onChange={() => {}} />,
  // @ts-expect-error - Storybook can't properly infer generic types
  args: {},
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithCustomRender,
        language: 'tsx',
      },
    },
  },
};

/**
 * An example of the Autocomplete component using the full item object from the onChange callback.
 * This demonstrates how to access the complete option object (not just the value) when a selection
 * is made, which is useful for displaying additional information or performing actions with the full data.
 */
export const WithItemCallback: Story = {
  render: () => <AutocompleteWithItemCallback value="" onChange={() => {}} />,
  // @ts-expect-error - Storybook can't properly infer generic types
  args: {},
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithItemCallback,
        language: 'tsx',
      },
    },
  },
};

/**
 * Uses a fixed-width trigger (demonstrates ellipsis when the label is too long). Popover
 * uses `popoverClassName` so it can be wider than the trigger - the dropdown expands to
 * fit long option labels.
 */
/**
 * Debug harness for the screen-reader announcements (508). It watches the real
 * `[role="status"][aria-live]` live region with a MutationObserver and logs
 * every text change — this is exactly what a screen reader would speak — plus
 * focus moves, so announcements and focus changes can be correlated on a
 * timeline. The "Current live-region text" panel mirrors the region visibly
 * (the panels are `aria-hidden` so they are not themselves announced).
 *
 * To debug: open the list (see "N results available"), narrow to one result
 * ("1 result available"), search for nothing ("No results found"), and select
 * an option (should log "<label> selected", then focus returning to the
 * trigger).
 */
export const AnnouncementDebug: Story = {
  render: () => <AutocompleteAnnouncementDebug />,
  // @ts-expect-error - Storybook can't properly infer generic types
  args: {},
  tags: ['!autodocs'],
  parameters: {
    docs: {
      source: {
        code: sourceCodeAnnouncementDebug,
        language: 'tsx',
      },
    },
  },
};

export const MinWidthPopover: Story = {
  render: () => <AutocompleteMinWidthPopover value="" onChange={() => {}} />,
  // @ts-expect-error - Storybook can't properly infer generic types
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Uses a fixed-width trigger, which demonstrates ellipsis when the label content is too long. The popover content uses popoverClassName to set a minimum width, so it can grow when options are wider. Open the dropdown to see it expand for long labels.',
      },
      source: {
        code: sourceCodeMinWidthPopover,
        language: 'tsx',
      },
    },
  },
};
