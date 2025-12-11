import { render, screen } from '@testing-library/react';
import { Select } from './Select';

describe('Select', () => {
  it('renders select with label and children', () => {
    render(
      <Select id="country" label="Country">
        <option value="pl">Poland</option>
        <option value="by">Belarus</option>
        <option value="de">Germany</option>
      </Select>,
    );

    const select = screen.getByLabelText(/country/i);
    expect(select).toBeInTheDocument();
    expect(select).toHaveClass('lib-select__native');

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(3);
    expect(options[0]).toHaveValue('pl');
    expect(options[1]).toHaveValue('by');
  });

  it('renders helperText', () => {
    render(
      <Select id="country" label="Country" helperText="Choose your country">
        <option value="pl">Poland</option>
      </Select>,
    );

    expect(screen.getByText(/choose your country/i)).toBeInTheDocument();
  });

  it('applies error class', () => {
    const { container } = render(
      <Select id="country" label="Country" error>
        <option value="pl">Poland</option>
      </Select>,
    );

    const root = container.querySelector('.lib-select');
    expect(root).toHaveClass('lib-select--error');
  });

  it('applies custom className', () => {
    const { container } = render(
      <Select id="country" label="Country" className="my-custom-select">
        <option value="pl">Poland</option>
      </Select>,
    );

    const root = container.querySelector('.lib-select');
    expect(root).toHaveClass('lib-select');
    expect(root).toHaveClass('my-custom-select');
  });

  it('sets id on select and htmlFor on label', () => {
    const { container } = render(
      <Select id="country-select" label="Country">
        <option value="pl">Poland</option>
      </Select>,
    );

    const select = screen.getByLabelText(/country/i);
    expect(select).toHaveAttribute('id', 'country-select');

    const label = container.querySelector('.lib-select__label');
    expect(label).toHaveAttribute('for', 'country-select');
  });

  it('correct required prop', () => {
    const { container } = render(
      <Select id="country" label="Country" required>
        <option value="pl">Poland</option>
      </Select>,
    );

    const select = screen.getByLabelText(/country/i);
    expect(select).toBeRequired();

    const label = container.querySelector('.lib-select__label');
    expect(label).toHaveAttribute('data-required', 'true');
  });

  it('renders arrow when not multiple', () => {
    const { container } = render(
      <Select id="country" label="Country">
        <option value="pl">Poland</option>
      </Select>,
    );

    const arrow = container.querySelector('.lib-select__arrow');
    expect(arrow).toBeInTheDocument();
  });

  it('does not render arrow when multiple', () => {
    const { container } = render(
      <Select id="country" label="Country" multiple>
        <option value="pl">Poland</option>
        <option value="de">Germany</option>
      </Select>,
    );

    const arrow = container.querySelector('.lib-select__arrow');
    expect(arrow).toBeNull();

    const select = screen.getByLabelText(/country/i);
    expect(select).toHaveAttribute('multiple');
  });

  it('applies rest props', () => {
    render(
      <Select id="country" label="Country" aria-label="country-select">
        <option value="pl">Poland</option>
      </Select>,
    );

    const select = screen.getByLabelText(/country/i);
    expect(select).toHaveAttribute('aria-label', 'country-select');
  });
});
