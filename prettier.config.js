/** @type {import("prettier").Config} */
const twFunctions = ['cn', 'clsx', 'cva', 'tw'];
export default {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  // proseWrap: 'never',
  bracketSameLine: false,
  arrowParens: 'avoid',
  semi: true,
  useTabs: false,
  tabWidth: 2,
  overrides: [
    {
      files: ['**/*.css', '**/*.scss', '**/*.html'],
      options: {
        singleQuote: false,
      },
    },
  ],

  plugins: [
    'prettier-plugin-organize-imports',
    'prettier-plugin-tailwindcss',
    'prettier-plugin-classnames',
    // Needed to make both plugins work together
    'prettier-plugin-merge',
  ],

  tailwindAttributes: ['classNames'],
  // Used to sort classes in strings provided to function calls
  tailwindFunctions: twFunctions,
  // Used to wrap classes in strings provided to function calls
  customFunctions: twFunctions,
  endingPosition: 'absolute',
};
