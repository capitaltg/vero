import { FormItem } from '@/components/FormItem';
import { expectNoViolations } from '@/test/utils';
import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { DateRangePicker } from './DateRangePicker';

const LabeledFixture = () => {
  const [value, setValue] = useState<{ from?: Date; to?: Date }>({
    from: new Date(2026, 0, 1),
    to: new Date(2026, 0, 5),
  });
  return (
    <FormItem elementId="range" label="Trip dates">
      <DateRangePicker id="range" value={value} onChange={setValue} />
    </FormItem>
  );
};

describe('DateRangePicker', () => {
  describe('Accessibility', () => {
    it('has no violations with a selected range', async () => {
      const { container } = render(<LabeledFixture />);
      expectNoViolations(await axe(container));
    });
  });

  // When wrapped in a labeled FormItem, the trigger's associated <label for> would
  // otherwise override its text content as the accessible name, so the selected range
  // would never be read back. The trigger composes label + value via aria-labelledby.
  describe('Accessible name', () => {
    it('reads back both the field label and the selected range', () => {
      render(<LabeledFixture />);
      const trigger = screen.getByRole('button', { name: /Trip dates/ });
      expect(trigger).toBe(screen.getByRole('button', { name: /January 01, 2026/ }));
      expect(trigger).toHaveAccessibleName(/January 05, 2026/);
    });

    it('falls back to the value when there is no associated label', () => {
      render(
        <DateRangePicker
          value={{ from: new Date(2026, 0, 1), to: new Date(2026, 0, 5) }}
          onChange={() => {}}
        />,
      );
      expect(screen.getByRole('button', { name: /January 01, 2026/ })).not.toBeNull();
    });
  });
});
