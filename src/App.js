import React, { useState } from "react";
import { TodoCounter } from './components/todoCounter/TodoCounter.js';
import { TodoSearch } from './components/todoSearch/TodoSearch.js';
import { TodoList } from './components/todoList/TodoList.js';
import { TodoItem } from './components/todoItem/TodoItem.js';
import { CreateTodoButton } from './components/createTodoButton/CreateTodoButton';

import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <>
      <TodoCounter completed={18} total={23} />
      <TodoSearch
        searchValue={searchValue} handleChange={handleChange}
        setSearchValue={setSearchValue} />
      <TodoList>
        <TodoItem completed={true} text="Todo 1" />
        <TodoItem completed={false} text="Todo 2" />
        <TodoItem completed={false} text="Todo 3" />
      </TodoList>

      <CreateTodoButton />







    </>
  );
}



export default App;
