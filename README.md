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

2. Import the CSS. Which entries you want depends on whether your app runs its
   own Tailwind build — see [Styling setup](#styling-setup) below.

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

Vero publishes each CSS layer separately so you can compose exactly what your
app needs. Mixing them incorrectly duplicates Tailwind's output and breaks
utility precedence, so start from the setup that matches your app below.

| Entry            | Contains                                                      | Size (min) |
| ---------------- | ------------------------------------------------------------- | ---------- |
| `preflight.css`  | Tailwind's Preflight                                          | 4.8 kB     |
| `theme.css`      | Vero's design tokens, plus the mini box-sizing / border reset | 3.8 kB     |
| `components.css` | Vero's component styles                                       | 1.7 kB     |
| `utilities.css`  | A utilities layer compiled from Vero's own sources            | 44.1 kB    |
| `index.css`      | Convenience bundle of `theme` + `components` + `utilities`    | 49.5 kB    |

### Apps that don't use Tailwind

Import the bundle and Preflight, and you're done — Vero's own utilities are
included:

```css
@import '@capitaltg/vero/preflight.css';
@import '@capitaltg/vero/index.css';
```

### Apps that use Tailwind

Let your app's Tailwind build generate **all** the utilities — its own and the
ones Vero's components reference — and import only Vero's tokens and component
styles. The import order mirrors the layers themselves:

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import '@capitaltg/vero/theme.css';
@import '@capitaltg/vero/components.css';
@import 'tailwindcss/utilities';
```

```js
// tailwind.config.js
import veroConfig from '@capitaltg/vero/tailwind.config.js';

export default {
  presets: [veroConfig],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // Required: lets Tailwind generate the utilities Vero's components use.
    './node_modules/@capitaltg/vero/dist/**/*.{js,cjs}',
  ],
  // Your own additions merge with Vero's theme rather than replacing it.
  theme: {
    extend: {
      colors: { brand: '#4b0082' },
    },
  },
};
```

Use `presets`, not object spread. `{ ...veroConfig }` is a shallow copy, so the moment you
add your own `theme` key it replaces Vero's entire theme and every Vero color, radius, and
keyframe disappears — from your build and from editor autocomplete. `presets` is Tailwind's
own mechanism for this and merges `theme.extend` from both. (Your `content` still replaces
Vero's, which is what you want — Vero's globs are relative to its own repo.)

Vero's config loads the `tailwindcss-animate` plugin, so that package must be resolvable from
your app. It's declared as a peer dependency, so most package managers install it alongside
Vero — but if yours skipped it (`--legacy-peer-deps`, or a strict-peer pnpm/yarn setup), the
build fails with `Cannot find module 'tailwindcss-animate'`. Install it directly:

```bash
npm install tailwindcss-animate
```

Two details matter here:

- **Don't import `index.css` or `utilities.css`.** Both carry a compiled
  utilities layer, so combining either with your own `@tailwind utilities`
  emits that layer twice. Likewise, skip `preflight.css` — `tailwindcss/base`
  already provides it.
- **Keep `tailwindcss/utilities` last, and use `@import` rather than
  `@tailwind` for it.** Every utility is a single class selector, and a media
  query adds no specificity — so `md:w-1/2` and `w-full` tie, and source order
  decides the winner. Tailwind guarantees the right order only _within one_
  utilities layer, which is why there must be exactly one. (`@import` also
  keeps ordering intact: `postcss-import` silently drops an `@import` that
  follows a non-import statement.)

Getting this wrong is what causes responsive prefixes (`md:`, `lg:`) to appear
to have no effect on Vero components.

### Using Vero's tokens on their own

`theme.css` is pure CSS with no Tailwind directives, so you can import it by
itself if you only want Vero's color tokens for your own components:

```css
@import '@capitaltg/vero/theme.css';
```

## Documentation

Visit our [Storybook documentation](https://capitaltg.github.io/vero/) to explore all available components and their usage examples.

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © [Capital Technology Group](https://github.com/capitaltg)
