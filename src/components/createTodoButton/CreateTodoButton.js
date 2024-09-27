import "./CreateTodoButton.css";

function CreateTodoButton() {
  //manejar evento de click
  const handleClick = (event) => {
    console.log("click");
    console.log(event);
    console.log(event.target);
  };

  return (
    <button className="CreateTodoButton" onClick={handleClick}>
      +
    </button>
  );
}

export { CreateTodoButton };
