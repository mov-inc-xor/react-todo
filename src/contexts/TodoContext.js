import React, { useContext, useState } from "react";

const TodoContext = React.createContext();

function useTodo() {
  return useContext(TodoContext);
}

const Todo = (function () {
  let nextId = 0;

  return function (text) {
    return { id: nextId++, text: text, completed: false };
  };
})();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const [filterBy, setFilterBy] = useState({
    predicate: (_) => true
  });

  const addTodo = (text) => {
    setTodos(todos.concat([new Todo(text)]));
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === index) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeTodo = (index) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== index;
      })
    );
  };

  const clearCompleted = () => {
    setTodos(
      todos.filter((todo) => {
        return !todo.completed;
      })
    );
  }

  return (
    <TodoContext.Provider
      value={{
        setFilterBy: setFilterBy,
        filterBy: filterBy,
        todos: todos,
        addTodo: addTodo,
        toggleTodo: toggleTodo,
        removeTodo: removeTodo,
        clearCompleted: clearCompleted
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { useTodo, TodoProvider };
