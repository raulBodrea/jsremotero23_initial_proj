import "./App.css";
import ClickCounter from "./components/ClickCounter/ClickCounter";
import Counter from "./components/Counter/Counter";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Counter descriptor="mere" initialCount={3} />
      <TodoList initialTodos={["asd", "asdf"]} />
      <ClickCounter />
    </div>
  );
}

export default App;
