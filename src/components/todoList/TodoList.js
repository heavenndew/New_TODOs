import { useEffect, useState } from 'react';
import './TodoList.css';

function TodoList(props) {


    // estoy creando un estado para almacenar el nombre del usuario.//
    const [userName, setUserName] = useState("");

    //es como una carpeta que guarda datos en local storage, cuando se hace click en el boton.//
    const handleSave = () => {
        localStorage.setItem('name', "cielo");
    }

    //useEffect es como un escuchador de eventos que se ejecuta cuando el componente se monta o se actualiza.

    useEffect(() => {
        // setUserName(localStorage.getItem('name'));
        const nombreDesdeLocalStorage = localStorage.getItem('name');
        if (nombreDesdeLocalStorage) {
            setUserName(nombreDesdeLocalStorage);
        }

        console.log("esto es lo que tengo guardado desde local storage: ", nombreDesdeLocalStorage);
    }, []);

    return (
        <div>
            <ul>
            {props.children }
            </ul>
            <button onClick={handleSave}>guardar TODO

            </button>
            <p>{userName}</p>
        </div>
        
        
    );
}

export { TodoList }; 