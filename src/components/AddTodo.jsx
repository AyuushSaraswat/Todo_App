// AddTodo.js
import React, { useState } from 'react';
import { useTodoContext } from '../contexts/TodoContext';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const { addTodo } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    addTodo(title);
    setTitle('');
  };

  return (
    <div>
      <h2>Add Todo</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo title"
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
