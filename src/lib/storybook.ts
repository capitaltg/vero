/**
 * Helper function to create Storybook navigation URLs that work both locally and on GitHub Pages.
 * When viewing locally with iframe.html in the URL, this strips it to navigate correctly.
 *
 * @param path - The Storybook path parameter (e.g., "?path=/docs/overlays-feedback-alert--docs")
 * @returns A URL that works in both local development and GitHub Pages deployment
 */
export const getStorybookUrl = (path: string): string => {
  if (globalThis.window === undefined) {
    return path;
  }

  // Get the current pathname
  const pathname = globalThis.window.location.pathname;

  // Extract the path parameter (e.g., "path=/docs/..." from "?path=/docs/...")
  const pathParam = path.startsWith('?') ? path.slice(1) : path;

  // If we're on iframe.html, navigate to root
  if (pathname.includes('/iframe.html')) {
    return `/?${pathParam}`;
  }

  // Otherwise, use the current pathname's base (for GitHub Pages subdirectory support)
  // Get the directory part of the pathname (remove query string and filename if present)
  let basePath = pathname.split('?')[0];

  // Remove the last segment if it looks like a file (has extension) or is not a directory
  // But keep it if it's already a directory (ends with /)
  if (!basePath.endsWith('/')) {
    // Remove the last segment (e.g., /vero/some-page -> /vero/)
    const lastSlashIndex = basePath.lastIndexOf('/');
    basePath = lastSlashIndex > 0 ? basePath.substring(0, lastSlashIndex + 1) : '/';
  }

  // Ensure basePath is at least '/'
  if (basePath === '') {
    basePath = '/';
  }

  return `${basePath}?${pathParam}`;
};
