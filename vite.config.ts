import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';
import path from 'path';
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.stories.{ts,tsx}', 'src/mocks/**', 'src/app/**'],
      rollupTypes: true,
      outDir: 'dist/types',
      tsconfigPath: './tsconfig.app.json',
      // The same types as a .d.cts, for the `require` condition: in a "type": "module"
      // package, TypeScript treats a .d.ts as ESM, which a CommonJS project can't require.
      afterBuild: () => copyFileSync('dist/types/index.d.ts', 'dist/types/index.d.cts'),
    }),
  ],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        preflight: path.resolve(__dirname, 'src/styles/preflight.css'),
        theme: path.resolve(__dirname, 'src/styles/theme.css'),
        components: path.resolve(__dirname, 'src/styles/components.css'),
        utilities: path.resolve(__dirname, 'src/styles/utilities.css'),
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      plugins: [
        copy({
          targets: [
            {
              src: './tailwind.config.js',
              dest: 'dist/', // Output to the root of dist
            },
          ],
          hook: 'writeBundle', // Make sure this is done after the build
        }),
      ],
      // Externalize every bare (node_modules) import so consumers install,
      // dedupe, and tree-shake them — instead of inlining ~400 kB of Radix /
      // lucide / date-fns / etc. into the library bundle. Relative imports, the
      // `@/` alias, and resolved absolute paths (our own source + CSS) stay in.
      external: id => !id.startsWith('.') && !path.isAbsolute(id) && !id.startsWith('@/'),
      // Keep one output file per source module, so a consumer's bundler drops the files it
      // doesn't import. In a single bundled file, top-level statements such as
      // `Checkbox.displayName = 'Checkbox'` count as side effects and keep every component.
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        // Keep the CSS at the top of dist (dist/index.css), where the package's root CSS
        // entry files import it from, rather than under dist/styles/.
        assetFileNames: asset => path.basename(asset.names[0] ?? '[name][extname]'),
      },
    },
    cssCodeSplit: true,
    // public/ holds the dev app's favicon; keep it out of the library build.
    copyPublicDir: false,
    // Don't ship sourcemaps in the published package (devtools-only, and they
    // dominate the tarball size).
    sourcemap: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
