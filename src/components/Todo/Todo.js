import React, { useState } from "react";
import { ListGroupItem } from "reactstrap";
import { Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./Todo.css";
import { useTodo } from "../../contexts/TodoContext";

function Todo({ children, index }) {
  const [completed, setCompleted] = useState(false);
  const todos = useTodo();

  const style = {
    textDecoration: completed ? "line-through" : "none",
    color: completed ? "rgb(132, 132, 132)" : "inherit",
  };

  const toggle = () => {
    setCompleted(!completed);
    todos.toggleTodo(index);
  };

  const removeTodo = () => {
    todos.removeTodo(index);
  };

  return (
    <ListGroupItem style={style} className="todo">
      <div>
        <Input type="checkbox" onChange={toggle} {...{checked: todos.todos.filter((todo) => todo.id === index)[0].completed}}/>
        {children}
      </div>
      <button onClick={removeTodo}>
        <FontAwesomeIcon icon={faTimes} size="xs" color="#ccc" />
      </button>
    </ListGroupItem>
  );
}

export default Todo;
