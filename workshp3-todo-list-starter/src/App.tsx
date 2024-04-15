import "./index.css";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import Todo from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function getTodo() {
      const response = await fetch("http://localhost:9000/todos");
      const data = await response.json();
      setTodos(data);
    }
    getTodo();
  }, []);

  const deleteTodoById = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodoList = (todo: Todo) => {
    setTodos([...todos, todo]);
  };
  const updateTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  const updateTodos = () => {
    setTodos(
      todos.map((todo) => (todos ? { ...todo, done: !todo.done } : todo))
    );
  };
  const deleteAllFinishedTasks = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header onAddTodoList={addTodoList} />
        <List
          todos={todos}
          onDeleteTodoById={deleteTodoById}
          onUpdateTodo={updateTodo}
        />
        <Footer
          todos={todos}
          onUpdateTodos={updateTodos}
          onDeleteAllFinishedTasks={deleteAllFinishedTasks}
        />
      </div>
    </div>
  );
}

export default App;
