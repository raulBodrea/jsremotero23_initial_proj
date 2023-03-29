import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter', () => {
  const setupComponent = (descriptor, initialCount) => {
    const user = userEvent.setup();
    render(<Counter descriptor={descriptor} initialCount={initialCount} />);

    return { user };
  };

  it('displays a functional + button', async () => {
    const { user } = setupComponent();

    let currentCount = screen.getByText('0');
    expect(currentCount).not.toBeNull();

    const plusButton = screen.getByText('+');
    await user.click(plusButton);
    currentCount = screen.getByText('1');
    expect(currentCount).not.toBeNull();
  });

  it('displays a functional - button', async () => {
    const { user } = setupComponent();

    const minusButton = screen.getByText('-');
    await user.click(minusButton);
    const currentCount = screen.getByText('-1');
    expect(currentCount).not.toBeNull();
  });

  it('displays a descriptor besides the count', () => {
    setupComponent('pastile', 5);

    const counter = screen.getByText('5 pastile');
    expect(counter).not.toBeNull();
  });
});
