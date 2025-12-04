/**
 * Helper function to create Storybook navigation URLs that work both locally and on GitHub Pages.
 *
 * @param path - The Storybook path parameter (e.g., "?path=/docs/overlays-feedback-alert--docs")
 * @returns An absolute URL when on localhost, or a relative URL when deployed to GitHub Pages
 */
export const getStorybookUrl = (path: string): string => {
  if (globalThis.window === undefined) {
    return path;
  }

  const { hostname, origin } = globalThis.window.location;

  // Extract the path parameter (e.g., "path=/docs/..." from "?path=/docs/...")
  const pathParam = path.startsWith('?') ? path.slice(1) : path;

  // Return absolute URL on localhost, relative URL otherwise (for GitHub Pages)
  const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';
  return isLocalhost ? `${origin}/?${pathParam}` : `?${pathParam}`;
};
