/**
 * Helper function to create Storybook navigation URLs that work both locally and on GitHub Pages.
 *
 * @param path - The Storybook path parameter (e.g., "?path=/docs/overlays-feedback-alert--docs")
 * @returns An absolute URL constructed from the current origin and pathname
 */
export const getStorybookUrl = (path: string): string => {
  if (globalThis.window === undefined) {
    return path;
  }

  const { origin, pathname } = globalThis.window.location;

  // Extract the path parameter (e.g., "path=/docs/..." from "?path=/docs/...")
  const pathParam = path.startsWith('?') ? path.slice(1) : path;

  // Get the directory part of the pathname (remove query params and any filename like iframe.html)
  let basePath = pathname.split('?')[0]; // Remove any existing query params
  const lastSlashIndex = basePath.lastIndexOf('/');
  if (lastSlashIndex >= 0) {
    basePath = basePath.substring(0, lastSlashIndex + 1); // Get everything before and including the last slash
  } else {
    basePath = '/'; // Fallback to root if no slash found
  }

  return `${origin}${basePath}?${pathParam}`;
};
