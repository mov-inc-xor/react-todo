import React from "react";
import { ListGroup } from "reactstrap";
import { useTodo } from "../contexts/TodoContext";
import Todo from "./Todo/Todo";

function TodoItems() {
  const todos = useTodo();

  return todos.todos.filter(todos.filterBy.predicate).map((todo) => {
    return (
      <Todo key={todo.id} index={todo.id}>
        {todo.text}
      </Todo>
    );
  });
}

function TodoList() {
  const style = {
    marginBottom: "20px",
  };

  return (
    <ListGroup style={style}>
      <TodoItems />
    </ListGroup>
  );
}

export default TodoList;
