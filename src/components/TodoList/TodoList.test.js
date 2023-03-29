import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from './TodoList';

describe('TodoList', () => {
  const setupComponent = initialTodos => {
    render(<TodoList initialTodos={initialTodos} />);
    const user = userEvent.setup();

    return { user };
  };

  it('adds a new todo', async () => {
    const { user } = setupComponent();

    const inputField = screen.getByPlaceholderText('Add new todo');
    const submitButton = screen.queryByText('Submit');

    expect(inputField).not.toBeNull();
    expect(submitButton).not.toBeNull();

    await user.type(inputField, 'ala');
    await user.click(submitButton);

    const todo = screen.queryByText('ala');
    expect(todo).not.toBeNull();
  });

  it('does not allow for todos with less than 3 chars to be added', async () => {
    const { user } = setupComponent();

    const inputField = screen.queryByPlaceholderText('Add new todo');
    const submitButton = screen.queryByText('Submit');

    await user.click(submitButton);

    let todo = screen.queryByTestId('todo_0');
    expect(todo).toBeNull();

    await user.type(inputField, '12');
    await user.click(submitButton);

    todo = screen.queryByTestId('todo_0');
    expect(todo).toBeNull();
  });

  it('completes todo', async () => {
    const { user } = setupComponent();

    const inputField = screen.queryByPlaceholderText('Add new todo');
    const submitButton = screen.queryByText('Submit');

    await user.type(inputField, 'ala');
    await user.click(submitButton);

    let todo = screen.queryByText('ala');
    await user.click(todo);

    todo = screen.queryByText('ala');
    expect(todo).toBeNull();
  });

  it('renders an initial list of todos', () => {
    setupComponent(['todo_2', 'todo_1']);

    const todo1 = screen.queryByText('todo_1');
    const todo2 = screen.queryByText('todo_2');

    expect(todo1).not.toBeNull();
    expect(todo2).not.toBeNull();
  });
});
