import * as React from 'react';
import { Filter, X } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Combobox } from '@/components/Combobox';
import { DatePicker } from '@/components/DatePicker';
import { DateRangePicker } from '@/components/DateRangePicker';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { MultiSelect } from '@/components/MultiSelect';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { RadioGroup } from '@/components/RadioGroup';
import { Select } from '@/components/Select';
import { cn } from '@/lib/utils';
import type {
  DataTableColumn,
  DataTableFilterConfig,
  DataTableFilterValue,
  DataTableFiltersProps,
  DataTableNumberOperator,
  DataTableTextOperator,
} from '../types';

const TEXT_OPERATOR_LABELS: Record<DataTableTextOperator, string> = {
  contains: 'Contains',
  equals: 'Equals',
  startsWith: 'Starts with',
  endsWith: 'Ends with',
};

const NUMBER_OPERATOR_LABELS: Record<DataTableNumberOperator, string> = {
  eq: '=',
  neq: '≠',
  gt: '>',
  gte: '≥',
  lt: '<',
  lte: '≤',
  between: 'Between',
};

const textOperatorOptions = (Object.keys(TEXT_OPERATOR_LABELS) as DataTableTextOperator[]).map(
  value => ({ value, label: TEXT_OPERATOR_LABELS[value] }),
);

const numberOperatorOptions = (
  Object.keys(NUMBER_OPERATOR_LABELS) as DataTableNumberOperator[]
).map(value => ({ value, label: NUMBER_OPERATOR_LABELS[value] }));

/** Render a human-readable summary for an active filter (used in the badge). */
function summarizeFilter(config: DataTableFilterConfig, value: DataTableFilterValue): string {
  switch (value.type) {
    case 'text':
      return value.operator === 'contains'
        ? `"${value.value}"`
        : `${TEXT_OPERATOR_LABELS[value.operator].toLowerCase()} "${value.value}"`;
    case 'number': {
      if (value.value === null) return '';
      if (value.operator === 'between' && value.valueMax != null) {
        return `${value.value}–${value.valueMax}`;
      }
      return `${NUMBER_OPERATOR_LABELS[value.operator]} ${value.value}`;
    }
    case 'boolean': {
      if (config.type !== 'boolean') return String(value.value);
      return value.value ? (config.trueLabel ?? 'Yes') : (config.falseLabel ?? 'No');
    }
    case 'select': {
      if (config.type !== 'select') return value.value;
      const opt = config.options.find(o => o.value === value.value);
      return opt?.label ?? value.value;
    }
    case 'multiSelect': {
      if (config.type !== 'multiSelect') return `${value.value.length} selected`;
      if (value.value.length === 0) return '';
      if (value.value.length === 1) {
        const opt = config.options.find(o => o.value === value.value[0]);
        return opt?.label ?? value.value[0];
      }
      return `${value.value.length} selected`;
    }
    case 'date':
      return value.value.toLocaleDateString();
    case 'dateRange': {
      const from = value.value.from?.toLocaleDateString();
      const to = value.value.to?.toLocaleDateString();
      if (from && to) return `${from} – ${to}`;
      if (from) return `from ${from}`;
      if (to) return `to ${to}`;
      return '';
    }
  }
}

/** Whether a value is effectively empty (and should clear the filter rather than apply). */
function isEmptyValue(value: DataTableFilterValue): boolean {
  switch (value.type) {
    case 'text':
      return value.value.trim() === '';
    case 'number':
      if (value.operator === 'between') return value.value == null && value.valueMax == null;
      return value.value == null;
    case 'multiSelect':
      return value.value.length === 0;
    case 'select':
      return value.value === '';
    case 'dateRange':
      return !value.value.from && !value.value.to;
    default:
      return false;
  }
}

interface FilterFieldProps {
  column: DataTableColumn<unknown>;
  value: DataTableFilterValue | undefined;
  onChange: (value: DataTableFilterValue | undefined) => void;
}

