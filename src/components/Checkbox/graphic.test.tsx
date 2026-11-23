import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CheckboxGraphic } from './graphic';

describe('CheckboxGraphic', () => {
  it('is hidden from assistive technology', () => {
    const { container } = render(<CheckboxGraphic checked />);
    expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true');
  });

  it('shows the check mark only when checked', () => {
    const { container, rerender } = render(<CheckboxGraphic checked />);
    expect(container.firstElementChild).toHaveAttribute('data-state', 'checked');
    expect(container.querySelector('svg')).toBeInTheDocument();

    rerender(<CheckboxGraphic checked={false} />);
    expect(container.firstElementChild).toHaveAttribute('data-state', 'unchecked');
    expect(container.querySelector('svg')).not.toBeInTheDocument();
  });

  it('merges a className', () => {
    const { container } = render(<CheckboxGraphic checked={false} className="mt-1" />);
    expect(container.firstElementChild).toHaveClass('mt-1');
  });
});
