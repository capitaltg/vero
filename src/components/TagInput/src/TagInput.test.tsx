import { FormItem } from '@/components/FormItem';
import { expectNoViolations } from '@/test/utils';
import { render } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { TagInput } from './TagInput';
import { Tag } from '../types';

const Fixture = ({ initialValue = [] }: { initialValue?: Tag[] }) => {
  const [value, setValue] = useState<Tag[]>(initialValue);
  return <TagInput placeholder="Add tags..." value={value} onChange={setValue} />;
};

describe('TagInput', () => {
  describe('Accessibility', () => {
    it('has no violations when empty', async () => {
      const { container } = render(
        <FormItem elementId="tags" label="Tags">
          <Fixture />
        </FormItem>,
      );
      const results = await axe(container);
      expectNoViolations(results);
    });
  });

  // The error-border styling in components.css targets the bordered wrapper
  // via `[data-component="tag-input"]`, so this attribute must remain present
  // for the red border to show inside a FormItem with errorText.
  it('renders a wrapper with the data-component selector used for error styling', () => {
    const { container } = render(
      <FormItem elementId="tags" errorText="Required">
        <Fixture />
      </FormItem>,
    );

    expect(container.querySelector('[data-error="true"]')).not.toBeNull();
    expect(container.querySelector('[data-component="tag-input"]')).not.toBeNull();
  });
});
