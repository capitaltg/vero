const warned = new Set<string>();

/**
 * Logs a one-time development warning that `name` is experimental. Call it from an effect
 * in the component every use of the feature mounts. `subject` names what is covered, e.g.
 * "`Table`, `DataTable`, and the other table components are"; it defaults to "`name` is".
 *
 * Promoting a component to stable: remove its call, its `@experimental` JSDoc tags and the
 * `experimental` tag on its stories.
 */
export function warnExperimental(name: string, subject = `\`${name}\` is`) {
  // Keep the bare `process.env.NODE_ENV` form: consumers' bundlers replace that exact
  // expression at build time, which drops the warning from production bundles (a
  // `typeof process` guard or `?.` would defeat the replacement).
  if (warned.has(name) || process.env.NODE_ENV === 'production') return;
  warned.add(name);

  console.warn(
    `[vero] ${name} is experimental: ${subject} exported for early feedback and may ` +
      'change — or be removed — without a major version bump. See the Storybook docs for ' +
      'details.',
  );
}
