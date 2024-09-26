// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, setEditTodo }) {
  return (
    <div className="todo-list-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            setEditTodo={setEditTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;