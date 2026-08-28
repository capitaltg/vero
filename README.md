# Vero - React Component Library

Accessible, modern, open source React component library inspired by USWDS built with Radix UI.

## Features

- 🎨 **Modern Design**: Clean, professional components inspired by USWDS
- ♿ **Accessible**: Built with accessibility in mind using Radix UI primitives
- 🎯 **TypeScript**: Full TypeScript support with comprehensive type definitions
- 🎨 **Customizable**: Easily themeable with CSS custom properties
- 📱 **Responsive**: Mobile-first design approach
- ⚡ **Performance**: Optimized for speed and bundle size

## React Compatibility

Vero supports both React 18 and React 19:

- **React 18.2.0+**: Full support with all features
- **React 19.0.0+**: Full support with all features

## Installation

```bash
npm install @capitaltg/vero
# or
yarn add @capitaltg/vero
# or
pnpm add @capitaltg/vero
```

## Quick Start

1. Install the package and its peer dependencies:

```bash
npm install @capitaltg/vero react react-dom tailwindcss tailwindcss-animate
```

2. Import the CSS. Which entry you want depends on whether your app runs its own
   Tailwind build — see [Styling setup](#styling-setup) below.

```css
/* App does NOT run Tailwind: Vero ships everything it needs. */
@import '@capitaltg/vero/preflight.css';
@import '@capitaltg/vero/index.css';
```

3. Start using components:

```tsx
import { Button, Input, FormItem } from '@capitaltg/vero';

function App() {
  return (
    <div>
      <FormItem label="Email" hintText="Enter your email address">
        <Input type="email" placeholder="you@example.com" />
      </FormItem>
      <Button variant="primary">Submit</Button>
    </div>
  );
}
```

## Styling setup

Vero publishes three stylesheets. Pick the pair that matches your app — mixing
them incorrectly duplicates Tailwind's output and breaks utility precedence.

| Entry           | Contains                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------- |
| `preflight.css` | Tailwind's Preflight (base layer)                                                           |
| `index.css`     | Vero's tokens, component styles, **and** a utilities layer compiled from Vero's own sources |
| `styles.css`    | Vero's tokens and component styles only — no Preflight, no utilities                        |

### Apps that don't use Tailwind

Import both of Vero's stylesheets and you're done. Vero's own utilities are baked
into `index.css`.

```css
@import '@capitaltg/vero/preflight.css';
@import '@capitaltg/vero/index.css';
```

### Apps that use Tailwind

Let your app's Tailwind build generate **all** the utilities — its own and the
ones Vero's components reference — and import `styles.css` for Vero's tokens and
component styles:

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import '@capitaltg/vero/styles.css';
@import 'tailwindcss/utilities';
```

```js
// tailwind.config.js
import veroConfig from '@capitaltg/vero/tailwind.config.js';

export default {
  ...veroConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // Required: lets Tailwind generate the utilities Vero's components use.
    './node_modules/@capitaltg/vero/dist/**/*.{js,cjs}',
  ],
};
```

Two details matter here:

- **Import `styles.css`, not `preflight.css` + `index.css`.** Those two entries
  each carry a compiled Tailwind layer, so combining them with your own
  `@tailwind` directives emits Preflight twice and a utilities layer twice.
- **Keep `tailwindcss/utilities` last, and use `@import` rather than
  `@tailwind` for it.** Every utility is a single class selector, and a media
  query adds no specificity — so `md:w-1/2` and `w-full` tie, and source order
  decides the winner. Tailwind guarantees the right order only _within one_
  utilities layer, which is why there must be exactly one. (`@import` also
  keeps ordering intact: `postcss-import` silently drops an `@import` that
  follows a non-import statement.)

Getting this wrong is what causes responsive prefixes (`md:`, `lg:`) to appear
to have no effect on Vero components.

## Documentation

Visit our [Storybook documentation](https://capitaltg.github.io/vero/) to explore all available components and their usage examples.

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © [Capital Technology Group](https://github.com/capitaltg)
