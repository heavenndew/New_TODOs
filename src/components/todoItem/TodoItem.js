import './TodoItem.css';

function TodoItem({ completed, text, onComplete, onDelete }) {

    return (
      <li className={`TodoItem ${completed && 'TodoItem--active'}`}>
        <span 
          className={`Icon Icon-check ${completed && 'Icon-check--active '}`}
          onClick={onComplete}
        >
          <i className="fa-sharp-duotone fa-solid fa-circle-check"></i>
        </span>
        
        <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
          {text}
        </p>
        
        <span 
          onClick={onDelete} 
          className="Icon Icon-delete">
          <i class="fa-solid fa-circle-xmark"></i>
        </span>
      </li>
    )

    
  }

  export { TodoItem }; 


  