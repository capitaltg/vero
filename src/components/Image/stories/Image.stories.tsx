import type { Meta, StoryObj } from '@storybook/react';
import { ImageChangingSrc } from '../demos/ImageChangingSrc';
import sourceCodeChangingSrc from '../demos/ImageChangingSrc.tsx?raw';
import { Image } from '../src/Image';

const meta = {
  title: 'Data & Display/Image',
  component: Image,
  parameters: {},
  // The docs page is Image.mdx, so there's no autodocs page.
  argTypes: {
    src: {
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    alt: {
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    fallback: {
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    isLazy: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'true',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    shape: {
      control: 'select',
      options: ['square', 'rounded', 'circle'],
      table: {
        type: {
          summary: 'square | rounded | circle',
        },
      },
    },
    width: {
      control: 'number',
      description: 'Width of the image in pixels',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    height: {
      control: 'number',
      description: 'Height of the image in pixels',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    className: {
      type: 'string',
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Use the controls to try each option. The docs page shows it under "Try It"; keep it the
 * first story, since the Examples section skips the first one.
 */
export const Playground: Story = {
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    shape: 'square',
    isLazy: true,
    width: 800,
    height: 400,
  },
};

/**
 * The default state of the Image component.
 * Shows a basic image with lazy loading enabled.
 */
export const Default: Story = {
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 800,
    height: 400,
  },
};

/**
 * Image with eager loading.
 * Demonstrates immediate loading without lazy loading behavior.
 */
export const EagerLoading: Story = {
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    isLazy: false,
    width: 800,
    height: 400,
  },
};

/**
 * Image with fallback.
 * Shows how the component handles loading errors by displaying a fallback image.
 */
export const WithFallback: Story = {
  args: {
    src: 'invalid-url.jpg',
    fallback: 'https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg',
    alt: 'Image with fallback',
    width: 800,
    height: 400,
  },
};

/**
 * Image with rounded corners.
 * Shows the image with rounded corners using the shape prop.
 */
export const Rounded: Story = {
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 400,
    height: 400,
    shape: 'rounded',
  },
};

/**
 * Circular image.
 * Shows the image in a circular shape.
 */
export const Circle: Story = {
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 400,
    height: 400,
    shape: 'circle',
  },
};

/**
 * Image with custom dimensions and styling.
 * Demonstrates how to customize the image appearance.
 */
export const CustomStyle: Story = {
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 400,
    height: 300,
    className: 'rounded-lg shadow-lg',
  },
};

/**
 * Changing the `src` at runtime resets the loading state and shows the new image.
 *
 * This covers the case where `src` starts empty (or is swapped for another URL) and is
 * then set to a valid image: the loading skeleton clears once the new image loads instead
 * of getting stuck. Use the buttons to set an empty src, load an image, or swap between
 * two images.
 */
export const ChangingSrc: Story = {
  render: () => <ImageChangingSrc />,
  args: {
    src: '',
    alt: 'Runtime src change demo',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeChangingSrc,
        language: 'tsx',
      },
    },
  },
};
