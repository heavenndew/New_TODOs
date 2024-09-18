import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch.js';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import {CreateTodoButton} from './components/CreateTodoButton';

import './App.css';

function App() {
  return (
    <>

      <TodoCounter completed={18} total={23}/>
      <TodoSearch />


      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />

    </>
  );
}



export default App;
