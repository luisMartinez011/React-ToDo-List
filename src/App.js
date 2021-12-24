import "./App.css";
import React from "react";
import { TodoCounter } from "./components/todo_counter/todoCounter.js";
import { TodoSearch } from "./components/todo_search/TodoSearch.js";
import { TodoList } from "./components/todo_list/TodoList";
import { TodoItem } from "./components/todo_item/TodoItem";

const todos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el cursso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "LALALALAA", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter></TodoCounter>
      <TodoSearch></TodoSearch>
      <TodoList>
      {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
    </React.Fragment>
  );
}

export default App;
