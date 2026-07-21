import * as React from 'react';
import { useEffect, useState } from 'react';

export type UseComposedTriggerLabelOptions = {
  /** A consumer-supplied aria-label, if any. When present it provides the whole name. */
  'aria-label'?: string;
  /** A consumer-supplied aria-labelledby, if any. The value id is appended to it. */
  'aria-labelledby'?: string;
};

/**
 * Composes an `aria-labelledby` for a button-style trigger whose accessible name must
 * combine an associated external `<label>` with the trigger's displayed value.
 *
 * A native `<label for>` (e.g. the one FormItem renders) becomes a `<button>`'s accessible
 * name and *overrides* its text content, so the value shown in the trigger ("John Doe")
 * gets dropped from the accessibility tree and is never read back. Given a ref to the
 * trigger and the id of the element that holds the value, this returns an `aria-labelledby`
 * listing the associated label id(s) followed by the value id, so screen readers announce
 * "Label, Value".
 *
 * Returns `undefined` when the trigger has no associated label and no consumer-supplied
 * `aria-labelledby` — letting the accessible name fall back to the trigger's content
 * (which is the value), so an unlabeled trigger still reads correctly.
 *
 * Known gap — a bare `aria-label`: when the consumer supplies an `aria-label` (a plain
 * string, with no associated `<label>` or `aria-labelledby`), it becomes the entire
 * accessible name and the value is NOT appended, so the selection is not read back. This
 * is a deliberate decision: we respect the consumer's explicit `aria-label` rather than
 * override it, and it is not a regression (a bare `aria-label` already overrode the
 * trigger's content before this hook existed). It could be closed by rendering a
 * visually-hidden element holding the label text and composing it with the value id, at
 * the cost of an extra DOM node; we opted not to since a bare `aria-label` on a
 * select-style trigger is uncommon. Prefer a visible label (via FormItem, a `<label for>`,
 * or `aria-labelledby`) to get the value read back.
 *
 * @param triggerRef - Ref to the trigger element. Works with labelable elements (`<button>`,
 *   via `.labels`) and non-labelable triggers like `<div role="button">` (matched by id
 *   against `<label for>`); the latter must carry an `id` for its label to be found.
 * @param valueId - Id of the element rendering the current value.
 * @param options - Consumer-supplied aria-label / aria-labelledby to respect.
 */
export function useComposedTriggerLabel(
  triggerRef: React.RefObject<HTMLElement | null>,
  valueId: string,
  {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
  }: UseComposedTriggerLabelOptions = {},
): string | undefined {
  // Seed with the consumer value so SSR / first paint has a sensible name; the effect
  // refines it once the DOM (and any associated label) is available.
  const [labelledBy, setLabelledBy] = useState<string | undefined>(ariaLabelledBy);

  useEffect(() => {
    // An explicit aria-label provides the entire accessible name; don't compose.
    if (ariaLabel) {
      setLabelledBy(undefined);
      return;
    }

    // A consumer-supplied aria-labelledby wins for the label portion; append the value.
    if (ariaLabelledBy) {
      setLabelledBy(`${ariaLabelledBy} ${valueId}`);
      return;
    }

    const el = triggerRef.current;
    if (!el) {
      setLabelledBy(undefined);
      return;
    }

    // Prefer the native `.labels` collection (labelable elements like <button>). For a
    // non-labelable trigger such as a `<div role="button">` (MultiSelect), a `<label for>`
    // never associates, so fall back to finding it by the trigger's id.
    const nativeLabels = (el as HTMLButtonElement).labels;
    let labels: HTMLElement[] =
      nativeLabels && nativeLabels.length > 0 ? Array.from(nativeLabels) : [];
    if (labels.length === 0 && el.id) {
      labels = Array.from(el.ownerDocument.querySelectorAll('label')).filter(
        label => (label as HTMLLabelElement).htmlFor === el.id,
      );
    }

    if (labels.length === 0) {
      // No associated label: fall back to the trigger's content (the value).
      setLabelledBy(undefined);
      return;
    }

    const labelIds = labels.map((label, index) => {
      // Ensure every associated label can be referenced; only assign when missing so we
      // never clobber an id a consumer set.
      if (!label.id) label.id = `${valueId}-label-${index}`;
      return label.id;
    });

    setLabelledBy(`${labelIds.join(' ')} ${valueId}`);
  }, [triggerRef, valueId, ariaLabel, ariaLabelledBy]);

  return labelledBy;
}
