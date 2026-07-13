import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Autocomplete } from '../../Autocomplete';
import { Combobox } from '../../Combobox';
import { DatePicker } from '../../DatePicker';
import { DateRangePicker } from '../../DateRangePicker';
import { Input } from '../../Input';
import { MultiSelect } from '../../MultiSelect';
import { Select } from '../../Select';
// import { TagInput } from '../../TagInput'; // TagInput is not officially deployed yet
import { Textarea } from '../../Textarea';
import { FormItemRequiredWithLabelSlot } from '../demos/FormItemRequiredWithLabelSlot';
import sourceCodeRequiredWithLabelSlot from '../demos/FormItemRequiredWithLabelSlot.tsx?raw';
import { FormItemWithLabelSlot } from '../demos/FormItemWithLabelSlot';
import sourceCodeWithLabelSlot from '../demos/FormItemWithLabelSlot.tsx?raw';
import { FormItem } from '../src/FormItem';

const meta = {
  title: 'Inputs & Forms/FormItem',
  component: FormItem,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description:
        'The label for the form item. If a string is provided, it will be wrapped in a `<Label>` component. If a ReactNode is provided, it will be rendered as-is.',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    labelSlot: {
      control: 'text',
      description:
        'An optional slot to display next to the label, such as an info icon with a tooltip or popover.',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    elementId: {
      control: 'text',
      description:
        'The ID used to generate the label, hint, and error IDs for accessibility. If not provided, the ID of the top-level child element will be used if available. This ID must be unique on the page and must be used as the `id` attribute of the child form element so that it can be assocated with the label.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    hintText: {
      control: 'text',
      description:
        'Hint text to display below the label and above the form element. When provided, FormItem automatically injects `aria-describedby` pointing to the hint element into the child form control.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    errorText: {
      control: 'text',
      description:
        'Error text to display below the form element. When provided, FormItem automatically injects `aria-invalid="true"` and `aria-describedby` pointing to the error element into the child form control, so screen readers announce the error without any additional wiring.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    isRequired: {
      control: 'boolean',
      description:
        'Whether the form item is required. If true, an asterisk (*) will be displayed next to the label.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    className: {
      type: 'string',
      description: 'Additional classes to apply to the form item container.',
    },
  },
} satisfies Meta<typeof FormItem>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default state of the FormItem component.
 * Shows a basic form field with a label and input.
 */
export const Default: Story = {
  args: {
    label: 'Email',
    elementId: 'default-element-id',
    children: <Input placeholder="Enter your email" type="email" />,
  },
};

/**
 * FormItem with hint text.
 * Demonstrates how to provide additional context or instructions for a form field.
 */
export const WithHintText: Story = {
  args: {
    label: 'Password',
    elementId: 'password-element-id',
    hintText: 'Must be at least 8 characters long',
    children: <Input placeholder="Enter your password" type="password" />,
  },
};

/**
 * FormItem with error state.
 * Shows how validation errors are displayed to the user.
 */
export const WithError: Story = {
  args: {
    label: 'Username',
    elementId: 'username-element-id',
    errorText: 'Username is already taken',
    children: <Input placeholder="Choose a username" />,
  },
};

/**
 * FormItem with both hint and error text.
 * Demonstrates how to show both helper text and error messages.
 */
export const WithHintAndError: Story = {
  args: {
    label: 'Email',
    elementId: 'email-element-id',
    hintText: 'We will never share your email',
    errorText: 'Please enter a valid email address',
    children: <Input placeholder="Enter your email" type="email" />,
  },
};

/**
 * FormItem with required field indicator.
 * Shows how to mark a field as required with a red asterisk.
 */
export const Required: Story = {
  args: {
    label: 'Email',
    elementId: 'email-required-element-id',
    hintText: 'This field is required',
    isRequired: true,
    children: <Input placeholder="Enter your email" type="email" />,
  },
};

/**
 * FormItem with a label slot.
 * Demonstrates how to add additional components to the right of the label.
 */
export const WithLabelSlot: Story = {
  args: {
    children: <Input />,
  },
  render: () => <FormItemWithLabelSlot />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithLabelSlot,
      },
    },
  },
};

/**
 * FormItem with both required indicator and label slot.
 * Shows how the required asterisk and label slot work together.
 */
