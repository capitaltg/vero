import { Badge } from '@/components/Badge';
import { DataTable } from '../src/DataTable';
import type { DataTableColumn } from '../types';

interface Task {
  id: string;
  title: string;
  assignee: string;
  priority: 'high' | 'medium' | 'low';
  status: 'done' | 'in-progress' | 'todo';
}

const priorityVariant = {
  high: 'danger',
  medium: 'warning',
  low: 'default',
} as const;

const statusLabel = {
  done: 'Done',
  'in-progress': 'In Progress',
  todo: 'To Do',
} as const;

const columns: DataTableColumn<Task>[] = [
  { id: 'id', header: 'ID', className: 'font-mono text-muted-foreground' },
  {
    id: 'title',
    header: 'Title',
    cell: row => <span className="font-medium">{row.title}</span>,
  },
  { id: 'assignee', header: 'Assignee' },
  {
    id: 'priority',
    header: 'Priority',
    cell: row => <Badge variant={priorityVariant[row.priority]}>{row.priority}</Badge>,
  },
  {
    id: 'status',
    header: 'Status',
    cell: row => (
      <span className="inline-flex items-center gap-1.5">
        <span
          className={`inline-block h-2 w-2 rounded-full ${
            row.status === 'done'
              ? 'bg-success-500'
              : row.status === 'in-progress'
                ? 'bg-warning-500'
                : 'bg-base-300'
            }`}
        />
        {statusLabel[row.status]}
      </span>
    ),
  },
];

const data: Task[] = [
  {
    id: 'TSK-001',
    title: 'Design new dashboard layout',
    assignee: 'Alice',
    priority: 'high',
    status: 'in-progress',
  },
  {
    id: 'TSK-002',
    title: 'Fix login redirect bug',
    assignee: 'Bob',
    priority: 'high',
    status: 'done',
  },
  {
    id: 'TSK-003',
    title: 'Add export CSV feature',
    assignee: 'Charlie',
    priority: 'medium',
    status: 'todo',
  },
  {
    id: 'TSK-004',
    title: 'Update user documentation',
    assignee: 'Diana',
    priority: 'low',
    status: 'in-progress',
  },
  {
    id: 'TSK-005',
    title: 'Performance audit for API',
    assignee: 'Eve',
    priority: 'medium',
    status: 'todo',
  },
];

export const DataTableCustomCells = () => {
  return (
    <DataTable
      columns={columns}
      data={data}
      getRowId={row => row.id}
      onRowClick={row => alert(`Clicked: ${row.title}`)}
    />
  );
};
