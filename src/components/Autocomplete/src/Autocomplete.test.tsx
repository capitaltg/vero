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

    // 508: with no associated label the trigger's accessible name falls back to
    // its content — the value plus a visually-hidden "selected" so a screen
    // reader conveys that the text is the current selection.
    it('exposes the value and "selected" in the trigger accessible name', () => {
      const { container } = render(<Fixture initialValue="react" />);
      const trigger = container.querySelector('button[data-component="autocomplete"]');
      expect(trigger).toHaveAccessibleName('React selected');
    });

    it('does not add "selected" to the trigger when nothing is chosen', () => {
      const { container } = render(<Fixture />);
      const trigger = container.querySelector('button[data-component="autocomplete"]');
      expect(trigger).toHaveAccessibleName('Select a framework...');
    });

    // When wrapped in a labeled FormItem, a native <label for> would otherwise
    // become the whole accessible name of the <button> and drop the value. The
    // trigger composes label + value + "selected" via aria-labelledby so a
    // screen reader reads back the field label AND the current selection.
    it('reads back the field label, the value, and "selected" when labeled', () => {
      const LabeledFixture = () => {
        const [value, setValue] = useState('react');
        return (
          <FormItem elementId="framework" label="Framework">
            <Autocomplete
              getOptionLabel={o => o.label}
              getOptionValue={o => o.value}
              id="framework"
              options={options}
              value={value}
              onChange={setValue}
            />
          </FormItem>
        );
      };
      render(<LabeledFixture />);
      const trigger = screen.getByRole('button', { name: 'Framework React selected' });
      expect(trigger).not.toBeNull();
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
  // the component mirrors announcements into a live region: the suggestion count
  // and how to browse when the list opens/changes, and the highlighted option as
  // the user arrows. The empty-result message and the final selection are
  // announced there too.
  describe('Screen reader announcements', () => {
    const openTrigger = async (user: ReturnType<typeof userEvent.setup>) => {
      await user.click(screen.getByRole('button', { name: /select a framework/i }));
    };

    const announced = (text: string) =>
      waitFor(() =>
        expect(screen.getAllByRole('status').some(node => node.textContent === text)).toBe(true),
      );

    it('announces the count, instructions, and first suggestion when the list opens', async () => {
      const user = userEvent.setup();
      render(<Fixture />);
      await openTrigger(user);

      await announced(
        'There are 3 suggestions, use the up and down arrow keys to browse. React, 1 of 3.',
      );
    });

    it('announces each option as it is highlighted with the arrow keys', async () => {
      const user = userEvent.setup();
      render(<Fixture />);
      await openTrigger(user);
      await announced(
        'There are 3 suggestions, use the up and down arrow keys to browse. React, 1 of 3.',
      );

      // The first arrow press lands on the first option (nothing is
      // pre-highlighted), so no option is skipped.
      await user.keyboard('{ArrowDown}');
      await announced('React, selected');

      await user.keyboard('{ArrowDown}');
      await announced('Vue, selected');

      await user.keyboard('{ArrowDown}');
      await announced('Angular, selected');
    });

    it('reads the sole suggestion (singular) when a search narrows to one result', async () => {
      const user = userEvent.setup();
      render(<Fixture />);
      await openTrigger(user);
      await user.type(screen.getByPlaceholderText('Select a framework...'), 'ang');

      // The single result's content is read even though the user has not arrowed.
      await announced(
        'There is 1 suggestion, use the up and down arrow keys to browse. Angular, 1 of 1.',
      );
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

    // 508: options are nested inside a role="group", so without an explicit
    // set size a screen reader announces "1 of 1" for every option. Each option
    // must carry its position and the total.
    it('gives each option an aria-posinset and aria-setsize for correct position', async () => {
      const user = userEvent.setup();
      render(<Fixture />);
      await openTrigger(user);

      const opts = await screen.findAllByRole('option');
      expect(opts).toHaveLength(3);
      opts.forEach((opt, i) => {
        expect(opt).toHaveAttribute('aria-setsize', '3');
        expect(opt).toHaveAttribute('aria-posinset', String(i + 1));
      });
    });

    // The active option is controlled so navigation can be announced; guard that
    // this did not break selecting an option by keyboard (arrow to it + Enter).
    it('selects the highlighted option when Enter is pressed', async () => {
      const user = userEvent.setup();
      const { container } = render(<Fixture />);
      const trigger = () => container.querySelector('button[data-component="autocomplete"]');

      await openTrigger(user);
      await user.keyboard('{ArrowDown}{ArrowDown}'); // React -> Vue
      await user.keyboard('{Enter}');

      await waitFor(() => expect(trigger()).toHaveTextContent('Vue'));
    });

    // 508 (audit #4): distinguish the committed selection from a merely
    // highlighted option, in both the announcement and the option's own name.
    it('announces the current selection when navigating onto the chosen option', async () => {
      const user = userEvent.setup();
      const { container } = render(<Fixture initialValue="vue" />);
      await user.click(container.querySelector('button[data-component="autocomplete"]')!);

      await user.keyboard('{ArrowDown}'); // React (not chosen)
      await announced('React, selected');
      await user.keyboard('{ArrowDown}'); // Vue (the chosen value)
      await announced('Vue, selected, current selection');
    });

    it('exposes the chosen option in the list to assistive tech', async () => {
      const user = userEvent.setup();
      const { container } = render(<Fixture initialValue="vue" />);
      await user.click(container.querySelector('button[data-component="autocomplete"]')!);

      expect(screen.getByRole('option', { name: 'Vue (current selection)' })).not.toBeNull();
      expect(screen.getByRole('option', { name: 'React' })).not.toBeNull();
    });
  });

  // 508 (audit #2, #3): combobox semantics on the trigger and a labeled search
  // field.
  describe('Combobox semantics', () => {
    it('marks the trigger as opening a listbox popup', () => {
      const { container } = render(<Fixture />);
      const trigger = container.querySelector('button[data-component="autocomplete"]');
      expect(trigger).toHaveAttribute('aria-haspopup', 'listbox');
    });

    it('opens the list when ArrowDown is pressed on the trigger', async () => {
      const user = userEvent.setup();
      const { container } = render(<Fixture />);
      const trigger = container.querySelector<HTMLButtonElement>(
        'button[data-component="autocomplete"]',
      )!;
      trigger.focus();

      expect(screen.queryByPlaceholderText('Select a framework...')).toBeNull();
      await user.keyboard('{ArrowDown}');
      await waitFor(() =>
        expect(screen.getByPlaceholderText('Select a framework...')).toBeInTheDocument(),
      );
    });

    it('gives the search input a programmatic label, not just a placeholder', async () => {
      const user = userEvent.setup();
      const { container } = render(<Fixture />);
      await user.click(container.querySelector('button[data-component="autocomplete"]')!);

      expect(screen.getByPlaceholderText('Select a framework...')).toHaveAccessibleName(
        'Select a framework...',
      );
    });
  });
});
