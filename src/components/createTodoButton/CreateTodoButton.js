import "./CreateTodoButton.css";
import { newTodo } from "./createNewTodo/NewTodo.js";

function CreateTodoButton({handleClick}) {
  //manejar evento de click
  

  return (
    <button className="CreateTodoButton" onClick={handleClick}>
      +
    </button>
  );
}

export { CreateTodoButton };
