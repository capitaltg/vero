import { FormItem } from '@/components/FormItem';
import { expectNoViolations } from '@/test/utils';
import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { DatePicker } from './DatePicker';

const LabeledFixture = () => {
  const [value, setValue] = useState<Date | undefined>(new Date(2026, 0, 15));
  return (
    <FormItem elementId="start" label="Start date">
      <DatePicker id="start" value={value} onChange={setValue} />
    </FormItem>
  );
};

describe('DatePicker', () => {
  describe('Accessibility', () => {
    it('has no violations with a selected date', async () => {
      const { container } = render(<LabeledFixture />);
      expectNoViolations(await axe(container));
    });
  });

  // When wrapped in a labeled FormItem, the trigger's associated <label for> would
  // otherwise override its text content as the accessible name, so the selected date
  // would never be read back. The trigger composes label + value via aria-labelledby.
  describe('Accessible name', () => {
    it('reads back both the field label and the selected date', () => {
      render(<LabeledFixture />);
      const trigger = screen.getByRole('button', { name: /Start date/ });
      expect(trigger).toBe(screen.getByRole('button', { name: /January 15, 2026/ }));
    });

    it('falls back to the value when there is no associated label', () => {
      render(<DatePicker value={new Date(2026, 0, 15)} onChange={() => {}} />);
      expect(screen.getByRole('button', { name: /January 15, 2026/ })).not.toBeNull();
    });
  });
});
