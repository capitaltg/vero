import { FormItem } from '@/components/FormItem';
import { expectNoViolations } from '@/test/utils';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { Autocomplete } from './Autocomplete';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
];

const Fixture = ({ initialValue = '' }: { initialValue?: string }) => {
  const [value, setValue] = useState(initialValue);
  return (
    <Autocomplete
      getOptionLabel={o => o.label}
      getOptionValue={o => o.value}
      options={options}
      placeholder="Select a framework..."
      value={value}
      onChange={setValue}
    />
  );
};

describe('Autocomplete', () => {
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
  // `button[data-component="autocomplete"]`, so this attribute must remain
  // present for the red border to show inside a FormItem with errorText.
  it('renders a trigger with the data-component selector used for error styling', () => {
    const { container } = render(
      <FormItem elementId="framework" errorText="Required">
        <Fixture />
      </FormItem>,
    );

    expect(container.querySelector('[data-error="true"]')).not.toBeNull();
    expect(container.querySelector('button[data-component="autocomplete"]')).not.toBeNull();
  });

  // 508: the clear control must be a standalone, focusable button with an
  // accessible name — not an interactive element nested inside the trigger button
  // (nested interactive controls are an accessibility violation).
  describe('Clear button', () => {
    it('is not rendered when there is no value', () => {
      render(<Fixture />);
      expect(screen.queryByRole('button', { name: 'Clear' })).toBeNull();
    });

    it('renders as a standalone button, not nested inside the trigger', () => {
      const { container } = render(<Fixture initialValue="react" />);
      const clear = screen.getByRole('button', { name: 'Clear' });
      const trigger = container.querySelector('button[data-component="autocomplete"]');

      expect(clear).not.toBeNull();
      expect(trigger).not.toBeNull();
      // The clear button must live outside the trigger's DOM subtree.
      expect(trigger?.contains(clear)).toBe(false);
    });

    it('clears the selected value when clicked', async () => {
      const user = userEvent.setup();
      const { container } = render(<Fixture initialValue="react" />);
      const trigger = () => container.querySelector('button[data-component="autocomplete"]');

      expect(trigger()).toHaveTextContent('React');
      await user.click(screen.getByRole('button', { name: 'Clear' }));

      expect(trigger()).toHaveTextContent('Select a framework...');
      expect(screen.queryByRole('button', { name: 'Clear' })).toBeNull();
    });

    // 508: clearing removes the clear button from the DOM, so focus must be
    // returned to the trigger rather than falling to <body>.
    it('moves focus to the trigger when the value is cleared', async () => {
      const user = userEvent.setup();
      const { container } = render(<Fixture initialValue="react" />);
      const trigger = container.querySelector('button[data-component="autocomplete"]');

      await user.click(screen.getByRole('button', { name: 'Clear' }));

      await waitFor(() => expect(trigger).toHaveFocus());
    });
  });

  // 508: cmdk keeps the combobox aria-activedescendant in sync as the highlight
  // moves, but VoiceOver does not reliably speak activedescendant changes, so
  // the component mirrors the active option's label into a live region. States
  // with no option to speak (empty result set) and the final selection are
  // announced there too.
  describe('Screen reader announcements', () => {
    const openTrigger = async (user: ReturnType<typeof userEvent.setup>) => {
      await user.click(screen.getByRole('button', { name: /select a framework/i }));
    };

    const announced = (text: string) =>
      waitFor(() =>
        expect(screen.getAllByRole('status').some(node => node.textContent === text)).toBe(true),
      );

    it('announces the first (highlighted) option and its position when the list opens', async () => {
      const user = userEvent.setup();
      render(<Fixture />);
      await openTrigger(user);

      await announced('React, 1 of 3');
    });

    it('announces each option and its position as the highlight moves with the arrow keys', async () => {
      const user = userEvent.setup();
      render(<Fixture />);
      await openTrigger(user);
      await announced('React, 1 of 3');

      await user.keyboard('{ArrowDown}');
      await announced('Vue, 2 of 3');

      await user.keyboard('{ArrowDown}');
      await announced('Angular, 3 of 3');
    });

    it('announces the sole option when a search narrows to a single result', async () => {
      const user = userEvent.setup();
      render(<Fixture />);
      await openTrigger(user);
      await user.type(screen.getByPlaceholderText('Select a framework...'), 'ang');

      // Nothing to arrow to, but the lone option is auto-highlighted and read,
      // and the position conveys that it is the only result.
      await announced('Angular, 1 of 1');
    });

    it('announces when a search returns no results', async () => {
      const user = userEvent.setup();
      render(<Fixture />);
      await openTrigger(user);
      await user.type(screen.getByPlaceholderText('Select a framework...'), 'zzz');

      await announced('No results found');
    });

    it('announces the selected value after choosing an option', async () => {
      const user = userEvent.setup();
      render(<Fixture />);
      await openTrigger(user);
      await user.click(screen.getByRole('option', { name: /vue/i }));

      await announced('Vue selected');
    });
  });
});
