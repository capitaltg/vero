import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as t}from"./index-DL7Mpk60.js";import{M as r}from"./index-D4QDObOp.js";import{g as o}from"./storybook-BbV5WYXt.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-9CrfCjBJ.js";import"./index-KklXjS-Z.js";import"./index-CwPCC0ZT.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";function i(n){const s={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Getting Started/Styling"}),`
`,e.jsx(s.h1,{id:"styling",children:"Styling"}),`
`,e.jsx(s.p,{children:`Vero publishes each CSS layer separately so you can compose exactly what your app needs. Mixing
them incorrectly duplicates Tailwind's output and breaks utility precedence, so start from the
setup that matches your app below.`}),`
`,e.jsx(s.h2,{id:"what-vero-publishes",children:"What Vero publishes"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Entry"}),e.jsx("th",{children:"Contains"}),e.jsx("th",{children:"Size (min)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"preflight.css"})}),e.jsx("td",{children:"Tailwind's Preflight"}),e.jsx("td",{children:"4.8 kB"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"theme.css"})}),e.jsx("td",{children:"Vero's design tokens, plus the mini box-sizing / border reset"}),e.jsx("td",{children:"3.8 kB"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"components.css"})}),e.jsx("td",{children:"Vero's component styles"}),e.jsx("td",{children:"1.7 kB"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"utilities.css"})}),e.jsx("td",{children:"A utilities layer compiled from Vero's own sources"}),e.jsx("td",{children:"44.1 kB"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"index.css"})}),e.jsx("td",{children:e.jsxs(s.p,{children:["Convenience bundle of ",e.jsx("code",{children:"theme"})," + ",e.jsx("code",{children:"components"})," + ",e.jsx("code",{children:"utilities"})]})}),e.jsx("td",{children:"49.5 kB"})]})]})]}),`
`,e.jsx(s.h2,{id:"apps-that-dont-use-tailwind",children:"Apps that don't use Tailwind"}),`
`,e.jsx(s.p,{children:"Import the bundle and Preflight, and you're done — Vero's own utilities are included:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`@import '@capitaltg/vero/preflight.css';
@import '@capitaltg/vero/index.css';
`})}),`
`,e.jsx(s.h2,{id:"apps-that-use-tailwind",children:"Apps that use Tailwind"}),`
`,e.jsxs(s.p,{children:["Let your app's Tailwind build generate ",e.jsx(s.strong,{children:"all"}),` the utilities — its own and the ones Vero's
components reference — and import only Vero's tokens and component styles. The import order
mirrors the layers themselves:`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import '@capitaltg/vero/theme.css';
@import '@capitaltg/vero/components.css';
@import 'tailwindcss/utilities';
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`// tailwind.config.js
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
`})}),`
`,e.jsxs(s.p,{children:["Use ",e.jsx(s.code,{children:"presets"}),", not object spread. ",e.jsx(s.code,{children:"{ ...veroConfig }"}),` is a shallow copy, so the moment you
add your own `,e.jsx(s.code,{children:"theme"}),` key it replaces Vero's entire theme and every Vero color, radius, and
keyframe disappears — from your build and from editor autocomplete. `,e.jsx(s.code,{children:"presets"}),` is Tailwind's
own mechanism for this and merges `,e.jsx(s.code,{children:"theme.extend"})," from both. (Your ",e.jsx(s.code,{children:"content"}),` still replaces
Vero's, which is what you want — Vero's globs are relative to its own repo.)`]}),`
`,e.jsxs(s.p,{children:["Vero's config loads the ",e.jsx(s.code,{children:"tailwindcss-animate"}),` plugin, so that package must be resolvable from
your app. It's declared as a peer dependency, so most package managers install it alongside
Vero — but if yours skipped it (`,e.jsx(s.code,{children:"--legacy-peer-deps"}),`, or a strict-peer pnpm/yarn setup), the
build fails with `,e.jsx(s.code,{children:"Cannot find module 'tailwindcss-animate'"}),". Install it directly:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`npm install tailwindcss-animate
`})}),`
`,e.jsx(s.p,{children:"Two details matter here:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Don't import ",e.jsx(s.code,{children:"index.css"})," or ",e.jsx(s.code,{children:"utilities.css"}),"."]}),` Both carry a compiled utilities layer, so
combining either with your own `,e.jsx(s.code,{children:"@tailwind utilities"}),` emits that layer twice. Likewise, skip
`,e.jsx(s.code,{children:"preflight.css"})," — ",e.jsx(s.code,{children:"tailwindcss/base"})," already provides it."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Keep ",e.jsx(s.code,{children:"tailwindcss/utilities"})," last, and use ",e.jsx(s.code,{children:"@import"})," rather than ",e.jsx(s.code,{children:"@tailwind"})," for it."]}),` Every
utility is a single class selector, and a media query adds no specificity — so `,e.jsx(s.code,{children:"md:w-1/2"}),` and
`,e.jsx(s.code,{children:"w-full"}),` tie, and source order decides the winner. Tailwind guarantees the right order only
`,e.jsx(s.em,{children:"within one"})," utilities layer, which is why there must be exactly one. (",e.jsx(s.code,{children:"@import"}),` also keeps
ordering intact: `,e.jsx(s.code,{children:"postcss-import"})," silently drops an ",e.jsx(s.code,{children:"@import"}),` that follows a non-import
statement.)`]}),`
`]}),`
`,e.jsxs(s.p,{children:["Getting this wrong is what causes responsive prefixes (",e.jsx(s.code,{children:"md:"}),", ",e.jsx(s.code,{children:"lg:"}),`) to appear to have no effect
on Vero components.`]}),`
`,e.jsx(s.h2,{id:"using-veros-tokens-on-their-own",children:"Using Vero's tokens on their own"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"theme.css"}),` is pure CSS with no Tailwind directives, so you can import it by itself if you only
want Vero's color tokens for your own components:`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`@import '@capitaltg/vero/theme.css';
`})}),`
`,e.jsxs(s.p,{children:["See ",e.jsx("a",{href:o("?path=/docs/getting-started-design-tokens--docs"),children:"Design Tokens"})," ",`
for the full list of tokens this makes available.`]})]})}function w(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{w as default};
