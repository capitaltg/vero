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

2. Import the CSS in your main CSS file:

```css
@import '@capitaltg/vero/index.css';
```

3. Configure Tailwind CSS by extending your `tailwind.config.js`:

```js
import veroConfig from '@capitaltg/vero/tailwind.config.js';

export default {
  ...veroConfig,
  content: [...veroConfig.content, './src/**/*.{js,ts,jsx,tsx}'],
};
```

4. Start using components:

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

## Styling / targeting components

Every component renders stable, semantic `vero-*` CSS classes on its DOM
elements so you can target them from your own stylesheets for minor tweaks —
without depending on the internal Tailwind utility classes, which are an
implementation detail and may change between releases.

- The root element of each component carries `vero-<component>`, e.g.
  `vero-alert`, `vero-button`, `vero-image`.
- Sub-parts of compound components carry `vero-<component>-<part>`, e.g.
  `vero-dialog-content`, `vero-dialog-overlay`, `vero-select-trigger`,
  `vero-select-item`.

```css
/* Your app's CSS */
.vero-alert {
  border-radius: 0;
}

.vero-select-trigger {
  min-width: 12rem;
}
```

These classes are additive and always placed alongside the component's own
styles, so anything you pass via the `className` prop continues to take
precedence. Inspect a component in your browser's dev tools to discover the
exact `vero-*` classes available on each part.

## Documentation

Visit our [Storybook documentation](https://capitaltg.github.io/vero/) to explore all available components and their usage examples.

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © [Capital Technology Group](https://github.com/capitaltg)
