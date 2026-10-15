import type * as React from 'react';
import { expectNoViolations } from '@/test/utils';
import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { TableColumnGroups } from '../demos/TableColumnGroups';
import { TableBasic } from '../demos/TableBasic';
import { TableRowGroups } from '../demos/TableRowGroups';
import { TableStacked } from '../demos/TableStacked';
import { TableStyleVariants } from '../demos/TableStyleVariants';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './Table';

describe('Table (primitives)', () => {
  describe('Accessibility', () => {
    it('has no violations for a basic table', async () => {
      const { container } = render(<TableBasic />);
      expectNoViolations(await axe(container));
    });

    it('has no violations with grouped column headers', async () => {
      const { container } = render(<TableColumnGroups />);
      expectNoViolations(await axe(container));
    });

    it('has no violations with row-group sections', async () => {
      const { container } = render(<TableRowGroups />);
      expectNoViolations(await axe(container));
    });

    it('has no violations across style variants', async () => {
      const { container } = render(<TableStyleVariants />);
      expectNoViolations(await axe(container));
    });

    it('has no violations when stacked', async () => {
      const { container } = render(<TableStacked />);
      expectNoViolations(await axe(container));
    });
  });

  it('names the table with its caption', () => {
    render(<TableBasic />);
    expect(screen.getByRole('table', { name: 'Quarterly revenue' })).toBeInTheDocument();
  });

  it('renders column headers with scope="col"', () => {
    render(<TableBasic />);
    const quarter = screen.getByRole('columnheader', { name: 'Quarter' });
    expect(quarter).toHaveAttribute('scope', 'col');
  });

  it('renders row headers with scope="row"', () => {
    render(<TableBasic />);
    const q1 = screen.getByRole('rowheader', { name: 'Q1' });
    expect(q1.tagName).toBe('TH');
    expect(q1).toHaveAttribute('scope', 'row');
  });

  it('uses scope="colgroup" on spanning group headers', () => {
    render(<TableColumnGroups />);
    const firstHalf = screen.getByRole('columnheader', { name: 'First half' });
    expect(firstHalf).toHaveAttribute('scope', 'colgroup');
    expect(firstHalf).toHaveAttribute('colspan', '2');
  });

  describe('stacked mode', () => {
    const labelOf = (cell: HTMLElement) =>
      cell.querySelector('.vero-table-stacked-label')?.textContent ?? null;

    it('renders each cell label above its value', () => {
      render(<TableStacked />);
      const revenue = screen.getByRole('cell', { name: /\$1\.2M/ });
      expect(labelOf(revenue)).toBe('Revenue');
      expect(revenue.firstElementChild).toHaveClass('vero-table-stacked-label');
      expect(labelOf(screen.getByRole('rowheader', { name: /Q1/ }))).toBe('Quarter');
    });

    it('renders rich label content', () => {
      render(
        <Table aria-label="Employees" responsive="stack">
          <TableBody>
            <TableRow>
              <TableCell label={<abbr title="Department">Dept.</abbr>}>Engineering</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      );
      expect(screen.getByTitle('Department')).toHaveTextContent('Dept.');
    });

    it('applies the stacked classes to each part', () => {
      render(<TableStacked />);
      const table = screen.getByRole('table');
      expect(table.querySelector('thead')).toHaveClass('max-md:hidden');
      expect(screen.getAllByRole('row')[1]).toHaveClass('max-md:border-b-4');
      expect(screen.getByRole('cell', { name: /\$1\.2M/ })).toHaveClass('max-md:block');
    });

    it('follows the stack breakpoint', () => {
      render(
        <Table aria-label="Employees" responsive="stack" stackBreakpoint="lg">
          <TableBody>
            <TableRow>
              <TableCell label="Role">Engineer</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      );
      const cell = screen.getByRole('cell', { name: /Engineer/ });
      expect(cell).toHaveClass('max-lg:block');
      expect(cell).not.toHaveClass('max-md:block');
    });

    it('applies the card-heading classes for stackedStyle="headers"', () => {
      const { rerender } = render(<TableStacked />);
      const cell = () => screen.getByRole('cell', { name: /\$1\.2M/ });
      expect(cell()).not.toHaveClass('max-md:first:text-lg');

      rerender(
        <Table aria-label="Employees" responsive="stack" stackedStyle="headers">
          <TableBody>
            <TableRow>
              <TableCell label="Revenue">$1.2M</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      );
      expect(cell()).toHaveClass('max-md:first:text-lg');
    });

    it('leaves cells without a label unlabeled', () => {
      render(
        <Table aria-label="Employees" responsive="stack">
          <TableBody>
            <TableRow>
              <TableHead colSpan={2} scope="colgroup">
                Engineering
              </TableHead>
            </TableRow>
          </TableBody>
        </Table>,
      );
      const heading = screen.getByRole('columnheader', { name: 'Engineering' });
      expect(labelOf(heading)).toBeNull();
      expect(heading).not.toHaveClass('max-md:pb-3');
    });

    it('does not render labels or stacked classes when not stacked', () => {
      render(
        <Table aria-label="Employees">
          <TableHeader>
            <TableRow>
              <TableHead scope="col">Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell label="Role">Engineer</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      );
      const cell = screen.getByRole('cell', { name: 'Engineer' });
      expect(labelOf(cell)).toBeNull();
      expect(cell).not.toHaveClass('max-md:block');
      expect(screen.getByRole('table').querySelector('thead')).not.toHaveClass('max-md:hidden');
    });

    it('does not stack the header or footer rows', () => {
      render(<TableStacked />);
      const header = screen.getByRole('columnheader', { name: 'Revenue' });
      expect(labelOf(header)).toBeNull();
      expect(header).not.toHaveClass('max-md:block');
    });

    it('does not stack a table nested inside a stacked one', () => {
      render(
        <Table aria-label="Outer" responsive="stack">
          <TableBody>
            <TableRow>
              <TableCell label="Detail">
                <Table aria-label="Inner">
                  <TableBody>
                    <TableRow>
                      <TableCell label="Inner label">Nested</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      );
      const nested = screen.getByRole('cell', { name: 'Nested' });
      expect(labelOf(nested)).toBeNull();
      expect(nested).not.toHaveClass('max-md:block');
    });
  });

  describe('cell styling', () => {
    const renderTable = (props: React.ComponentProps<typeof Table> = {}) =>
      render(
        <Table aria-label="Employees" {...props}>
          <TableHeader>
            <TableRow>
              <TableHead className="text-right">Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell label="Role">Engineer</TableCell>
            </TableRow>
            <TableRow>
              <TableCell label="Role">Researcher</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      );

    it('styles cells from the table settings', () => {
      const { rerender } = renderTable();
      expect(screen.getByRole('cell', { name: 'Engineer' })).toHaveClass('border', 'px-4');

      rerender(
        <Table aria-label="Employees" density="compact" variant="borderless">
          <TableBody>
            <TableRow>
              <TableCell>Engineer</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      );
      const cell = screen.getByRole('cell', { name: 'Engineer' });
      expect(cell).toHaveClass('border-b', 'border-input', 'px-3');
      expect(cell).not.toHaveClass('border-base-500');
    });

    it("lets a cell's own classes override the base styling", () => {
      renderTable();
      const header = screen.getByRole('columnheader', { name: 'Role' });
      expect(header).toHaveClass('text-right');
      expect(header).not.toHaveClass('text-left');
    });

    it('stripes body cells, only above the breakpoint when stacked', () => {
      const { rerender } = renderTable({ striped: true });
      expect(screen.getByRole('cell', { name: /Engineer/ })).toHaveClass(
        '[tr:nth-child(even)>&]:bg-muted',
      );

      rerender(
        <Table striped aria-label="Employees" responsive="stack">
          <TableBody>
            <TableRow>
              <TableCell label="Role">Engineer</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      );
      const cell = screen.getByRole('cell', { name: /Engineer/ });
      expect(cell).toHaveClass('md:[tr:nth-child(even)>&]:bg-muted');
      expect(cell).not.toHaveClass('[tr:nth-child(even)>&]:bg-muted');
    });

    it("does not pass a table's settings to a table nested inside it", () => {
      render(
        <Table striped aria-label="Outer" density="compact" variant="borderless">
          <TableBody>
            <TableRow>
              <TableCell>
                <Table aria-label="Inner">
                  <TableBody>
                    <TableRow>
                      <TableCell>Nested</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      );
      const nested = screen.getByRole('cell', { name: 'Nested' });
      expect(nested).toHaveClass('border', 'border-base-500', 'px-4');
      expect(nested).not.toHaveClass('px-3');
    });
  });

  describe('caption', () => {
    it('renders the caption prop as the first child of the table', () => {
      render(<TableBasic />);
      const table = screen.getByRole('table', { name: 'Quarterly revenue' });
      expect(table.firstElementChild?.tagName).toBe('CAPTION');
      expect(table.firstElementChild).toHaveTextContent('Quarterly revenue');
    });

    it('keeps a hidden caption available to assistive technology', () => {
      render(
        <Table captionHidden caption="Quarterly revenue" responsive="none">
          <TableBody>
            <TableRow>
              <TableCell>$1.2M</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      );
      const caption = screen.getByRole('table', { name: 'Quarterly revenue' }).firstElementChild;
      expect(caption).toHaveClass('sr-only');
    });
  });

  describe('experimental warning', () => {
    const EXPERIMENTAL = '[vero] Table is experimental';

    // The "warned once" flag is module state, so load a fresh copy per test.
    async function loadTable() {
      vi.resetModules();
      return (await import('./Table')).Table;
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
      const FreshTable = await loadTable();
      render(
        <>
          <FreshTable aria-label="First" />
          <FreshTable aria-label="Second" />
        </>,
      );
      render(<FreshTable aria-label="Third" />);
      expect(experimentalWarnings()).toHaveLength(1);
    });

    it('does not warn in production', async () => {
      vi.stubEnv('NODE_ENV', 'production');
      const FreshTable = await loadTable();
      render(<FreshTable aria-label="Only" />);
      expect(experimentalWarnings()).toHaveLength(0);
    });
  });
});
