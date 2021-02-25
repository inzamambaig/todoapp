import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Button, TextField } from "@material-ui/core";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTodoInput(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  }
  return (
    <form className="todo">
      <TextField
        label="Todo"
        type="text"
        value={todo.task}
        onChange={handleTodoInput}
      />
      <Button onClick={handleSubmit}>Add Todo</Button>
    </form>
  );
}

export default TodoForm;
