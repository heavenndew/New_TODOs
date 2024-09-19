import { TodoCounter } from './components/todoCounter/TodoCounter.js';
import { TodoSearch } from './components/todoSearch/TodoSearch.js';
import { TodoList } from './components/todoList/TodoList.js';
import { TodoItem } from './components/todoItem/TodoItem.js';
import {CreateTodoButton} from './components/createTodoButton/CreateTodoButton';

import './App.css';

function App() {
  return (
    <>

      <TodoCounter completed={18} total={23}/>
      <TodoSearch />


      <TodoList>
        <TodoItem completed={true} text="Todo 1"/>
        <TodoItem completed={false} text="Todo 2"/>
        <TodoItem completed={false} text="Todo 3"/>
      </TodoList>

      <CreateTodoButton />

    </>
  );
}



export default App;
