import React from "react";
import { TodoItem } from "../todo_item/TodoItem";

export function TodoList(par) {
  return (
    <section>
      <ul>{par.children}</ul>
    </section>
  );
}
