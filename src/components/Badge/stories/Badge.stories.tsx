import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../src/Badge';

const meta = {
  title: 'Data & Display/Badge',
  component: Badge,
  parameters: {},
  tags: ['autodocs'],
  args: {
    variant: 'default',
    tone: 'dark',
    size: 'default',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'danger', 'warning', 'info', 'outline'],
      description: 'The visual style variant of the badge',
      table: {
        defaultValue: {
          summary: 'default',
        },
        type: {
          summary: 'default | primary | success | danger | warning | info | outline',
        },
      },
    },
    tone: {
      control: 'inline-radio',
      options: ['dark', 'light'],
      description:
        'The color weight of the badge. `dark` is a solid semantic fill; `light` is a tinted background with a 1px border in the same semantic color. Has no effect on the `outline` variant.',
      table: {
        defaultValue: {
          summary: 'dark',
        },
        type: {
          summary: 'dark | light',
        },
      },
    },
    size: {
      control: 'inline-radio',
      options: ['default', 'lg'],
      description: 'The size of the badge',
      table: {
        defaultValue: {
          summary: 'default',
        },
        type: {
          summary: 'default | lg',
        },
      },
    },
    children: {
      control: 'text',
      description: 'The content of the badge',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    className: {
      type: 'string',
      description: 'Additional class names to apply to the badge',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default state of the Badge component.
 * This shows the basic appearance with default styling.
 */
export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

/**
 * A badge with primary styling.
 * This variant is typically used for highlighting important information.
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

/**
 * A badge with success styling.
 * This variant is typically used to indicate successful actions or statuses.
 */
export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

/**
 * A badge with warning styling.
 * This variant is typically used to indicate caution or warnings.
 */
export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Success',
  },
};

/**
 * A badge with danger styling.
 * This variant is typically used to indicate errors or critical issues.
 */
export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger',
  },
};

/**
 * A badge with info styling.
 * This variant is typically used for neutral, informational context.
 */
export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info',
  },
};

/**
 * A badge with outline styling.
 * This variant provides a more subtle appearance with just a border.
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

/**
 * A badge with custom styling applied through className.
 * This demonstrates how the badge can be customized using Tailwind classes.
 */
export const WithCustomClass: Story = {
  args: {
    children: 'Custom',
    className: 'bg-purple-700 text-white',
  },
};

/**
 * The light tone renders a tinted background with a 1px border in the same
 * semantic color, for a quieter badge that still reads as its variant.
 */
export const Light: Story = {
  args: {
    variant: 'primary',
    tone: 'light',
    children: 'Primary',
  },
};

/**
 * The large size, for badges that need to hold their own next to body copy
 * or headings.
 */
export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Primary',
  },
};

/**
 * Every variant in both tones. The `outline` variant has no semantic fill to
 * lighten, so it renders the same either way.
 */
export const Tones: Story = {
  args: {
    children: 'Badge',
  },
  render: ({ children, ...args }) => (
    <div className="flex flex-col gap-3">
      {(['dark', 'light'] as const).map(tone => (
        <div key={tone} className="flex flex-wrap items-center gap-2">
          {(['default', 'primary', 'success', 'danger', 'warning', 'info', 'outline'] as const).map(
            variant => (
              <Badge key={variant} {...args} tone={tone} variant={variant}>
                {children}
              </Badge>
            ),
          )}
        </div>
      ))}
    </div>
  ),
};

/**
 * Both sizes, shown across the variants.
 */
export const Sizes: Story = {
  args: {
    children: 'Badge',
  },
  render: ({ children, ...args }) => (
    <div className="flex flex-col gap-3">
      {(['default', 'lg'] as const).map(size => (
        <div key={size} className="flex flex-wrap items-center gap-2">
          {(['default', 'primary', 'success', 'danger', 'warning', 'info', 'outline'] as const).map(
            variant => (
              <Badge key={variant} {...args} size={size} variant={variant}>
                {children}
              </Badge>
            ),
          )}
        </div>
      ))}
    </div>
  ),
};
