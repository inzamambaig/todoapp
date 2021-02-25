import React from "react";

import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

function Todo({ todo, isComplete, removeTodo }) {
  function handleCompleteCheck() {
    isComplete(todo.id);
  }

  function handleRemoveCheck() {
    removeTodo(todo.id);
  }
  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox checked={todo.completed} onClick={handleCompleteCheck} />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </Typography>
      <IconButton onClick={handleRemoveCheck}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}

export default Todo;
