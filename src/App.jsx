// App.js
import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { TodoProvider } from './contexts/TodoContext';

import '../src/Styles.css'

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <div className="todo-container">
          <h1>TODO APP </h1>
          <AddTodo />
          <TodoList />
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