function FilterField({ column, value, onChange }: FilterFieldProps) {
  const filter = column.filter;
  const id = React.useId();
  if (!filter) return null;

  const commit = (next: DataTableFilterValue) => {
    onChange(isEmptyValue(next) ? undefined : next);
  };

  switch (filter.type) {
    case 'text': {
      const current = value?.type === 'text' ? value : undefined;
      const operator = current?.operator ?? 'contains';
      return (
        <div className="space-y-1.5">
          <Label htmlFor={id}>{column.header}</Label>
          <div className="flex items-center gap-2">
            {filter.showOperator ? (
              <div className="w-[140px] shrink-0">
                <Select
                  aria-label={`${column.header} operator`}
                  options={textOperatorOptions}
                  value={operator}
                  onChange={op =>
                    commit({
                      type: 'text',
                      value: current?.value ?? '',
                      operator: op as DataTableTextOperator,
                    })
                  }
                />
              </div>
            ) : null}
            <Input
              id={id}
              placeholder={filter.placeholder ?? 'Filter…'}
              type="text"
              value={current?.value ?? ''}
              onChange={e => commit({ type: 'text', value: e.target.value, operator })}
            />
          </div>
        </div>
      );
    }

    case 'number': {
      const current = value?.type === 'number' ? value : undefined;
      const showOperator = filter.showOperator !== false;
      const operator = current?.operator ?? 'eq';
      const isBetween = operator === 'between';
      const maxId = `${id}-max`;
      return (
        <div className="space-y-1.5">
          <Label htmlFor={id}>{column.header}</Label>
          <div className="flex items-center gap-2">
            {showOperator ? (
              <div className="w-[120px] shrink-0">
                <Select
                  aria-label={`${column.header} operator`}
                  options={numberOperatorOptions}
                  value={operator}
                  onChange={op =>
                    commit({
                      type: 'number',
                      value: current?.value ?? null,
                      valueMax: current?.valueMax ?? null,
                      operator: op as DataTableNumberOperator,
                    })
                  }
                />
              </div>
            ) : null}
            <Input
              aria-label={isBetween ? `${column.header} minimum` : column.header}
              id={id}
              max={filter.max}
              min={filter.min}
              placeholder={filter.placeholder ?? (isBetween ? 'Min' : '')}
              step={filter.step}
              type="number"
              value={current?.value ?? ''}
              onChange={e =>
                commit({
                  type: 'number',
                  value: e.target.value === '' ? null : Number(e.target.value),
                  valueMax: current?.valueMax ?? null,
                  operator,
                })
              }
            />
            {isBetween ? (
              <>
                <span aria-hidden="true" className="text-sm text-muted-foreground">
                  –
                </span>
                <Input
                  aria-label={`${column.header} maximum`}
                  id={maxId}
                  max={filter.max}
                  min={filter.min}
                  placeholder="Max"
                  step={filter.step}
                  type="number"
                  value={current?.valueMax ?? ''}
                  onChange={e =>
                    commit({
                      type: 'number',
                      value: current?.value ?? null,
                      valueMax: e.target.value === '' ? null : Number(e.target.value),
                      operator,
                    })
                  }
                />
              </>
            ) : null}
          </div>
        </div>
      );
    }

    case 'boolean': {
      const current = value?.type === 'boolean' ? value : undefined;
      const radioValue = current === undefined ? 'any' : current.value ? 'true' : 'false';
      const options = [
        { value: 'any', label: filter.anyLabel ?? 'Any' },
        { value: 'true', label: filter.trueLabel ?? 'Yes' },
        { value: 'false', label: filter.falseLabel ?? 'No' },
      ];
      return (
        <fieldset className="space-y-1.5">
          <legend className="text-sm font-medium">{column.header}</legend>
          <RadioGroup
            aria-label={column.header}
            options={options}
            orientation="horizontal"
            value={radioValue}
            onChange={v => {
              if (v === 'any') onChange(undefined);
              else onChange({ type: 'boolean', value: v === 'true' });
            }}
          />
        </fieldset>
      );
    }

    case 'select': {
      const current = value?.type === 'select' ? value.value : '';
      return (
        <div className="space-y-1.5">
          <Label htmlFor={id}>{column.header}</Label>
          {filter.searchable ? (
            <Combobox
              aria-label={column.header}
              options={filter.options}
              placeholder={filter.placeholder ?? 'Select…'}
              value={current}
              onChange={v => {
                if (!v) onChange(undefined);
                else onChange({ type: 'select', value: v });
              }}
            />
          ) : (
            <Select
              aria-label={column.header}
              options={filter.options}
              placeholder={filter.placeholder ?? 'Select…'}
              value={current}
              onChange={v => {
                if (!v) onChange(undefined);
                else onChange({ type: 'select', value: v });
              }}
            />
          )}
        </div>
      );
    }

    case 'multiSelect': {
      const current = value?.type === 'multiSelect' ? value.value : [];
      return (
        <div className="space-y-1.5">
          <Label htmlFor={id}>{column.header}</Label>
          <MultiSelect
            aria-label={column.header}
            options={filter.options}
            placeholder={filter.placeholder ?? 'Select…'}
            value={current}
            onChange={v => commit({ type: 'multiSelect', value: v })}
          />
        </div>
      );
    }

    case 'date': {
      const current = value?.type === 'date' ? value.value : undefined;
      return (
        <div className="space-y-1.5">
          <Label htmlFor={id}>{column.header}</Label>
          <DatePicker
            placeholder={filter.placeholder ?? 'Pick a date'}
            value={current}
            onChange={d => {
              if (!d) onChange(undefined);
              else onChange({ type: 'date', value: d });
            }}
          />
        </div>
      );
    }

    case 'dateRange': {
      const current =
        value?.type === 'dateRange' ? value.value : ({} as { from?: Date; to?: Date });
      return (
        <div className="space-y-1.5">
          <Label htmlFor={id}>{column.header}</Label>
          <DateRangePicker
            placeholder={filter.placeholder}
            value={current}
            onChange={range => commit({ type: 'dateRange', value: range })}
          />
        </div>
      );
    }
  }
}

