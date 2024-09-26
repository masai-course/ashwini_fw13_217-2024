// src/components/TodoItem.js
import React from 'react';

function TodoItem({ todo, deleteTodo, setEditTodo }) {
  return (
    <li className="todo-item">
      <span>{todo.task}</span>
      <div>
        <button onClick={() => setEditTodo(todo)}>Edit</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;