import { expectNoViolations } from '@/test/utils';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
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
});
