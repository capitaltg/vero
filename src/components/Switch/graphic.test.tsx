import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SwitchGraphic } from './graphic';

describe('SwitchGraphic', () => {
  it('is hidden from assistive technology', () => {
    const { container } = render(<SwitchGraphic checked />);
    expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true');
  });

  it('sets the state on the track and the thumb', () => {
    const { container, rerender } = render(<SwitchGraphic checked />);
    const track = container.firstElementChild!;
    expect(track).toHaveAttribute('data-state', 'checked');
    expect(track.firstElementChild).toHaveAttribute('data-state', 'checked');

    rerender(<SwitchGraphic checked={false} />);
    expect(track).toHaveAttribute('data-state', 'unchecked');
    expect(track.firstElementChild).toHaveAttribute('data-state', 'unchecked');
  });

  it('merges a className', () => {
    const { container } = render(<SwitchGraphic checked className="ml-auto" />);
    expect(container.firstElementChild).toHaveClass('ml-auto');
  });
});