function renderHeading(heading: React.ReactNode) {
  if (heading === null || heading === undefined) return null;
  if (typeof heading === 'string') {
    return <h3 className="text-sm font-semibold">{heading}</h3>;
  }
  return heading;
}

const DataTableFiltersInner = <T,>(
  {
    columns,
    filters,
    onFilterChange,
    onClearAll,
    layout = 'popover',
    heading = 'Filters',
    triggerLabel = 'Filters',
    className,
    ...props
  }: DataTableFiltersProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>,
) => {
  const [open, setOpen] = React.useState(false);

  const filterableColumns = React.useMemo(() => columns.filter(c => c.filter), [columns]);

  const activeEntries = React.useMemo(
    () =>
      Object.entries(filters)
        .map(([columnId, value]) => {
          const column = columns.find(c => c.id === columnId);
          if (!column || !column.filter) return null;
          return { column, value };
        })
        .filter(
          (x): x is { column: DataTableColumn<T>; value: DataTableFilterValue } => x !== null,
        ),
    [filters, columns],
  );

  const activeCount = activeEntries.length;

  const handleClearAll = () => {
    if (onClearAll) onClearAll();
    else activeEntries.forEach(e => onFilterChange(e.column.id, undefined));
  };

  if (filterableColumns.length === 0) return null;

  const headingNode = renderHeading(heading);

  const filterFields = (
    <div className="space-y-4">
      {filterableColumns.map(column => (
        <FilterField
          key={column.id}
          column={column as DataTableColumn<unknown>}
          value={filters[column.id]}
          onChange={next => onFilterChange(column.id, next)}
        />
      ))}
    </div>
  );

  const header =
    headingNode || activeCount > 0 ? (
      <div className="flex items-center justify-between">
        {headingNode}
        {activeCount > 0 ? (
          <Button size="sm" variant="link" onClick={handleClearAll}>
            Clear all
          </Button>
        ) : null}
      </div>
    ) : null;

  const liveRegion = (
    <span aria-atomic="true" aria-live="polite" className="sr-only">
      {activeCount === 0
        ? 'No filters applied'
        : `${activeCount} filter${activeCount === 1 ? '' : 's'} applied`}
    </span>
  );

  if (layout === 'inline') {
    return (
      <div
        ref={ref}
        aria-label="Table filters"
        className={cn('space-y-3', className)}
        role="region"
        {...props}
      >
        {header}
        {filterFields}
        {liveRegion}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      aria-label="Table filters"
      className={cn('flex flex-wrap items-center gap-2', className)}
      role="region"
      {...props}
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button aria-expanded={open} aria-haspopup="dialog" variant="input">
            <Filter aria-hidden="true" className="mr-2 h-4 w-4" />
            {triggerLabel}
            {activeCount > 0 ? (
              <Badge className="ml-2" variant="primary">
                {activeCount}
              </Badge>
            ) : null}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-[min(380px,calc(100vw-2rem))]">
          {header}
          <div className="mt-3">{filterFields}</div>
        </PopoverContent>
      </Popover>

      {activeEntries.map(({ column, value }) => {
        const summary = summarizeFilter(column.filter!, value);
        if (!summary) return null;
        return (
          <Badge key={column.id} className="flex items-center gap-1 pl-2 pr-1" variant="outline">
            <span className="text-xs">
              <span className="font-medium">{column.header}:</span> {summary}
            </span>
            <button
              aria-label={`Remove ${column.header} filter`}
              className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-sm
                hover:bg-muted focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-ring focus-visible:ring-offset-1"
              type="button"
              onClick={() => onFilterChange(column.id, undefined)}
            >
              <X aria-hidden="true" className="h-3 w-3" />
            </button>
          </Badge>
        );
      })}

      {liveRegion}
    </div>
  );
};

const DataTableFilters = React.forwardRef(DataTableFiltersInner) as <T>(
  props: DataTableFiltersProps<T> & React.RefAttributes<HTMLDivElement>,
) => React.ReactElement | null;

(DataTableFilters as { displayName?: string }).displayName = 'DataTableFilters';

export { DataTableFilters };
