import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState("hola");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };



  return (
    <div>
      <input
        value={searchValue}
        className="TodoSearch"
        placeholder="buscar tareas..."
        onChange={handleChange}
      />

      <p>{searchValue}</p>
    </div>
  );
}

export { TodoSearch };
