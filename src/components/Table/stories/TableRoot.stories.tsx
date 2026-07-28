import type { Meta, StoryObj } from '@storybook/react';
import { TableRootColumnGroups } from '../demos/TableRootColumnGroups';
import sourceColumnGroups from '../demos/TableRootColumnGroups.tsx?raw';
import { TableRootBasic } from '../demos/TableRootBasic';
import sourcePrimitive from '../demos/TableRootBasic.tsx?raw';
import { TableRootRowGroups } from '../demos/TableRootRowGroups';
import sourceRowGroups from '../demos/TableRootRowGroups.tsx?raw';
import { TableRootStyleVariants } from '../demos/TableRootStyleVariants';
import sourceStyleVariants from '../demos/TableRootStyleVariants.tsx?raw';
import {
  TableRoot,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../src/TableRoot';

const meta = {
  title: 'Data & Display/Table/Primitives',
  component: TableRoot,
  tags: ['!dev'], // Internal — not ready for public API; hidden from the sidebar.
  parameters: {
    docs: {
      description: {
        component:
          'Accessible, USWDS-styled table primitives. Compose `TableRoot`, `TableCaption`, ' +
          '`TableHeader`, `TableBody`, `TableFooter`, `TableRow`, `TableHead`, and `TableCell` ' +
          'directly for small or bespoke tables. For data-driven tables, see `Table`, which ' +
          'renders through these same primitives.',
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
  },
} satisfies Meta<typeof TableRoot>;

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
    <TableRoot {...args} aria-label="Fruit inventory">
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
    </TableRoot>
  ),
};

/**
 * A basic table composed from the primitives, with a `<caption>`, column
 * headers (`scope="col"`), and a row header per row (`scope="row"`).
 */
export const Default: Story = {
  render: () => <TableRootBasic />,
  parameters: withSource(sourcePrimitive),
};

/**
 * Multi-level column headers using `colSpan` + `scope="colgroup"` for the group
 * headers and `scope="col"` for the leaf headers.
 */
export const ColumnGroups: Story = {
  render: () => <TableRootColumnGroups />,
  parameters: withSource(sourceColumnGroups),
};

/**
 * Visual row-group sections: multiple `<TableBody>` blocks, each introduced by
 * a spanning group header.
 */
export const RowGroupSections: Story = {
  render: () => <TableRootRowGroups />,
  parameters: withSource(sourceRowGroups),
};

/**
 * The `variant` (bordered / borderless), `striped`, and `density` style
 * options.
 */
export const StyleVariants: Story = {
  render: () => <TableRootStyleVariants />,
  parameters: withSource(sourceStyleVariants),
};
