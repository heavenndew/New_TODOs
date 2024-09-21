import './TodoItem.css';

function TodoItem({ completed, text }) {
  console.log(completed, text, "props");
    return (
      <li className="TodoItem">
        <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>
          V
        </span>
        <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
          {text}
        </p>
        
        <span className="Icon Icon-delete">
          X
        </span>
      </li>
    )

    
  }

  export { TodoItem }; 


  