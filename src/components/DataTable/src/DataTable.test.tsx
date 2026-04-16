import { expectNoViolations } from '@/test/utils';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { DataTable } from './DataTable';

interface TestRow {
  name: string;
  email: string;
  role: string;
}

const columns = [
  { id: 'name', header: 'Name' },
  { id: 'email', header: 'Email' },
  { id: 'role', header: 'Role' },
];

const data: TestRow[] = [
  { name: 'Alice', email: 'alice@example.com', role: 'Admin' },
  { name: 'Bob', email: 'bob@example.com', role: 'User' },
  { name: 'Charlie', email: 'charlie@example.com', role: 'Editor' },
];

describe('DataTable', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<DataTable columns={columns} data={data} />);
      expect(screen.getByRole('table')).toBeInTheDocument();
    });

    it('renders column headers', () => {
      render(<DataTable columns={columns} data={data} />);
      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.getByText('Email')).toBeInTheDocument();
      expect(screen.getByText('Role')).toBeInTheDocument();
    });

    it('renders row data', () => {
      render(<DataTable columns={columns} data={data} />);
      expect(screen.getByText('Alice')).toBeInTheDocument();
      expect(screen.getByText('alice@example.com')).toBeInTheDocument();
      expect(screen.getByText('Admin')).toBeInTheDocument();
      expect(screen.getByText('Bob')).toBeInTheDocument();
      expect(screen.getByText('Charlie')).toBeInTheDocument();
    });

    it('renders all rows', () => {
      render(<DataTable columns={columns} data={data} />);
      const rows = screen.getAllByRole('row');
      // 1 header row + 3 data rows
      expect(rows).toHaveLength(4);
    });

    it('renders empty state when data is empty', () => {
      render(<DataTable columns={columns} data={[]} />);
      expect(screen.getByText('No results')).toBeInTheDocument();
    });

    it('renders custom empty message', () => {
      render(<DataTable columns={columns} data={[]} emptyMessage="Nothing to show" />);
      expect(screen.getByText('Nothing to show')).toBeInTheDocument();
    });

    it('renders React node as empty message', () => {
      render(
        <DataTable
          columns={columns}
          data={[]}
          emptyMessage={<span data-testid="custom-empty">Custom empty state</span>}
        />,
      );
      expect(screen.getByTestId('custom-empty')).toBeInTheDocument();
    });

    it('renders loading state', () => {
      render(<DataTable isLoading columns={columns} data={[]} />);
      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    it('shows loading state instead of data when loading', () => {
      render(<DataTable isLoading columns={columns} data={data} />);
      expect(screen.getByText(/loading/i)).toBeInTheDocument();
      expect(screen.queryByText('Alice')).not.toBeInTheDocument();
    });

    it('renders custom loading message', () => {
      render(<DataTable isLoading columns={columns} data={[]} loadingMessage="Fetching users…" />);
      expect(screen.getByText('Fetching users…')).toBeInTheDocument();
    });

    it('renders React node as loading message', () => {
      render(
        <DataTable
          isLoading
          columns={columns}
          data={[]}
          loadingMessage={
            <div data-testid="custom-spinner">
              <span>Spinner</span>
            </div>
          }
        />,
      );
      expect(screen.getByTestId('custom-spinner')).toBeInTheDocument();
    });

    it('marks the loading row with aria-busy', () => {
      render(<DataTable isLoading columns={columns} data={[]} />);
      const row = screen.getByText(/loading/i).closest('tr');
      expect(row).toHaveAttribute('aria-busy', 'true');
    });

    it('renders with striped variant', () => {
      render(<DataTable columns={columns} data={data} variant="striped" />);
      const rows = screen.getAllByRole('row');
      // The second data row (index 1, which is rows[2]) should have striped class
      expect(rows[2]).toHaveClass('bg-muted/30');
      // The first data row should not
      expect(rows[1]).not.toHaveClass('bg-muted/30');
    });

    it('renders with bordered variant', () => {
      const { container } = render(<DataTable columns={columns} data={data} variant="bordered" />);
      const cells = container.querySelectorAll('td');
      expect(cells[0]).toHaveClass('border');
    });

    it('renders with small size', () => {
      const { container } = render(<DataTable columns={columns} data={data} size="sm" />);
      const headerCell = container.querySelector('th');
      expect(headerCell).toHaveClass('px-3', 'py-2');
    });

    it('renders with large size', () => {
      const { container } = render(<DataTable columns={columns} data={data} size="lg" />);
      const headerCell = container.querySelector('th');
      expect(headerCell).toHaveClass('px-6', 'py-4');
    });

    it('applies custom className', () => {
      render(<DataTable className="custom-class" columns={columns} data={data} />);
      expect(screen.getByRole('table')).toHaveClass('custom-class');
    });

    it('renders with custom cell renderer', () => {
      const columnsWithCell = [
        {
          id: 'name',
          header: 'Name',
          cell: (row: TestRow) => <strong data-testid="bold-name">{row.name}</strong>,
        },
        { id: 'email', header: 'Email' },
      ];

      render(<DataTable columns={columnsWithCell} data={data} />);
      const boldNames = screen.getAllByTestId('bold-name');
      expect(boldNames).toHaveLength(3);
      expect(boldNames[0]).toHaveTextContent('Alice');
    });

    it('renders using accessor instead of id', () => {
      const columnsWithAccessor = [{ id: 'fullName', header: 'Full Name', accessor: 'name' }];

      render(<DataTable columns={columnsWithAccessor} data={data} />);
      expect(screen.getByText('Alice')).toBeInTheDocument();
    });

    it('uses getRowId for row keys', () => {
      const getRowId = vi.fn((row: TestRow) => row.email);
      render(<DataTable columns={columns} data={data} getRowId={getRowId} />);
      expect(getRowId).toHaveBeenCalledTimes(3);
      expect(getRowId).toHaveBeenCalledWith(data[0], 0);
    });

    it('passes through HTML attributes', () => {
      render(
        <DataTable
          aria-label="Users table"
          columns={columns}
          data={data}
          data-testid="test-table"
        />,
      );
      expect(screen.getByRole('table')).toHaveAttribute('data-testid', 'test-table');
      expect(screen.getByRole('table')).toHaveAttribute('aria-label', 'Users table');
    });
  });

  describe('Sorting', () => {
    const sortableColumns = [
      { id: 'name', header: 'Name', isSortable: true },
      { id: 'email', header: 'Email', isSortable: true },
      { id: 'role', header: 'Role' },
    ];

    it('renders sort indicators on sortable columns', () => {
      const { container } = render(
        <DataTable columns={sortableColumns} data={data} onSort={vi.fn()} />,
      );
      // Sortable columns should have sort icons (svg elements)
      const headers = container.querySelectorAll('th');
      const nameHeaderSvg = headers[0].querySelector('svg');
      const emailHeaderSvg = headers[1].querySelector('svg');
      const roleHeaderSvg = headers[2].querySelector('svg');

      expect(nameHeaderSvg).toBeInTheDocument();
      expect(emailHeaderSvg).toBeInTheDocument();
      expect(roleHeaderSvg).not.toBeInTheDocument();
    });

    it('does not render sort indicators without onSort', () => {
      const { container } = render(<DataTable columns={sortableColumns} data={data} />);
      const headers = container.querySelectorAll('th');
      // No sort icons when onSort is not provided
      expect(headers[0].querySelector('svg')).not.toBeInTheDocument();
    });

    it('calls onSort when sortable column header is clicked', async () => {
      const user = userEvent.setup();
      const handleSort = vi.fn();

      render(<DataTable columns={sortableColumns} data={data} onSort={handleSort} />);

      await user.click(screen.getByText('Name'));
      expect(handleSort).toHaveBeenCalledWith({ column: 'name', direction: 'asc' });
    });

    it('toggles sort direction when clicking the same column', async () => {
      const user = userEvent.setup();
      const handleSort = vi.fn();

      render(
        <DataTable
          columns={sortableColumns}
          data={data}
          sort={{ column: 'name', direction: 'asc' }}
          onSort={handleSort}
        />,
      );

      await user.click(screen.getByText('Name'));
      expect(handleSort).toHaveBeenCalledWith({ column: 'name', direction: 'desc' });
    });

    it('starts with ascending when clicking a different column', async () => {
      const user = userEvent.setup();
      const handleSort = vi.fn();

      render(
        <DataTable
          columns={sortableColumns}
          data={data}
          sort={{ column: 'name', direction: 'desc' }}
          onSort={handleSort}
        />,
      );

      await user.click(screen.getByText('Email'));
      expect(handleSort).toHaveBeenCalledWith({ column: 'email', direction: 'asc' });
    });

    it('does not call onSort for non-sortable columns', async () => {
      const user = userEvent.setup();
      const handleSort = vi.fn();

      render(<DataTable columns={sortableColumns} data={data} onSort={handleSort} />);

      await user.click(screen.getByText('Role'));
      expect(handleSort).not.toHaveBeenCalled();
    });

    it('supports keyboard sorting with Enter', async () => {
      const user = userEvent.setup();
      const handleSort = vi.fn();

      render(<DataTable columns={sortableColumns} data={data} onSort={handleSort} />);

      const nameHeader = screen.getByText('Name').closest('th')!;
      nameHeader.focus();
      await user.keyboard('{Enter}');

      expect(handleSort).toHaveBeenCalledWith({ column: 'name', direction: 'asc' });
    });

    it('supports keyboard sorting with Space', async () => {
      const user = userEvent.setup();
      const handleSort = vi.fn();

      render(<DataTable columns={sortableColumns} data={data} onSort={handleSort} />);

      const emailHeader = screen.getByText('Email').closest('th')!;
      emailHeader.focus();
      await user.keyboard(' ');

      expect(handleSort).toHaveBeenCalledWith({ column: 'email', direction: 'asc' });
    });

    it('shows ascending aria-sort on active column', () => {
      render(
        <DataTable
          columns={sortableColumns}
          data={data}
          sort={{ column: 'name', direction: 'asc' }}
          onSort={vi.fn()}
        />,
      );

      const nameHeader = screen.getByText('Name').closest('th')!;
      expect(nameHeader).toHaveAttribute('aria-sort', 'ascending');
    });

    it('shows descending aria-sort on active column', () => {
      render(
        <DataTable
          columns={sortableColumns}
          data={data}
          sort={{ column: 'name', direction: 'desc' }}
          onSort={vi.fn()}
        />,
      );

      const nameHeader = screen.getByText('Name').closest('th')!;
      expect(nameHeader).toHaveAttribute('aria-sort', 'descending');
    });

    it('sortable headers have tabIndex for keyboard access', () => {
      render(<DataTable columns={sortableColumns} data={data} onSort={vi.fn()} />);

      const nameHeader = screen.getByText('Name').closest('th')!;
      const roleHeader = screen.getByText('Role').closest('th')!;

      expect(nameHeader).toHaveAttribute('tabindex', '0');
      expect(roleHeader).not.toHaveAttribute('tabindex');
    });
  });

  describe('Pagination', () => {
    const paginationProps = {
      page: 2,
      pageSize: 10,
      totalItems: 50,
      onPageChange: vi.fn(),
    };

    it('renders pagination when provided', () => {
      render(<DataTable columns={columns} data={data} pagination={paginationProps} />);
      expect(screen.getByLabelText('Pagination')).toBeInTheDocument();
    });

    it('does not render pagination when not provided', () => {
      render(<DataTable columns={columns} data={data} />);
      expect(screen.queryByLabelText('Pagination')).not.toBeInTheDocument();
    });

    it('displays item count', () => {
      render(<DataTable columns={columns} data={data} pagination={paginationProps} />);
      expect(screen.getByText(/Showing/)).toBeInTheDocument();
      expect(screen.getByText('11')).toBeInTheDocument(); // startItem
      expect(screen.getByText('20')).toBeInTheDocument(); // endItem
      expect(screen.getByText('50')).toBeInTheDocument(); // total
    });

    it('navigates to next page', async () => {
      const user = userEvent.setup();
      const handlePageChange = vi.fn();

      render(
        <DataTable
          columns={columns}
          data={data}
          pagination={{ ...paginationProps, onPageChange: handlePageChange }}
        />,
      );

      await user.click(screen.getByLabelText('Go to next page'));
      expect(handlePageChange).toHaveBeenCalledWith(3);
    });

    it('navigates to previous page', async () => {
      const user = userEvent.setup();
      const handlePageChange = vi.fn();

      render(
        <DataTable
          columns={columns}
          data={data}
          pagination={{ ...paginationProps, onPageChange: handlePageChange }}
        />,
      );

      await user.click(screen.getByLabelText('Go to previous page'));
      expect(handlePageChange).toHaveBeenCalledWith(1);
    });

    it('navigates to first page', async () => {
      const user = userEvent.setup();
      const handlePageChange = vi.fn();

      render(
        <DataTable
          columns={columns}
          data={data}
          pagination={{ ...paginationProps, page: 3, onPageChange: handlePageChange }}
        />,
      );

      await user.click(screen.getByLabelText('Go to first page'));
      expect(handlePageChange).toHaveBeenCalledWith(1);
    });

    it('navigates to last page', async () => {
      const user = userEvent.setup();
      const handlePageChange = vi.fn();

      render(
        <DataTable
          columns={columns}
          data={data}
          pagination={{ ...paginationProps, onPageChange: handlePageChange }}
        />,
      );

      await user.click(screen.getByLabelText('Go to last page'));
      expect(handlePageChange).toHaveBeenCalledWith(5);
    });

    it('disables previous buttons on first page', () => {
      render(
        <DataTable columns={columns} data={data} pagination={{ ...paginationProps, page: 1 }} />,
      );

      expect(screen.getByLabelText('Go to first page')).toBeDisabled();
      expect(screen.getByLabelText('Go to previous page')).toBeDisabled();
      expect(screen.getByLabelText('Go to next page')).not.toBeDisabled();
    });

    it('disables next buttons on last page', () => {
      render(
        <DataTable columns={columns} data={data} pagination={{ ...paginationProps, page: 5 }} />,
      );

      expect(screen.getByLabelText('Go to next page')).toBeDisabled();
      expect(screen.getByLabelText('Go to last page')).toBeDisabled();
      expect(screen.getByLabelText('Go to previous page')).not.toBeDisabled();
    });

    it('displays page info', () => {
      render(<DataTable columns={columns} data={data} pagination={paginationProps} />);
      expect(screen.getByText(/Page 2 of 5/)).toBeInTheDocument();
    });

    it('renders page size selector when onPageSizeChange is provided', () => {
      render(
        <DataTable
          columns={columns}
          data={data}
          pagination={{ ...paginationProps, onPageSizeChange: vi.fn() }}
        />,
      );
      expect(screen.getByLabelText('Rows per page')).toBeInTheDocument();
    });

    it('does not render page size selector without onPageSizeChange', () => {
      render(<DataTable columns={columns} data={data} pagination={paginationProps} />);
      expect(screen.queryByLabelText('Rows per page')).not.toBeInTheDocument();
    });

    it('calls onPageSizeChange when page size is changed', async () => {
      const user = userEvent.setup();
      const handlePageSizeChange = vi.fn();

      render(
        <DataTable
          columns={columns}
          data={data}
          pagination={{ ...paginationProps, onPageSizeChange: handlePageSizeChange }}
        />,
      );

      await user.selectOptions(screen.getByLabelText('Rows per page'), '50');
      expect(handlePageSizeChange).toHaveBeenCalledWith(50);
    });

    it('shows "No results" when totalItems is 0', () => {
      render(
        <DataTable
          columns={columns}
          data={[]}
          pagination={{ ...paginationProps, page: 1, totalItems: 0 }}
        />,
      );

      const nav = screen.getByLabelText('Pagination');
      expect(within(nav).getByText('No results')).toBeInTheDocument();
    });
  });

  describe('Row interactions', () => {
    it('calls onRowClick when a row is clicked', async () => {
      const user = userEvent.setup();
      const handleRowClick = vi.fn();

      render(<DataTable columns={columns} data={data} onRowClick={handleRowClick} />);

      await user.click(screen.getByText('Alice'));
      expect(handleRowClick).toHaveBeenCalledWith(data[0]);
    });

    it('calls onRowClick with correct row data', async () => {
      const user = userEvent.setup();
      const handleRowClick = vi.fn();

      render(<DataTable columns={columns} data={data} onRowClick={handleRowClick} />);

      await user.click(screen.getByText('Charlie'));
      expect(handleRowClick).toHaveBeenCalledWith(data[2]);
    });

    it('adds cursor-pointer when onRowClick is provided', () => {
      render(<DataTable columns={columns} data={data} onRowClick={vi.fn()} />);

      const rows = screen.getAllByRole('row');
      // Data rows (skip header row)
      expect(rows[1]).toHaveClass('cursor-pointer');
    });

    it('does not add cursor-pointer without onRowClick', () => {
      render(<DataTable columns={columns} data={data} />);

      const rows = screen.getAllByRole('row');
      expect(rows[1]).not.toHaveClass('cursor-pointer');
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations with default props', async () => {
      const { container } = render(<DataTable columns={columns} data={data} />);
      const results = await axe(container);
      expectNoViolations(results);
    });

    it('has no accessibility violations with empty data', async () => {
      const { container } = render(<DataTable columns={columns} data={[]} />);
      const results = await axe(container);
      expectNoViolations(results);
    });

    it('has no accessibility violations with sorting', async () => {
      const sortableColumns = [
        { id: 'name', header: 'Name', isSortable: true },
        { id: 'email', header: 'Email' },
      ];

      const { container } = render(
        <DataTable
          columns={sortableColumns}
          data={data}
          sort={{ column: 'name', direction: 'asc' }}
          onSort={vi.fn()}
        />,
      );
      const results = await axe(container);
      expectNoViolations(results);
    });

    it('has no accessibility violations with pagination', async () => {
      const { container } = render(
        <DataTable
          columns={columns}
          data={data}
          pagination={{
            page: 1,
            pageSize: 10,
            totalItems: 50,
            onPageChange: vi.fn(),
          }}
        />,
      );
      const results = await axe(container);
      expectNoViolations(results);
    });

    it('has no accessibility violations with all variants', async () => {
      const variants = ['default', 'striped', 'bordered'] as const;
      for (const variant of variants) {
        const { container, unmount } = render(
          <DataTable columns={columns} data={data} variant={variant} />,
        );
        const results = await axe(container);
        expectNoViolations(results);
        unmount();
      }
    });

    it('has proper aria-sort attributes', () => {
      const sortableColumns = [
        { id: 'name', header: 'Name', isSortable: true },
        { id: 'email', header: 'Email', isSortable: true },
      ];

      render(
        <DataTable
          columns={sortableColumns}
          data={data}
          sort={{ column: 'name', direction: 'asc' }}
          onSort={vi.fn()}
        />,
      );

      const nameHeader = screen.getByText('Name').closest('th')!;
      const emailHeader = screen.getByText('Email').closest('th')!;

      expect(nameHeader).toHaveAttribute('aria-sort', 'ascending');
      expect(emailHeader).not.toHaveAttribute('aria-sort');
    });

    it('table element has proper role', () => {
      render(<DataTable columns={columns} data={data} />);
      expect(screen.getByRole('table')).toBeInTheDocument();
    });

    it('column headers have proper role', () => {
      render(<DataTable columns={columns} data={data} />);
      const headers = screen.getAllByRole('columnheader');
      expect(headers).toHaveLength(3);
    });

    it('pagination nav has proper aria-label', () => {
      render(
        <DataTable
          columns={columns}
          data={data}
          pagination={{
            page: 1,
            pageSize: 10,
            totalItems: 50,
            onPageChange: vi.fn(),
          }}
        />,
      );
      expect(screen.getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument();
    });
  });

  describe('Ref forwarding', () => {
    it('forwards ref to the table element', () => {
      const ref = vi.fn();
      render(<DataTable ref={ref} columns={columns} data={data} />);
      expect(ref).toHaveBeenCalled();
      expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLTableElement);
    });
  });
});
