import { expectNoViolations } from '@/test/utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { groupedPersonColumns, people, personColumns, type Person } from '../demos/sampleData';
import { Table } from './Table';

describe('Table', () => {
  describe('Accessibility', () => {
    it('has no violations with a caption', async () => {
      const { container } = render(
        <Table caption="Team roster" columns={personColumns} data={people} />,
      );
      expectNoViolations(await axe(container));
    });

    it('has no violations when sortable', async () => {
      const { container } = render(
        <Table enableSorting caption="Team roster" columns={personColumns} data={people} />,
      );
      expectNoViolations(await axe(container));
    });

    it('has no violations with grouped columns', async () => {
      const { container } = render(
        <Table caption="Team roster" columns={groupedPersonColumns} data={people} />,
      );
      expectNoViolations(await axe(container));
    });

    it('has no violations in stacked mode', async () => {
      const { container } = render(
        <Table caption="Team roster" columns={personColumns} data={people} responsive="stack" />,
      );
      expectNoViolations(await axe(container));
    });

    it('has no violations when empty', async () => {
      const { container } = render(
        <Table caption="Team roster" columns={personColumns} data={[] as Person[]} />,
      );
      expectNoViolations(await axe(container));
    });
  });

  it('marks the isRowHeader column as a row header', () => {
    render(<Table caption="Team roster" columns={personColumns} data={people} />);
    const ada = screen.getByRole('rowheader', { name: 'Ada Lovelace' });
    expect(ada.tagName).toBe('TH');
    expect(ada).toHaveAttribute('scope', 'row');
  });

  it('applies scope="colgroup" to group headers', () => {
    render(<Table caption="Team roster" columns={groupedPersonColumns} data={people} />);
    const group = screen.getByRole('columnheader', { name: 'Employment' });
    expect(group).toHaveAttribute('scope', 'colgroup');
    expect(group).toHaveAttribute('colspan', '2');
  });

  it('renders the empty state spanning all columns', () => {
    render(
      <Table
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
      render(<Table caption="Team roster" columns={personColumns} data={people} />);
      expect(screen.queryByRole('button', { name: 'Role' })).not.toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: 'Role' })).not.toHaveAttribute('aria-sort');
    });

    it('cycles aria-sort ascending → descending → none and announces the change', async () => {
      const user = userEvent.setup();
      render(<Table enableSorting caption="Team roster" columns={personColumns} data={people} />);

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
      expect(status).toHaveTextContent('TableRoot is no longer sorted');
    });

    it('reorders rows when a column is sorted', async () => {
      const user = userEvent.setup();
      render(<Table enableSorting caption="Team roster" columns={personColumns} data={people} />);

      await user.click(screen.getByRole('button', { name: 'Name' }));
      const rowHeaders = screen.getAllByRole('rowheader').map(el => el.textContent);
      expect(rowHeaders).toEqual([...rowHeaders].sort());
    });
  });
});
