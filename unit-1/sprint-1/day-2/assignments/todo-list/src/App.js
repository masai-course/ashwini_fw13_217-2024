// src/App.js
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  // Add Todo
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Edit Todo
  const updateTodo = (id, updatedTask) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task: updatedTask } : todo))
    );
    setEditTodo(null); // Reset the edit state
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} editTodo={editTodo} updateTodo={updateTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} setEditTodo={setEditTodo} />
    </div>
  );
}

export default App;