import type { Meta, StoryObj } from '@storybook/react';
import { TableColumnGroups } from '../demos/TableColumnGroups';
import sourceColumnGroups from '../demos/TableColumnGroups.tsx?raw';
import { TableDefault } from '../demos/TableDefault';
import sourceDefault from '../demos/TableDefault.tsx?raw';
import { TableEmpty } from '../demos/TableEmpty';
import sourceEmpty from '../demos/TableEmpty.tsx?raw';
import { TableScrollable } from '../demos/TableScrollable';
import sourceScrollable from '../demos/TableScrollable.tsx?raw';
import { TableSortable } from '../demos/TableSortable';
import sourceSortable from '../demos/TableSortable.tsx?raw';
import { TableStacked } from '../demos/TableStacked';
import sourceStacked from '../demos/TableStacked.tsx?raw';
import { people, personColumns } from '../demos/sampleData';
import { Table } from '../src/Table';

const meta = {
  title: 'Data & Display/Table',
  component: Table,
  tags: ['!dev'], // Internal — not ready for public API; hidden from the sidebar.
  parameters: {
    docs: {
      description: {
        component:
          'Config-driven table built on TanStack Table. Pass `data` and `columns` and it ' +
          'renders through the accessible `TableRoot` primitives — with column grouping, row ' +
          'headers (`meta.isRowHeader`), sorting (`aria-sort` + live announcements), and ' +
          'scroll / stacked responsive behavior.',
      },
    },
  },
  // The stories below render self-contained demos; these satisfy the required
  // props on the shared meta type.
  args: { data: [], columns: [] },
  argTypes: {
    enableSorting: { control: 'boolean', description: 'Enable column sorting.' },
    variant: { control: 'radio', options: ['bordered', 'borderless'] },
    striped: { control: 'boolean' },
    density: { control: 'radio', options: ['default', 'compact'] },
    responsive: { control: 'radio', options: ['scroll', 'stack', 'none'] },
    stackBreakpoint: { control: 'radio', options: ['sm', 'md', 'lg'] },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// Static example stories show copy-pasteable source and don't consume args, so
// hide the (non-functional) controls panel on them. Use Playground to explore
// the props interactively.
const withSource = (code: string) => ({
  controls: { disable: true },
  docs: { source: { code, language: 'tsx' } },
});

/**
 * Interactive example — toggle `enableSorting`, `striped`, `variant`,
 * `density`, and `responsive` in the Controls panel to see them applied live.
 */
export const Playground: Story = {
  args: {
    caption: 'Team roster',
    enableSorting: false,
    variant: 'bordered',
    striped: false,
    density: 'default',
    responsive: 'scroll',
    stackBreakpoint: 'md',
  },
  render: args => <Table {...args} columns={personColumns} data={people} />,
};

/** Pass `data` + `columns`; the `name` column is the row header. */
export const Default: Story = {
  render: () => <TableDefault />,
  parameters: withSource(sourceDefault),
};

/**
 * Sortable columns. Headers are buttons; the `<th>` carries `aria-sort` and
 * changes are announced to screen readers.
 */
export const Sortable: Story = {
  render: () => <TableSortable />,
  parameters: withSource(sourceSortable),
};

/** Nested column definitions produce multi-level headers. */
export const ColumnGroups: Story = {
  render: () => <TableColumnGroups />,
  parameters: withSource(sourceColumnGroups),
};

/**
 * Scrollable (default) responsive mode: a keyboard-focusable, labeled scroll
 * region appears when the table overflows its container.
 */
export const Scrollable: Story = {
  render: () => <TableScrollable />,
  parameters: withSource(sourceScrollable),
};

/**
 * Stacked responsive mode: rows become labeled cards below the breakpoint.
 * Resize the preview narrow to see it reflow.
 */
export const Stacked: Story = {
  render: () => <TableStacked />,
  parameters: withSource(sourceStacked),
};

/** Empty state shown when there are no rows. */
export const Empty: Story = {
  render: () => <TableEmpty />,
  parameters: withSource(sourceEmpty),
};
