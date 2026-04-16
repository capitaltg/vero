import { expectNoViolations } from '@/test/utils';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { DataTableFilters } from './DataTableFilters';
import type { DataTableColumn, DataTableFilterState } from '../types';

interface Row {
  name: string;
  role: string;
  isActive: boolean;
  age: number;
}

const columns: DataTableColumn<Row>[] = [
  {
    id: 'name',
    header: 'Name',
    filter: { type: 'text', placeholder: 'Search name' },
  },
  {
    id: 'role',
    header: 'Role',
    filter: {
      type: 'select',
      options: [
        { value: 'admin', label: 'Admin' },
        { value: 'user', label: 'User' },
      ],
    },
  },
  {
    id: 'isActive',
    header: 'Active',
    filter: { type: 'boolean' },
  },
  {
    id: 'age',
    header: 'Age',
    filter: { type: 'number', showOperator: false },
  },
  // Columns without filters should be ignored
  { id: 'email', header: 'Email' },
];

describe('DataTableFilters', () => {
  describe('Rendering', () => {
    it('returns null when no columns have filters', () => {
      const { container } = render(
        <DataTableFilters
          columns={[{ id: 'name', header: 'Name' }]}
          filters={{}}
          onFilterChange={vi.fn()}
        />,
      );
      expect(container.firstChild).toBeNull();
    });

    it('renders a trigger button when filterable columns exist', () => {
      render(<DataTableFilters columns={columns} filters={{}} onFilterChange={vi.fn()} />);
      expect(screen.getByRole('button', { name: /filters/i })).toBeInTheDocument();
    });

    it('renders a count badge when filters are active', () => {
      const filters: DataTableFilterState = {
        role: { type: 'select', value: 'admin' },
        isActive: { type: 'boolean', value: true },
      };
      render(<DataTableFilters columns={columns} filters={filters} onFilterChange={vi.fn()} />);
      const trigger = screen.getByRole('button', { name: /filters/i });
      expect(within(trigger).getByText('2')).toBeInTheDocument();
    });

    it('uses custom trigger label', () => {
      render(
        <DataTableFilters
          columns={columns}
          filters={{}}
          triggerLabel="Refine"
          onFilterChange={vi.fn()}
        />,
      );
      expect(screen.getByRole('button', { name: /refine/i })).toBeInTheDocument();
    });
  });

  describe('Active filter badges', () => {
    it('renders a badge for each active filter with the column header', () => {
      const filters: DataTableFilterState = {
        role: { type: 'select', value: 'admin' },
      };
      render(<DataTableFilters columns={columns} filters={filters} onFilterChange={vi.fn()} />);
      expect(screen.getByText(/Role:/)).toBeInTheDocument();
      expect(screen.getByText(/Admin/)).toBeInTheDocument();
    });

    it('summarizes text filter value', () => {
      const filters: DataTableFilterState = {
        name: { type: 'text', value: 'alice', operator: 'contains' },
      };
      render(<DataTableFilters columns={columns} filters={filters} onFilterChange={vi.fn()} />);
      expect(screen.getByText(/"alice"/)).toBeInTheDocument();
    });

    it('summarizes number filter value with operator', () => {
      const filters: DataTableFilterState = {
        age: { type: 'number', value: 30, operator: 'gt' },
      };
      render(<DataTableFilters columns={columns} filters={filters} onFilterChange={vi.fn()} />);
      expect(screen.getByText(/> 30/)).toBeInTheDocument();
    });

    it('summarizes boolean filter with configured label', () => {
      const columnsWithLabels: DataTableColumn<Row>[] = [
        {
          id: 'isActive',
          header: 'Active',
          filter: { type: 'boolean', trueLabel: 'Online', falseLabel: 'Offline' },
        },
      ];
      const filters: DataTableFilterState = {
        isActive: { type: 'boolean', value: true },
      };
      render(
        <DataTableFilters columns={columnsWithLabels} filters={filters} onFilterChange={vi.fn()} />,
      );
      expect(screen.getByText(/Online/)).toBeInTheDocument();
    });

    it('clicking a badge remove button clears that filter', async () => {
      const user = userEvent.setup();
      const onFilterChange = vi.fn();
      const filters: DataTableFilterState = {
        role: { type: 'select', value: 'admin' },
      };
      render(
        <DataTableFilters columns={columns} filters={filters} onFilterChange={onFilterChange} />,
      );
      await user.click(screen.getByRole('button', { name: /remove role filter/i }));
      expect(onFilterChange).toHaveBeenCalledWith('role', undefined);
    });
  });

  describe('Popover content', () => {
    it('opens the popover when trigger is clicked', async () => {
      const user = userEvent.setup();
      render(<DataTableFilters columns={columns} filters={{}} onFilterChange={vi.fn()} />);

      await user.click(screen.getByRole('button', { name: /filters/i }));

      await waitFor(() => {
        expect(screen.getByRole('heading', { name: 'Filters' })).toBeInTheDocument();
      });
    });

    it('renders a labelled input for text filters', async () => {
      const user = userEvent.setup();
      render(<DataTableFilters columns={columns} filters={{}} onFilterChange={vi.fn()} />);
      await user.click(screen.getByRole('button', { name: /filters/i }));

      await waitFor(() => {
        expect(screen.getByLabelText('Name')).toBeInTheDocument();
      });
    });

    it('text input fires onFilterChange with contains operator', async () => {
      const user = userEvent.setup();
      const onFilterChange = vi.fn();
      render(<DataTableFilters columns={columns} filters={{}} onFilterChange={onFilterChange} />);
      await user.click(screen.getByRole('button', { name: /filters/i }));

      const input = await screen.findByLabelText('Name');
      await user.type(input, 'a');

      expect(onFilterChange).toHaveBeenCalledWith('name', {
        type: 'text',
        value: 'a',
        operator: 'contains',
      });
    });

    it('clearing text input dispatches undefined to remove the filter', async () => {
      const user = userEvent.setup();
      const onFilterChange = vi.fn();
      render(
        <DataTableFilters
          columns={columns}
          filters={{ name: { type: 'text', value: 'a', operator: 'contains' } }}
          onFilterChange={onFilterChange}
        />,
      );
      await user.click(screen.getByRole('button', { name: /filters/i }));

      const input = await screen.findByLabelText('Name');
      await user.clear(input);

      expect(onFilterChange).toHaveBeenLastCalledWith('name', undefined);
    });

    it('renders a numeric input for number filters', async () => {
      const user = userEvent.setup();
      render(<DataTableFilters columns={columns} filters={{}} onFilterChange={vi.fn()} />);
      await user.click(screen.getByRole('button', { name: /filters/i }));

      const input = await screen.findByLabelText('Age');
      expect(input).toHaveAttribute('type', 'number');
    });

    it('renders a radio group for boolean filters', async () => {
      const user = userEvent.setup();
      render(<DataTableFilters columns={columns} filters={{}} onFilterChange={vi.fn()} />);
      await user.click(screen.getByRole('button', { name: /filters/i }));

      const group = await screen.findByRole('radiogroup', { name: 'Active' });
      expect(group).toBeInTheDocument();
      // Tri-state: Any, Yes, No
      expect(within(group).getAllByRole('radio')).toHaveLength(3);
    });

    it('shows "Clear all" only when filters are active', async () => {
      const user = userEvent.setup();
      const { rerender } = render(
        <DataTableFilters columns={columns} filters={{}} onFilterChange={vi.fn()} />,
      );
      await user.click(screen.getByRole('button', { name: /filters/i }));
      await screen.findByRole('heading', { name: 'Filters' });

      expect(screen.queryByRole('button', { name: /clear all/i })).not.toBeInTheDocument();

      rerender(
        <DataTableFilters
          columns={columns}
          filters={{ role: { type: 'select', value: 'admin' } }}
          onFilterChange={vi.fn()}
        />,
      );
      expect(screen.getByRole('button', { name: /clear all/i })).toBeInTheDocument();
    });

    it('clicking "Clear all" calls onClearAll when provided', async () => {
      const user = userEvent.setup();
      const onClearAll = vi.fn();
      render(
        <DataTableFilters
          columns={columns}
          filters={{ role: { type: 'select', value: 'admin' } }}
          onClearAll={onClearAll}
          onFilterChange={vi.fn()}
        />,
      );
      await user.click(screen.getByRole('button', { name: /filters/i }));
      await user.click(await screen.findByRole('button', { name: /clear all/i }));

      expect(onClearAll).toHaveBeenCalled();
    });

    it('clicking "Clear all" falls back to clearing each filter via onFilterChange', async () => {
      const user = userEvent.setup();
      const onFilterChange = vi.fn();
      render(
        <DataTableFilters
          columns={columns}
          filters={{
            role: { type: 'select', value: 'admin' },
            name: { type: 'text', value: 'a', operator: 'contains' },
          }}
          onFilterChange={onFilterChange}
        />,
      );
      await user.click(screen.getByRole('button', { name: /filters/i }));
      await user.click(await screen.findByRole('button', { name: /clear all/i }));

      expect(onFilterChange).toHaveBeenCalledWith('role', undefined);
      expect(onFilterChange).toHaveBeenCalledWith('name', undefined);
    });
  });

  describe('Inline layout', () => {
    it('renders fields directly without a trigger button', () => {
      render(
        <DataTableFilters
          columns={columns}
          filters={{}}
          layout="inline"
          onFilterChange={vi.fn()}
        />,
      );
      expect(screen.queryByRole('button', { name: /filters/i })).not.toBeInTheDocument();
      // Fields are visible immediately
      expect(screen.getByLabelText('Name')).toBeInTheDocument();
      expect(screen.getByRole('radiogroup', { name: 'Active' })).toBeInTheDocument();
    });

    it('does not render active-filter badges in inline layout', () => {
      render(
        <DataTableFilters
          columns={columns}
          filters={{ role: { type: 'select', value: 'admin' } }}
          layout="inline"
          onFilterChange={vi.fn()}
        />,
      );
      // The badge uses aria-label "Remove <Column> filter" on its close button —
      // absent in inline because controls themselves express state.
      expect(screen.queryByRole('button', { name: /remove role filter/i })).not.toBeInTheDocument();
    });

    it('renders the default heading', () => {
      render(
        <DataTableFilters
          columns={columns}
          filters={{}}
          layout="inline"
          onFilterChange={vi.fn()}
        />,
      );
      expect(screen.getByRole('heading', { name: 'Filters' })).toBeInTheDocument();
    });

    it('accepts a custom heading node', () => {
      render(
        <DataTableFilters
          columns={columns}
          filters={{}}
          heading={<h2>Refine results</h2>}
          layout="inline"
          onFilterChange={vi.fn()}
        />,
      );
      expect(screen.getByRole('heading', { level: 2, name: 'Refine results' })).toBeInTheDocument();
    });

    it('hides the heading when heading is null', () => {
      render(
        <DataTableFilters
          columns={columns}
          filters={{}}
          heading={null}
          layout="inline"
          onFilterChange={vi.fn()}
        />,
      );
      expect(screen.queryByRole('heading', { name: 'Filters' })).not.toBeInTheDocument();
    });

    it('shows "Clear all" inline when filters are active', async () => {
      const user = userEvent.setup();
      const onFilterChange = vi.fn();
      render(
        <DataTableFilters
          columns={columns}
          filters={{ role: { type: 'select', value: 'admin' } }}
          layout="inline"
          onFilterChange={onFilterChange}
        />,
      );
      await user.click(screen.getByRole('button', { name: /clear all/i }));
      expect(onFilterChange).toHaveBeenCalledWith('role', undefined);
    });

    it('has no axe violations in inline layout', async () => {
      const { container } = render(
        <DataTableFilters
          columns={columns}
          filters={{ name: { type: 'text', value: 'a', operator: 'contains' } }}
          layout="inline"
          onFilterChange={vi.fn()}
        />,
      );
      const results = await axe(container);
      expectNoViolations(results);
    });
  });

  describe('Accessibility', () => {
    it('wrapper has a labelled region role', () => {
      render(<DataTableFilters columns={columns} filters={{}} onFilterChange={vi.fn()} />);
      expect(screen.getByRole('region', { name: 'Table filters' })).toBeInTheDocument();
    });

    it('trigger exposes aria-expanded and aria-haspopup', async () => {
      const user = userEvent.setup();
      render(<DataTableFilters columns={columns} filters={{}} onFilterChange={vi.fn()} />);
      const trigger = screen.getByRole('button', { name: /filters/i });
      expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');

      await user.click(trigger);

      await waitFor(() => {
        expect(trigger).toHaveAttribute('aria-expanded', 'true');
      });
    });

    it('announces the active filter count to assistive tech', () => {
      const filters: DataTableFilterState = {
        role: { type: 'select', value: 'admin' },
      };
      const { container } = render(
        <DataTableFilters columns={columns} filters={filters} onFilterChange={vi.fn()} />,
      );
      const live = container.querySelector('[aria-live="polite"]');
      expect(live).toHaveTextContent('1 filter applied');
    });

    it('has no axe violations when closed', async () => {
      const { container } = render(
        <DataTableFilters columns={columns} filters={{}} onFilterChange={vi.fn()} />,
      );
      const results = await axe(container);
      expectNoViolations(results);
    });

    it('has no axe violations with active filters', async () => {
      const filters: DataTableFilterState = {
        name: { type: 'text', value: 'alice', operator: 'contains' },
        role: { type: 'select', value: 'admin' },
      };
      const { container } = render(
        <DataTableFilters columns={columns} filters={filters} onFilterChange={vi.fn()} />,
      );
      const results = await axe(container);
      expectNoViolations(results);
    });
  });
});