export const RequiredWithLabelSlot: Story = {
  args: {
    children: <Input />,
  },
  render: () => <FormItemRequiredWithLabelSlot />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeRequiredWithLabelSlot,
      },
    },
  },
};

/* ------------------------------------------------------------------ *
 * Error-state gallery: pick a control and see how it renders inside a
 * FormItem with `errorText`. When FormItem has an error, it stamps
 * `data-error="true"` on its wrapper and the library CSS paints the
 * control's border in the destructive color. This story exercises every
 * control that supports that error border, so it also guards against a
 * control silently losing the treatment.
 * ------------------------------------------------------------------ */

const errorOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
];

type ErrorControlName =
  | 'input'
  | 'textarea'
  | 'select'
  | 'autocomplete'
  | 'combobox'
  | 'multiSelect'
  // | 'tagInput' // TagInput is not officially deployed yet
  | 'datePicker'
  | 'dateRangePicker';

const ERROR_CONTROL_LABELS: Record<ErrorControlName, string> = {
  input: 'Input',
  textarea: 'Textarea',
  select: 'Select',
  autocomplete: 'Autocomplete',
  combobox: 'Combobox',
  multiSelect: 'MultiSelect',
  // tagInput: 'TagInput', // TagInput is not officially deployed yet
  datePicker: 'DatePicker',
  dateRangePicker: 'DateRangePicker',
};

/** Renders the selected form control with its own local state. */
const ErrorControl = ({ control }: { control: ErrorControlName }) => {
  const [text, setText] = useState('');
  const [single, setSingle] = useState('');
  const [multi, setMulti] = useState<string[]>([]);
  // const [tags, setTags] = useState<{ id: string; text: string }[]>([]); // TagInput is not officially deployed yet
  const [date, setDate] = useState<Date | undefined>();
  const [range, setRange] = useState<{ from?: Date; to?: Date }>({});

  switch (control) {
    case 'input':
      return (
        <Input placeholder="Enter a value" value={text} onChange={e => setText(e.target.value)} />
      );
    case 'textarea':
      return (
        <Textarea
          placeholder="Enter a value"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      );
    case 'select':
      return <Select options={errorOptions} value={single} onChange={setSingle} />;
    case 'autocomplete':
      return (
        <Autocomplete
          getOptionLabel={o => o.label}
          getOptionValue={o => o.value}
          options={errorOptions}
          value={single}
          onChange={setSingle}
        />
      );
    case 'combobox':
      return <Combobox options={errorOptions} value={single} onChange={setSingle} />;
    case 'multiSelect':
      return <MultiSelect options={errorOptions} value={multi} onChange={setMulti} />;
    // TagInput is not officially deployed yet
    // case 'tagInput':
    //   return <TagInput value={tags} onChange={setTags} />;
    case 'datePicker':
      return <DatePicker value={date} onChange={setDate} />;
    case 'dateRangePicker':
      return <DateRangePicker value={range} onChange={setRange} />;
  }
};

/**
 * In-canvas playground: a Combobox picks the control, which then renders inside
 * a FormItem with an error so you can eyeball its destructive-colored border.
 */
const ErrorStatePlayground = () => {
  const [selected, setSelected] = useState<ErrorControlName>('autocomplete');

  const componentOptions = (Object.keys(ERROR_CONTROL_LABELS) as ErrorControlName[]).map(key => ({
    value: key,
    label: ERROR_CONTROL_LABELS[key],
  }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: 360 }}>
      <FormItem
        elementId="error-state-picker"
        hintText="Choose a control to preview its error state"
        label="Component"
      >
        <Combobox
          options={componentOptions}
          placeholder="Select a component..."
          value={selected}
          // Combobox clears when the current value is re-selected; keep the last
          // valid selection so a control is always shown.
          onChange={value => value && setSelected(value as ErrorControlName)}
        />
      </FormItem>

      <FormItem
        elementId={`error-state-${selected}`}
        errorText="This field is required"
        label={ERROR_CONTROL_LABELS[selected]}
      >
        <ErrorControl control={selected} />
      </FormItem>
    </div>
  );
};

/**
 * Pick a control from the in-canvas **Component** combobox to see how it looks
 * inside a FormItem with an error. Every control here should show a
 * destructive-colored border while the error is present.
 */
export const ErrorStateByControl: Story = {
  name: 'Error State (by control)',
  args: { children: <Input /> },
  parameters: { controls: { disable: true } },
  render: () => <ErrorStatePlayground />,
};
