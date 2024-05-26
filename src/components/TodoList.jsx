// TodoList.js
import React from 'react';
import {useTodoContext} from "../contexts/TodoContext"

const TodoList = () => {
  const { todos, deleteTodo, toggleTodo, editTodo } = useTodoContext();

  const handleEdit = (id, title) => {
    const newTitle = prompt('Edit Todo', title);
    if (newTitle && newTitle.trim() !== '') {
      editTodo(id, newTitle.trim());
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</span>
            <button onClick={() => handleEdit(todo.id, todo.title)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
