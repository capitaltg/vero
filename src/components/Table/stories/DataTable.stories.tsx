import type { Meta, StoryObj } from '@storybook/react';
import { DataTableColumnGroups } from '../demos/DataTableColumnGroups';
import sourceColumnGroups from '../demos/DataTableColumnGroups.tsx?raw';
import { DataTableDefault } from '../demos/DataTableDefault';
import sourceDefault from '../demos/DataTableDefault.tsx?raw';
import { DataTableEmpty } from '../demos/DataTableEmpty';
import sourceEmpty from '../demos/DataTableEmpty.tsx?raw';
import { DataTableScrollable } from '../demos/DataTableScrollable';
import sourceScrollable from '../demos/DataTableScrollable.tsx?raw';
import { DataTableSortable } from '../demos/DataTableSortable';
import sourceSortable from '../demos/DataTableSortable.tsx?raw';
import { DataTableStacked } from '../demos/DataTableStacked';
import sourceStacked from '../demos/DataTableStacked.tsx?raw';
import { DataTableStackedHeaders } from '../demos/DataTableStackedHeaders';
import sourceStackedHeaders from '../demos/DataTableStackedHeaders.tsx?raw';
import { DataTableStickyHeader } from '../demos/DataTableStickyHeader';
import sourceStickyHeader from '../demos/DataTableStickyHeader.tsx?raw';
import { people, personColumns } from '../demos/sampleData';
import { DataTable } from '../src/DataTable';

const meta = {
  title: 'Data & Display/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Config-driven table built on TanStack Table. Pass `data` and `columns` and it ' +
          'renders through the accessible `Table` primitives — with column grouping, row ' +
          'headers (`meta.isRowHeader`), sorting (`aria-sort` + live announcements), and ' +
          'scroll / stacked responsive behavior. The full guide for both components lives ' +
          'on the [Table docs page](?path=/docs/data-display-table--docs).',
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
    stackedStyle: { control: 'radio', options: ['default', 'headers'] },
    stickyHeader: { control: 'boolean' },
  },
} satisfies Meta<typeof DataTable>;

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
    stackedStyle: 'default',
    stickyHeader: false,
  },
  render: args => <DataTable {...args} columns={personColumns} data={people} />,
};

/** Pass `data` + `columns`; the `name` column is the row header. */
export const Default: Story = {
  render: () => <DataTableDefault />,
  parameters: withSource(sourceDefault),
};

/**
 * Sortable columns. Headers are buttons; the `<th>` carries `aria-sort` and
 * changes are announced to screen readers.
 */
export const Sortable: Story = {
  render: () => <DataTableSortable />,
  parameters: withSource(sourceSortable),
};

/** Nested column definitions produce multi-level headers. */
export const ColumnGroups: Story = {
  render: () => <DataTableColumnGroups />,
  parameters: withSource(sourceColumnGroups),
};

/**
 * Scrollable (default) responsive mode: a keyboard-focusable, labeled scroll
 * region appears when the table overflows its container.
 */
export const Scrollable: Story = {
  render: () => <DataTableScrollable />,
  parameters: withSource(sourceScrollable),
};

/**
 * Stacked responsive mode (USWDS `usa-table--stacked`): rows become labeled
 * cards below the breakpoint, with each cell's column header rendered above its
 * value. `DataTable` derives those labels from the column definitions, so this
 * works with no extra markup. Resize the preview narrow to see it reflow.
 */
export const Stacked: Story = {
  render: () => <DataTableStacked />,
  parameters: { ...withSource(sourceStacked), viewport: { defaultViewport: 'mobile2' } },
};

/**
 * Stacked with card headings (USWDS `usa-table--stacked-header`): the first
 * cell of each row becomes the card's heading instead of a labeled field.
 */
export const StackedHeaders: Story = {
  render: () => <DataTableStackedHeaders />,
  parameters: {
    ...withSource(sourceStackedHeaders),
    viewport: { defaultViewport: 'mobile2' },
  },
};

/**
 * `stickyHeader` keeps the column headers in view while the rows scroll. It
 * needs a scrolling ancestor — the page, or a height-constrained container as
 * shown here.
 */
export const StickyHeader: Story = {
  render: () => <DataTableStickyHeader />,
  parameters: withSource(sourceStickyHeader),
};

/** Empty state shown when there are no rows. */
export const Empty: Story = {
  render: () => <DataTableEmpty />,
  parameters: withSource(sourceEmpty),
};
