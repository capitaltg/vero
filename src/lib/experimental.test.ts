import { afterEach, beforeEach, describe, expect, it, vi, type MockInstance } from 'vitest';

describe('warnExperimental', () => {
  let warn: MockInstance<typeof console.warn>;

  // The "already warned" set is module state, so load a fresh copy per test.
  async function load() {
    vi.resetModules();
    return (await import('./experimental')).warnExperimental;
  }

  beforeEach(() => {
    warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    warn.mockClear();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('warns once per component in development', async () => {
    vi.stubEnv('NODE_ENV', 'development');
    const warnExperimental = await load();
    warnExperimental('Navbar');
    warnExperimental('Navbar');
    warnExperimental('Table', '`Table` and `DataTable` are');

    expect(warn).toHaveBeenCalledTimes(2);
    expect(warn.mock.calls[0][0]).toMatch(/^\[vero\] Navbar is experimental: `Navbar` is /);
    expect(warn.mock.calls[1][0]).toMatch(/^\[vero\] Table is experimental: `Table` and /);
  });

  it('does not warn in production', async () => {
    vi.stubEnv('NODE_ENV', 'production');
    const warnExperimental = await load();
    warnExperimental('Navbar');
    expect(warn).not.toHaveBeenCalled();
  });
});
