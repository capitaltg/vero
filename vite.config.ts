import react from '@vitejs/plugin-react';
import path from 'path';
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'vite';
import clean from 'vite-plugin-clean';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    clean({
      targetFiles: ['dist'], // Delete the `dist` folder
    }),
    react(),
    dts({
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.stories.{ts,tsx}', 'src/mocks/**', 'src/app/**'],
      rollupTypes: true,
      outDir: 'dist/types',
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        preflight: path.resolve(__dirname, 'src/styles/preflight.css'),
        styles: path.resolve(__dirname, 'src/styles/styles.css'),
      },
      name: 'ui',
      formats: ['es', 'cjs'],
      fileName: format => `index.${format === 'es' ? 'js' : 'cjs'}`,
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
    },
    cssCodeSplit: true,
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
