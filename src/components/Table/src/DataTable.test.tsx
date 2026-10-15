import { expectNoViolations } from '@/test/utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { createColumnHelper, type ColumnDef } from '@tanstack/react-table';
import type { DataTableColumnDef } from '../types';
import { groupedPersonColumns, people, personColumns, type Person } from '../demos/sampleData';
import { DataTable } from './DataTable';

describe('DataTable', () => {
  describe('Accessibility', () => {
    it('has no violations with a caption', async () => {
      const { container } = render(
        <DataTable caption="Team roster" columns={personColumns} data={people} />,
      );
      expectNoViolations(await axe(container));
    });

    it('has no violations when sortable', async () => {
      const { container } = render(
        <DataTable enableSorting caption="Team roster" columns={personColumns} data={people} />,
      );
      expectNoViolations(await axe(container));
    });

    it('has no violations with grouped columns', async () => {
      const { container } = render(
        <DataTable caption="Team roster" columns={groupedPersonColumns} data={people} />,
      );
      expectNoViolations(await axe(container));
    });

    it('has no violations in stacked mode', async () => {
      const { container } = render(
        <DataTable
          caption="Team roster"
          columns={personColumns}
          data={people}
          responsive="stack"
        />,
      );
      expectNoViolations(await axe(container));
    });

    it('has no violations in stacked mode with card headings', async () => {
      const { container } = render(
        <DataTable
          caption="Team roster"
          columns={personColumns}
          data={people}
          responsive="stack"
          stackedStyle="headers"
        />,
      );
      expectNoViolations(await axe(container));
    });

    it('has no violations when empty', async () => {
      const { container } = render(
        <DataTable caption="Team roster" columns={personColumns} data={[] as Person[]} />,
      );
      expectNoViolations(await axe(container));
    });
  });

  it('marks the isRowHeader column as a row header', () => {
    render(<DataTable caption="Team roster" columns={personColumns} data={people} />);
    const ada = screen.getByRole('rowheader', { name: 'Ada Lovelace' });
    expect(ada.tagName).toBe('TH');
    expect(ada).toHaveAttribute('scope', 'row');
  });

  it('applies scope="colgroup" to group headers', () => {
    render(<DataTable caption="Team roster" columns={groupedPersonColumns} data={people} />);
    const group = screen.getByRole('columnheader', { name: 'Employment' });
    expect(group).toHaveAttribute('scope', 'colgroup');
    expect(group).toHaveAttribute('colspan', '2');
  });

  it('renders the empty state spanning all columns', () => {
    render(
      <DataTable
        caption="Team roster"
        columns={personColumns}
        data={[] as Person[]}
        emptyState="No team members found."
      />,
    );
    const cell = screen.getByText('No team members found.');
    expect(cell).toHaveAttribute('colspan', String(personColumns.length));
  });

  describe('sorting', () => {
    it('does not render sort controls when sorting is disabled', () => {
      render(<DataTable caption="Team roster" columns={personColumns} data={people} />);
      expect(screen.queryByRole('button', { name: 'Role' })).not.toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: 'Role' })).not.toHaveAttribute('aria-sort');
    });

    it('cycles aria-sort ascending → descending → none and announces the change', async () => {
      const user = userEvent.setup();
      render(
        <DataTable enableSorting caption="Team roster" columns={personColumns} data={people} />,
      );

      const header = screen.getByRole('columnheader', { name: 'Role' });
      const button = screen.getByRole('button', { name: 'Role' });
      const status = screen.getByRole('status');

      expect(header).toHaveAttribute('aria-sort', 'none');

      await user.click(button);
      expect(header).toHaveAttribute('aria-sort', 'ascending');
      expect(status).toHaveTextContent('Sorted by Role, ascending');

      await user.click(button);
      expect(header).toHaveAttribute('aria-sort', 'descending');
      expect(status).toHaveTextContent('Sorted by Role, descending');

      await user.click(button);
      expect(header).toHaveAttribute('aria-sort', 'none');
      expect(status).toHaveTextContent('Table is no longer sorted');
    });

    it('reorders rows when a column is sorted', async () => {
      const user = userEvent.setup();
      render(
        <DataTable enableSorting caption="Team roster" columns={personColumns} data={people} />,
      );

      await user.click(screen.getByRole('button', { name: 'Name' }));
      const rowHeaders = screen.getAllByRole('rowheader').map(el => el.textContent);
      expect(rowHeaders).toEqual([...rowHeaders].sort());
    });
  });

  describe('stacked mode', () => {
    const labelOf = (cell: HTMLElement) =>
      cell.querySelector('.vero-table-stacked-label')?.textContent ?? null;

    it('labels every body cell with its column header', () => {
      render(
        <DataTable
          caption="Team roster"
          columns={personColumns}
          data={people}
          responsive="stack"
        />,
      );
      expect(labelOf(screen.getByRole('rowheader', { name: /Ada Lovelace/ }))).toBe('Name');
      expect(labelOf(screen.getByRole('cell', { name: /Researcher/ }))).toBe('Role');
    });

    it('prefers meta.stackedLabel over the column header', () => {
      const columns: DataTableColumnDef<Person>[] = [
        { accessorKey: 'name', header: 'Name', meta: { isRowHeader: true } },
        { accessorKey: 'role', header: 'Role', meta: { stackedLabel: 'Job title' } },
      ];
      render(
        <DataTable caption="Team roster" columns={columns} data={people} responsive="stack" />,
      );
      expect(labelOf(screen.getByRole('cell', { name: /Researcher/ }))).toBe('Job title');
    });

    it('applies the card-heading classes for stackedStyle="headers"', () => {
      render(
        <DataTable
          caption="Team roster"
          columns={personColumns}
          data={people}
          responsive="stack"
          stackedStyle="headers"
        />,
      );
      expect(screen.getByRole('cell', { name: /Researcher/ })).toHaveClass('max-md:first:text-lg');
    });

    it('does not render labels when not stacked', () => {
      render(<DataTable caption="Team roster" columns={personColumns} data={people} />);
      expect(labelOf(screen.getByRole('cell', { name: 'Researcher' }))).toBeNull();
    });
  });

  // These are compile-time checks: `npm run type-check` fails if they regress.
  describe('column typing', () => {
    it('accepts plain TanStack ColumnDef arrays', () => {
      const columns: ColumnDef<Person, unknown>[] = [{ accessorKey: 'name', header: 'Name' }];
      render(<DataTable caption="Team roster" columns={columns} data={people} />);
      expect(screen.getByRole('columnheader', { name: 'Name' })).toBeInTheDocument();
    });

    it('accepts createColumnHelper output', () => {
      const helper = createColumnHelper<Person>();
      const columns = [
        helper.accessor('name', { header: 'Name' }),
        helper.accessor('salary', { header: 'Salary' }),
      ];
      render(<DataTable caption="Team roster" columns={columns} data={people} />);
      expect(screen.getByRole('columnheader', { name: 'Salary' })).toBeInTheDocument();
    });

    it('type-checks DataTable options on meta', () => {
      const columns: DataTableColumnDef<Person>[] = [
        { accessorKey: 'name', header: 'Name', meta: { isRowHeader: true } },
        // @ts-expect-error -- 'rigth' is not a valid alignment
        { accessorKey: 'salary', header: 'Salary', meta: { align: 'rigth' } },
      ];
      expect(columns).toHaveLength(2);
    });

    it('type-checks meta on nested group columns', () => {
      const columns: DataTableColumnDef<Person>[] = [
        {
          header: 'Pay',
          columns: [
            { accessorKey: 'salary', header: 'Salary', meta: { align: 'right' } },
            // @ts-expect-error -- 'rigth' is not a valid alignment
            { accessorKey: 'salary', header: 'Base', meta: { align: 'rigth' } },
          ],
        },
      ];
      expect(columns).toHaveLength(1);
    });

    it('type-checks inline columns passed straight to the prop', () => {
      render(
        <DataTable
          caption="Team roster"
          // @ts-expect-error -- 'rigth' is not a valid alignment
          columns={[{ accessorKey: 'salary', header: 'Salary', meta: { align: 'rigth' } }]}
          data={people}
        />,
      );
      expect(screen.getByRole('columnheader', { name: 'Salary' })).toBeInTheDocument();
    });
  });
});
