import './App.css';
import Counter from './components/Counter/Counter';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <Counter descriptor="mere" initialCount={3} />
      <TodoList initialTodos={['asd', 'asdf']} />
    </div>
  );
}

export default App;
