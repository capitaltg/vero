const INTERACTABLE_SELECTOR = [
  'a[href]',
  'area[href]',
  'button:not(:disabled)',
  'input:not(:disabled):not([type="hidden"])',
  'select:not(:disabled)',
  'textarea:not(:disabled)',
  'summary',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

function isVisible(element: HTMLElement, container: HTMLElement): boolean {
  if (element.hidden) return false;
  if (getComputedStyle(element).visibility === 'hidden') return false;

  let node: HTMLElement | null = element;
  while (node) {
    if (node === container) return true;
    if (getComputedStyle(node).display === 'none') return false;
    node = node.parentElement;
  }

  return false;
}

function isInteractable(element: HTMLElement, container: HTMLElement): boolean {
  if (element.getAttribute('aria-disabled') === 'true') return false;
  if (element.tabIndex < 0) return false;
  return isVisible(element, container);
}

/**
 * Returns focusable, interactable elements within a container in document order.
 * Includes links (unlike Radix FocusScope auto-focus) and skips aria-disabled controls.
 */
export function getInteractableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(INTERACTABLE_SELECTOR)).filter(
    element => isInteractable(element, container),
  );
}

/**
 * Moves focus to the first interactable element in a container.
 * Falls back to focusing the container when no candidates exist.
 */
export function focusFirstInteractable(container: HTMLElement): boolean {
  const [first] = getInteractableElements(container);

  if (first) {
    first.focus({ preventScroll: true });
    return true;
  }

  if (container.tabIndex >= 0 || container.hasAttribute('tabindex')) {
    container.focus({ preventScroll: true });
    return true;
  }

  return false;
}
