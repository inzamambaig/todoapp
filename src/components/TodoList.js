import React from "react";
import Todo from "./Todo";

import { List } from "@material-ui/core";
function TodoList({ todos, isComplete, removeTodo }) {
  return (
    <List>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          isComplete={isComplete}
          removeTodo={removeTodo}
        />
      ))}
    </List>
  );
}

export default TodoList;
