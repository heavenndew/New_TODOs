import { CreateTodoButton } from "../CreateTodoButton";

export function newTodo() {
    return (
        <div className="newTodoContainer"> 
            <CreateTodoButton /> 
        </div>
    );
}