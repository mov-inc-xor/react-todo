import { React, useState } from "react";
import { Button, ButtonGroup, Badge } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "./TodoControl.css";
import { useTodo } from "../../contexts/TodoContext";

function RadioButton({ children, index, state, filter }) {
  const [selected, setSelected] = state;

  const todos = useTodo();

  const applyFilter = () => {
    setSelected(index);
    todos.setFilterBy({
      predicate: filter,
    });
  };

  return (
    <Button
      outline
      size="sm"
      color="primary"
      onClick={applyFilter}
      active={selected === index}
    >
      <small>{children}</small>
    </Button>
  );
}

function TodoControl() {
  const [TODO_FILTER, COMPLETED_FILTER, ALL_FILTER] = [
    (todo) => !todo.completed,
    (todo) => todo.completed,
    (_) => true,
  ];

  const todos = useTodo();

  const selectedRadioState = useState(2);

  const countByFilter = (filter) => {
    return todos.todos.filter(filter).length;
  };

  return (
    <div className="todo-control-container">
      <Button outline size="sm" onClick={todos.clearCompleted}>
        <FontAwesomeIcon
          icon={faTrash}
          size="xs"
          onClick={() => console.log("preess")}
        />
        &nbsp;
        <small>Clear completed</small>
      </Button>

      <div>
        <ButtonGroup>
          <RadioButton
            index={0}
            state={selectedRadioState}
            filter={TODO_FILTER}
          >
            To do <Badge color="light">{countByFilter(TODO_FILTER)}</Badge>
          </RadioButton>

          <RadioButton
            index={1}
            state={selectedRadioState}
            filter={COMPLETED_FILTER}
          >
            Completed <Badge color="light">{countByFilter(COMPLETED_FILTER)}</Badge>
          </RadioButton>

          <RadioButton index={2} state={selectedRadioState} filter={ALL_FILTER}>
            All <Badge color="light">{countByFilter(ALL_FILTER)}</Badge>
          </RadioButton>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default TodoControl;
