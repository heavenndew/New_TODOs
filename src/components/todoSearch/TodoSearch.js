// import React from "react";
import "./TodoSearch.css";

function TodoSearch(
  {searchValue,
  handleChange}
) {
  return (
    <div>
      <input
        value={searchValue}
        className="TodoSearch"
        placeholder="buscar tareas..."
        onChange={handleChange}
      />

      
    </div>
  );
}

export { TodoSearch };
