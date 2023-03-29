import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('reders the Counter component', () => {
    render(<App />);

    const counter = screen.queryByText('3 mere');
    expect(counter).not.toBeNull();
  });

  it('reders the TodoList component', () => {
    render(<App />);

    const counter = screen.queryByPlaceholderText('Add new todo');
    expect(counter).not.toBeNull();
  });
});
