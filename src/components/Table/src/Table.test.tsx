import { expectNoViolations } from '@/test/utils';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
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
    it('labels body cells with their column header', () => {
      render(<TableStacked />);
      // Derived from the header row — the demo sets no data-label on these.
      expect(screen.getByRole('rowheader', { name: 'Q1' })).toHaveAttribute(
        'data-label',
        'Quarter',
      );
      expect(screen.getByRole('cell', { name: '$1.2M' })).toHaveAttribute('data-label', 'Revenue');
    });

    it('keeps an explicit data-label', () => {
      render(<TableStacked />);
      expect(screen.getByRole('cell', { name: '+4%' })).toHaveAttribute(
        'data-label',
        'Change vs. Q4',
      );
    });

    it('marks the stacked style on the table', () => {
      const { rerender } = render(<TableStacked />);
      expect(screen.getByRole('table')).toHaveAttribute('data-stacked-style', 'default');

      rerender(<TableBasic />);
      expect(screen.getByRole('table')).not.toHaveAttribute('data-stacked-style');
    });

    it('leaves spanning cells (row-group headings) unlabeled', () => {
      render(
        <Table aria-label="Employees" responsive="stack">
          <TableHeader>
            <TableRow>
              <TableHead scope="col">Name</TableHead>
              <TableHead scope="col">Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableHead colSpan={2} scope="colgroup">
                Engineering
              </TableHead>
            </TableRow>
            <TableRow>
              <TableHead scope="row">Ada Lovelace</TableHead>
              <TableCell>Engineer</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      );

      expect(screen.getByRole('columnheader', { name: 'Engineering' })).not.toHaveAttribute(
        'data-label',
      );
      expect(screen.getByRole('cell', { name: 'Engineer' })).toHaveAttribute('data-label', 'Role');
    });

    it('does not label cells when the table is not stacked', () => {
      render(<TableBasic />);
      expect(screen.getByRole('cell', { name: '$1.2M' })).not.toHaveAttribute('data-label');
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
});
