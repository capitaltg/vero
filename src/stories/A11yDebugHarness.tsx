import { ReactNode, useEffect, useRef, useState } from 'react';

interface LogEntry {
  id: number;
  at: number;
  kind: 'focus' | 'announce';
  text: string;
}

/**
 * Resolve the accessible name of an element the way a screen reader roughly
 * would: aria-labelledby (concatenated referenced text) → aria-label →
 * associated `<label>`s → text content. Good enough to verify the composed
 * "Label, Value" name the value-trigger controls build.
 */
const resolveName = (el: HTMLElement | null): string => {
  if (!el) return '';
  const doc = el.ownerDocument;
  const text = (node: Element | null) => (node?.textContent ?? '').replace(/\s+/g, ' ').trim();

  const labelledby = el.getAttribute('aria-labelledby');
  if (labelledby) {
    const joined = labelledby
      .split(/\s+/)
      .map(id => text(doc.getElementById(id)))
      .filter(Boolean)
      .join(' ');
    if (joined) return joined;
  }

  const label = el.getAttribute('aria-label');
  if (label) return label.trim();

  const labels = (el as HTMLInputElement).labels;
  if (labels && labels.length > 0) {
    const joined = Array.from(labels).map(text).filter(Boolean).join(' ');
    if (joined) return joined;
  }

  return text(el);
};

const roleOf = (el: HTMLElement) => el.getAttribute('role') || el.tagName.toLowerCase();

/**
 * Generic screen-reader debug harness. It does not read component internals —
 * it watches the real DOM, the same thing a screen reader consumes:
 *   1. document `focusin` — logs where focus lands and the focused element's
 *      resolved accessible name (this is what a screen reader announces on
 *      focus, e.g. the composed "Framework, React" trigger name).
 *   2. live regions anywhere in the document (`[aria-live]`, `[role="status"]`,
 *      `[role="alert"]`) — logs each text change (what a live region speaks).
 *
 * Wrap a component under test as children; the debug panels are `aria-hidden`
 * so a screen reader only reads the component itself.
 */
export const A11yDebugHarness = ({ children }: { children: ReactNode }) => {
  const [log, setLog] = useState<LogEntry[]>([]);
  const [focusName, setFocusName] = useState('');
  const [liveText, setLiveText] = useState('');
  const startRef = useRef<number>(performance.now());
  const idRef = useRef(0);

  const push = (kind: LogEntry['kind'], text: string) => {
    setLog(prev => [
      ...prev,
      { id: idRef.current++, at: Math.round(performance.now() - startRef.current), kind, text },
    ]);
  };

  // Focus tracking.
  useEffect(() => {
    const onFocus = (e: FocusEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el || el === document.body) return;
      const name = resolveName(el);
      setFocusName(`${roleOf(el)}: ${name || '(no accessible name)'}`);
      push('focus', `${roleOf(el)} — "${name || '(no accessible name)'}"`);
    };
    document.addEventListener('focusin', onFocus);
    return () => document.removeEventListener('focusin', onFocus);
  }, []);

  // Live-region tracking anywhere in the document (Popover/calendar content is
  // portaled to <body>, outside any wrapper), de-duplicated per region.
  useEffect(() => {
    const seen = new WeakMap<Element, string>();
    const scan = () => {
      const regions = document.querySelectorAll(
        '[aria-live]:not([aria-hidden="true"]), [role="status"], [role="alert"]',
      );
      regions.forEach(region => {
        const text = (region.textContent ?? '').replace(/\s+/g, ' ').trim();
        if (text && seen.get(region) !== text) {
          seen.set(region, text);
          setLiveText(text);
          push('announce', text);
        } else if (!text) {
          seen.set(region, '');
        }
      });
    };
    const observer = new MutationObserver(scan);
    observer.observe(document.body, { subtree: true, childList: true, characterData: true });
    scan();
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2" style={{ maxWidth: 760 }}>
      <div className="space-y-3">{children}</div>

      <div aria-hidden="true" className="space-y-4">
        <div className="bg-muted/40 rounded-md border p-3">
          <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Focused element (accessible name)
          </div>
          <div className="min-h-6 font-mono text-sm">{focusName || '(nothing focused yet)'}</div>
        </div>

        <div className="bg-muted/40 rounded-md border p-3">
          <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Latest live-region text
          </div>
          <div className="min-h-6 font-mono text-sm">{liveText || '(none)'}</div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Event log (ms)
            </div>
            <button
              className="rounded border px-2 py-0.5 text-xs hover:bg-muted"
              type="button"
              onClick={() => setLog([])}
            >
              Clear
            </button>
          </div>
          <ol className="max-h-80 space-y-1 overflow-y-auto rounded-md border p-2 font-mono text-xs">
            {log.length === 0 ? (
              <li className="text-muted-foreground">
                No events yet — Tab to the trigger, open it, and make a selection.
              </li>
            ) : (
              log.map(entry => (
                <li
                  key={entry.id}
                  className={
                    entry.kind === 'announce' ? 'text-foreground' : 'text-muted-foreground'
                  }
                >
                  <span className="tabular-nums">{String(entry.at).padStart(5, ' ')}ms</span>{' '}
                  <span className="font-semibold">
                    {entry.kind === 'announce' ? '📢 announce' : '🎯 focus  '}
                  </span>{' '}
                  {entry.text}
                </li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};
