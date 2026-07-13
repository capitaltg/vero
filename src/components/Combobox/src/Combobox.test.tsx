import { FormItem } from '@/components/FormItem';
import { expectNoViolations } from '@/test/utils';
import { render } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { Combobox } from './Combobox';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
];

const Fixture = ({ initialValue = '' }: { initialValue?: string }) => {
  const [value, setValue] = useState(initialValue);
  return (
    <Combobox
      options={options}
      placeholder="Select a framework..."
      value={value}
      onChange={setValue}
    />
  );
};

describe('Combobox', () => {
  describe('Accessibility', () => {
    it('has no violations when empty', async () => {
      const { container } = render(<Fixture />);
      const results = await axe(container);
      expectNoViolations(results);
    });

    it('has no violations when a value is selected', async () => {
      const { container } = render(<Fixture initialValue="react" />);
      const results = await axe(container);
      expectNoViolations(results);
    });
  });

  // The error-border styling in components.css targets the trigger via
  // `button[data-component="combobox"]`, so this attribute must remain
  // present for the red border to show inside a FormItem with errorText.
  it('renders a trigger with the data-component selector used for error styling', () => {
    const { container } = render(
      <FormItem elementId="framework" errorText="Required">
        <Fixture />
      </FormItem>,
    );

    expect(container.querySelector('[data-error="true"]')).not.toBeNull();
    expect(container.querySelector('button[data-component="combobox"]')).not.toBeNull();
  });
});
