import React, { createContext, useState, useEffect, useContext } from 'react';

const TodoContext = createContext();


const TodoProvider = ({ children }) => {

  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : [] ;
    
  });

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title:title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTodo = (id, title) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, title } : todo
    ));
  };
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleTodo, editTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodoContext = () => {
  const context = useContext(TodoContext);
  return context;
};

export { TodoProvider, useTodoContext };
