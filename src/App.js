import React, { useState } from "react";
import { TodoCounter } from "./components/todoCounter/TodoCounter.js";
import { TodoSearch } from "./components/todoSearch/TodoSearch.js";
import { TodoList } from "./components/todoList/TodoList.js";
import { TodoItem } from "./components/todoItem/TodoItem.js";
import { CreateTodoButton } from "./components/createTodoButton/CreateTodoButton";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Cortar cebolla",
      completed: false,
    },
    {
      text: "Tomar el sol",
      completed: true,
    },
  ]);
  const [searchValue, setSearchValue] = useState("");

  // const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = 0;

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <>
      {/* <TodoCounter completed={completedTodos} total={23} /> */}
      <TodoSearch
        searchValue={searchValue}
        handleChange={handleChange}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {todos?.map((todo, index) => (
          <TodoItem key={index} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
