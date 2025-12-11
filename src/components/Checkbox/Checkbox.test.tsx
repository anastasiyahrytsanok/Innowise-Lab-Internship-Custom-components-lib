import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('correct label', () => {
    render(<Checkbox id="terms" label="Accept terms" />);

    expect(screen.queryByText(/accept terms/i)).toBeInTheDocument();
  });

  it('label is absent', () => {
    render(<Checkbox id="terms" />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();

    expect(screen.queryByText(/accept terms/i)).toBeNull();
  });

  it('correct error prop', () => {
    const { container } = render(<Checkbox id="terms" label="Accept terms" error />);

    const root = container.querySelector('.lib-checkbox');
    expect(root).toHaveClass('lib-checkbox--error');
  });

  it('correct disabled prop', () => {
    const { container } = render(<Checkbox id="terms" label="Accept terms" disabled />);

    const root = container.querySelector('.lib-checkbox');
    const checkbox = screen.getByRole('checkbox');

    expect(root).toHaveClass('lib-checkbox--disabled');
    expect(checkbox).toBeDisabled();
  });

  it('correct required prop', () => {
    const { container } = render(<Checkbox id="terms" label="Accept terms" required />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeRequired();

    const labelText = container.querySelector('.lib-checkbox__text');
    expect(labelText).toHaveAttribute('data-required', 'true');
  });

  it('applies custom className', () => {
    const { container } = render(
      <Checkbox id="terms" label="Accept terms" className="my-custom-checkbox" />,
    );

    const root = container.querySelector('.lib-checkbox');
    expect(root).toHaveClass('lib-checkbox');
    expect(root).toHaveClass('my-custom-checkbox');
  });

  it('applies rest props', () => {
    render(<Checkbox id="terms" label="Accept terms" aria-label="terms checkbox" />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toHaveAttribute('aria-label', 'terms checkbox');
  });

  it('toggles checkbox on click', async () => {
    const user = userEvent.setup();

    render(<Checkbox id="terms" label="Accept terms" />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it('calls onChange on click', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Checkbox id="terms" label="Accept terms" onChange={handleChange} />);

    const checkbox = screen.getByRole('checkbox');

    await user.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
