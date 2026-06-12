import { expectNoViolations } from '@/test/utils';
import { render } from '@testing-library/react';
import { useState } from 'react';
import { describe, it } from 'vitest';
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
});
