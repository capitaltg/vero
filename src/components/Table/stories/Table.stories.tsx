import type { Meta, StoryObj } from '@storybook/react';
import { TableColumnGroups } from '../demos/TableColumnGroups';
import sourceColumnGroups from '../demos/TableColumnGroups.tsx?raw';
import { TableBasic } from '../demos/TableBasic';
import sourcePrimitive from '../demos/TableBasic.tsx?raw';
import { TableRowGroups } from '../demos/TableRowGroups';
import sourceRowGroups from '../demos/TableRowGroups.tsx?raw';
import { TableStacked } from '../demos/TableStacked';
import sourceStacked from '../demos/TableStacked.tsx?raw';
import { TableStyleVariants } from '../demos/TableStyleVariants';
import sourceStyleVariants from '../demos/TableStyleVariants.tsx?raw';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../src/Table';

const meta = {
  title: 'Data & Display/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          'Accessible, USWDS-styled table primitives. Compose `Table` with `TableCaption`, ' +
          '`TableHeader`, `TableBody`, `TableFooter`, `TableRow`, `TableHead`, and `TableCell` ' +
          'for small or bespoke tables. For data-driven tables, see `DataTable`, which renders ' +
          'through these same primitives.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['bordered', 'borderless'],
      description: 'Grid line style.',
    },
    striped: { control: 'boolean', description: 'Alternate row background.' },
    density: {
      control: 'radio',
      options: ['default', 'compact'],
      description: 'Cell padding density.',
    },
    responsive: {
      control: 'radio',
      options: ['scroll', 'stack', 'none'],
      description: 'How the table adapts to narrow viewports.',
    },
    stackBreakpoint: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Breakpoint below which a stacked table becomes cards.',
    },
    stackedStyle: {
      control: 'radio',
      options: ['default', 'headers'],
      description: 'How each card is presented when stacked.',
    },
    stickyHeader: { control: 'boolean', description: 'Pin the header row while the body scrolls.' },
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
 * Interactive example — change `variant`, `striped`, `density`, and
 * `responsive` in the Controls panel to see them applied live.
 */
export const Playground: Story = {
  args: { variant: 'bordered', striped: false, density: 'default', responsive: 'none' },
  render: args => (
    <Table {...args} aria-label="Fruit inventory">
      <TableCaption>Fruit inventory</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead scope="col">Fruit</TableHead>
          <TableHead className="text-right" scope="col">
            Qty
          </TableHead>
          <TableHead className="text-right" scope="col">
            Price
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableHead scope="row">Apples</TableHead>
          <TableCell className="text-right">12</TableCell>
          <TableCell className="text-right">$0.50</TableCell>
        </TableRow>
        <TableRow>
          <TableHead scope="row">Bananas</TableHead>
          <TableCell className="text-right">8</TableCell>
          <TableCell className="text-right">$0.25</TableCell>
        </TableRow>
        <TableRow>
          <TableHead scope="row">Cherries</TableHead>
          <TableCell className="text-right">30</TableCell>
          <TableCell className="text-right">$0.10</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

/**
 * A basic table composed from the primitives, with a `<caption>`, column
 * headers (`scope="col"`), and a row header per row (`scope="row"`).
 */
export const Default: Story = {
  render: () => <TableBasic />,
  parameters: withSource(sourcePrimitive),
};

/**
 * Multi-level column headers using `colSpan` + `scope="colgroup"` for the group
 * headers and `scope="col"` for the leaf headers.
 */
export const ColumnGroups: Story = {
  render: () => <TableColumnGroups />,
  parameters: withSource(sourceColumnGroups),
};

/**
 * Visual row-group sections: multiple `<TableBody>` blocks, each introduced by
 * a spanning group header.
 */
export const RowGroupSections: Story = {
  render: () => <TableRowGroups />,
  parameters: withSource(sourceRowGroups),
};

/**
 * The `variant` (bordered / borderless), `striped`, and `density` style
 * options.
 */
export const StyleVariants: Story = {
  render: () => <TableStyleVariants />,
  parameters: withSource(sourceStyleVariants),
};

/**
 * Stacked (card) mode with the primitives — the USWDS `usa-table--stacked`
 * variant. Setting `responsive="stack"` is enough: `Table` reads the column
 * headers off the header row and labels the body cells with them, so
 * hand-composed tables reflow with no extra markup. Set `data-label` on a cell
 * to override its label, or `stackedStyle="headers"` to promote each row's
 * first cell to the card's heading.
 */
export const Stacked: Story = {
  render: () => <TableStacked />,
  parameters: { ...withSource(sourceStacked), viewport: { defaultViewport: 'mobile2' } },
};
