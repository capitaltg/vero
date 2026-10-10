import { expectNoViolations } from '@/test/utils';
import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { TableRootColumnGroups } from '../demos/TableRootColumnGroups';
import { TableRootBasic } from '../demos/TableRootBasic';
import { TableRootRowGroups } from '../demos/TableRootRowGroups';
import { TableRootStyleVariants } from '../demos/TableRootStyleVariants';

describe('TableRoot (primitives)', () => {
  describe('Accessibility', () => {
    it('has no violations for a basic table', async () => {
      const { container } = render(<TableRootBasic />);
      expectNoViolations(await axe(container));
    });

    it('has no violations with grouped column headers', async () => {
      const { container } = render(<TableRootColumnGroups />);
      expectNoViolations(await axe(container));
    });

    it('has no violations with row-group sections', async () => {
      const { container } = render(<TableRootRowGroups />);
      expectNoViolations(await axe(container));
    });

    it('has no violations across style variants', async () => {
      const { container } = render(<TableRootStyleVariants />);
      expectNoViolations(await axe(container));
    });
  });

  it('names the table with its caption', () => {
    render(<TableRootBasic />);
    expect(screen.getByRole('table', { name: 'Quarterly revenue' })).toBeInTheDocument();
  });

  it('renders column headers with scope="col"', () => {
    render(<TableRootBasic />);
    const quarter = screen.getByRole('columnheader', { name: 'Quarter' });
    expect(quarter).toHaveAttribute('scope', 'col');
  });

  it('renders row headers with scope="row"', () => {
    render(<TableRootBasic />);
    const q1 = screen.getByRole('rowheader', { name: 'Q1' });
    expect(q1.tagName).toBe('TH');
    expect(q1).toHaveAttribute('scope', 'row');
  });

  it('uses scope="colgroup" on spanning group headers', () => {
    render(<TableRootColumnGroups />);
    const firstHalf = screen.getByRole('columnheader', { name: 'First half' });
    expect(firstHalf).toHaveAttribute('scope', 'colgroup');
    expect(firstHalf).toHaveAttribute('colspan', '2');
  });

  describe('experimental warning', () => {
    const EXPERIMENTAL = '[vero] Table is experimental';

    // The "warned once" flag is module state, so load a fresh copy per test.
    async function loadTableRoot() {
      vi.resetModules();
      return (await import('./TableRoot')).TableRoot;
    }

    function experimentalWarnings() {
      return vi
        .mocked(console.warn)
        .mock.calls.filter(([msg]) => typeof msg === 'string' && msg.startsWith(EXPERIMENTAL));
    }

    beforeEach(() => {
      vi.mocked(console.warn).mockClear();
    });

    afterEach(() => {
      vi.unstubAllEnvs();
    });

    it('warns once in development, however many tables mount', async () => {
      vi.stubEnv('NODE_ENV', 'development');
      const TableRoot = await loadTableRoot();
      render(
        <>
          <TableRoot />
          <TableRoot />
        </>,
      );
      render(<TableRoot />);
      expect(experimentalWarnings()).toHaveLength(1);
    });

    it('does not warn in production', async () => {
      vi.stubEnv('NODE_ENV', 'production');
      const TableRoot = await loadTableRoot();
      render(<TableRoot />);
      expect(experimentalWarnings()).toHaveLength(0);
    });
  });
});
