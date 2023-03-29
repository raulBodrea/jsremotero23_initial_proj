import { useState } from 'react';

const TodoList = ({ initialTodos = [] }) => {
  const [newTodo, setNewTodo] = useState('');
  const [currentTodos, setCurrentTodos] = useState(initialTodos);

  const addTodo = () => {
    if (newTodo.length < 3) {
      return;
    }

    setCurrentTodos([...currentTodos, newTodo]);
    setNewTodo('');
  };

  const completeTodo = index => {
    const newTodos = currentTodos.filter((_, idx) => index !== idx);
    setCurrentTodos(newTodos);
  };

  return (
    <div>
      <input
        placeholder="Add new todo"
        type="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Submit</button>
      <ul>
        {currentTodos.map((todo, index) => (
          <li
            key={todo}
            onClick={() => completeTodo(index)}
            data-testid={`todo_${index}`}
          >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
