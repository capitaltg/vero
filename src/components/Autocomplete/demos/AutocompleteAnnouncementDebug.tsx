import { useEffect, useRef, useState } from 'react';
import { Autocomplete } from '../src/Autocomplete';

interface AutocompleteOption {
  value: string;
  label: string;
}

const options: AutocompleteOption[] = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

interface LogEntry {
  id: number;
  at: number;
  kind: 'announce' | 'focus';
  text: string;
}

/**
 * Debug harness for the Autocomplete's screen-reader announcements.
 *
 * It does NOT read the component's internal state. Instead it watches the real
 * DOM — the same thing a screen reader consumes:
 *   1. a MutationObserver on the visually-hidden `[role="status"][aria-live]`
 *      live region, logging every text change (this is what would be spoken);
 *   2. document `focusin` events, so we can see where focus lands relative to
 *      an announcement (focus moving to the trigger can interrupt a polite
 *      announcement in real screen readers).
 *
 * The live-region text is also mirrored into a visible (but aria-hidden) panel
 * so you can literally see what is queued for the screen reader.
 */
export const AutocompleteAnnouncementDebug = () => {
  const [value, setValue] = useState('');
  const [log, setLog] = useState<LogEntry[]>([]);
  const [liveText, setLiveText] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<number>(performance.now());
  const idRef = useRef(0);

  const push = (kind: LogEntry['kind'], text: string) => {
    setLog(prev => [
      ...prev,
      { id: idRef.current++, at: Math.round(performance.now() - startRef.current), kind, text },
    ]);
  };

  // Watch the real live region for text changes — this is what a screen reader
  // announces. Re-attach whenever the region node appears/changes.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let region: HTMLElement | null = null;
    let regionObserver: MutationObserver | null = null;

    const readRegion = () => {
      if (!region) return;
      const text = region.textContent ?? '';
      setLiveText(text);
      if (text.trim().length > 0) push('announce', text);
    };

    const attach = () => {
      const found = container.querySelector<HTMLElement>('[role="status"][aria-live]');
      if (found && found !== region) {
        region = found;
        regionObserver?.disconnect();
        regionObserver = new MutationObserver(readRegion);
        regionObserver.observe(region, { childList: true, characterData: true, subtree: true });
        readRegion();
      }
    };

    // The live region is always mounted, but re-attach defensively if the tree
    // changes (e.g. the popover opening/closing re-renders siblings).
    const treeObserver = new MutationObserver(attach);
    treeObserver.observe(container, { childList: true, subtree: true });
    attach();

    return () => {
      treeObserver.disconnect();
      regionObserver?.disconnect();
    };
  }, []);

  // Track focus moves so we can correlate them with announcements.
  useEffect(() => {
    const onFocus = (e: FocusEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el || el === document.body) return;
      const label =
        el.getAttribute('aria-label') ||
        el.textContent?.trim().slice(0, 60) ||
        el.tagName.toLowerCase();
      push('focus', `${el.tagName.toLowerCase()}: "${label}"`);
    };
    document.addEventListener('focusin', onFocus);
    return () => document.removeEventListener('focusin', onFocus);
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2" style={{ maxWidth: 720 }}>
      <div ref={containerRef} className="space-y-3">
        <Autocomplete<AutocompleteOption>
          getOptionLabel={o => o.label}
          getOptionValue={o => o.value}
          options={options}
          placeholder="Select a framework..."
          value={value}
          onChange={setValue}
        />
        <p className="text-sm text-muted-foreground">
          Selected value: <span className="font-medium">{value || 'none'}</span>
        </p>
      </div>

      <div aria-hidden="true" className="space-y-4">
        {/* Visible mirror of the live region. aria-hidden so it is NOT itself
            announced — it only lets you see what the real region holds. Kept to
            the right of (and above the event log, not below) the autocomplete so
            the open dropdown never covers it. */}
        <div className="bg-muted/40 rounded-md border p-3">
          <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Current live-region text
          </div>
          <div className="min-h-6 font-mono text-sm">{liveText || '(empty)'}</div>
        </div>

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
              No events yet — open the list, type, and select an option.
            </li>
          ) : (
            log.map(entry => (
              <li
                key={entry.id}
                className={entry.kind === 'announce' ? 'text-foreground' : 'text-muted-foreground'}
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
  );
};
