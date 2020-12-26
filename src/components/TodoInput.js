import React, { useState } from "react";
import { Input, InputGroup, InputGroupAddon, Button } from "reactstrap";
import { useTodo } from "../contexts/TodoContext";

function TodoInput({ placeholder }) {
  const [input, setInput] = useState('');

  const style = {
    marginBottom: '20px'
  }

  const todos = useTodo();

  const addTodo = () => {
    let trimmed = input.trim();
    setInput('');
    if (trimmed !== '') {
      todos.addTodo(trimmed);
    }
  }

  const enterHandler = (event) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  }

  return (
    <InputGroup style={style}>
      <Input placeholder="What?" onChange={(event) => {setInput(event.target.value)}} value={input} onKeyDown={enterHandler}/>
      <InputGroupAddon addonType="append">
        <Button color='primary' onClick={addTodo}>Add</Button>
      </InputGroupAddon>
    </InputGroup>
  );
}

export default TodoInput;
