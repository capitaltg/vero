import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FormItem } from './FormItem';

describe('FormItem', () => {
  it('sets aria-describedby to hintId when hintText is provided', () => {
    render(
      <FormItem elementId="test-input" hintText="Hint text" label="Label">
        <input id="test-input" />
      </FormItem>,
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-describedby', 'form-item-test-input-hint');
  });

  it('sets aria-describedby to errorId when errorText is provided', () => {
    render(
      <FormItem elementId="test-input" errorText="Error text" label="Label">
        <input id="test-input" />
      </FormItem>,
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-describedby', 'form-item-test-input-error');
  });

  it('includes both hint and error IDs when both are provided', () => {
    render(
      <FormItem elementId="test-input" errorText="Error text" hintText="Hint text" label="Label">
        <input id="test-input" />
      </FormItem>,
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute(
      'aria-describedby',
      'form-item-test-input-hint form-item-test-input-error',
    );
  });

  it('sets aria-invalid on the child when errorText is provided', () => {
    render(
      <FormItem elementId="test-input" errorText="Error text" label="Label">
        <input id="test-input" />
      </FormItem>,
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('does not set aria-invalid when errorText is not provided', () => {
    render(
      <FormItem elementId="test-input" hintText="Hint text" label="Label">
        <input id="test-input" />
      </FormItem>,
    );
    const input = screen.getByRole('textbox');
    expect(input).not.toHaveAttribute('aria-invalid');
  });

  it('does not set aria-describedby when neither hintText nor errorText is provided', () => {
    render(
      <FormItem elementId="test-input" label="Label">
        <input id="test-input" />
      </FormItem>,
    );
    const input = screen.getByRole('textbox');
    expect(input).not.toHaveAttribute('aria-describedby');
  });

  it('merges with existing aria-describedby on the child', () => {
    render(
      <FormItem elementId="test-input" hintText="Hint text" label="Label">
        <input aria-describedby="other-description" id="test-input" />
      </FormItem>,
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute(
      'aria-describedby',
      'form-item-test-input-hint other-description',
    );
  });

  it('hint element has the expected id', () => {
    render(
      <FormItem elementId="test-input" hintText="Hint text" label="Label">
        <input id="test-input" />
      </FormItem>,
    );
    expect(document.getElementById('form-item-test-input-hint')).toHaveTextContent('Hint text');
  });

  it('error element has the expected id', () => {
    render(
      <FormItem elementId="test-input" errorText="Error text" label="Label">
        <input id="test-input" />
      </FormItem>,
    );
    expect(document.getElementById('form-item-test-input-error')).toHaveTextContent('Error text');
  });

  it('hint element has a data-testid matching its id', () => {
    render(
      <FormItem elementId="test-input" hintText="Hint text" label="Label">
        <input id="test-input" />
      </FormItem>,
    );
    const hint = screen.getByTestId('form-item-test-input-hint');
    expect(hint).toHaveTextContent('Hint text');
  });

  it('error element has a data-testid matching its id', () => {
    render(
      <FormItem elementId="test-input" errorText="Error text" label="Label">
        <input id="test-input" />
      </FormItem>,
    );
    const error = screen.getByTestId('form-item-test-input-error');
    expect(error).toHaveTextContent('Error text');
  });

  it('throws when neither elementId nor child id is provided', () => {
    expect(() =>
      render(
        <FormItem label="Label">
          <input />
        </FormItem>,
      ),
    ).toThrow();
  });
});
