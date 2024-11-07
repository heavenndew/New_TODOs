// import { useEffect, useState } from 'react';
// import './TodoList.css';

// function TodoList(props) {


//     // estoy creando un estado para almacenar el nombre del usuario.//
//     const [userName, setUserName] = useState("");

//     //es como una carpeta que guarda datos en local storage, cuando se hace click en el boton.//
//     const handleSave = () => {
//         localStorage.setItem('cajon2', "medias");
//     }

//     //useEffect es como un escuchador de eventos que se ejecuta cuando el componente se monta o se actualiza.

//     useEffect(() => {
      
//         const nombreDesdeLocalStorage = localStorage.getItem('cajon2');
//         if (nombreDesdeLocalStorage) {
//             setUserName(nombreDesdeLocalStorage);
//         }
//         console.log("esto es lo que tengo guardado desde local storage: ", nombreDesdeLocalStorage);
        

//     }, []);



//     return (
//         <div>
//             <ul>
//             {props.children }
//             </ul>
//             <button onClick={handleSave}>guardar TODO

//             </button>
//             <p>{userName}</p>
//         </div>
        
        
//     );
// }

// export { TodoList }; 


import { useEffect, useState } from 'react';
import './TodoList.css';

function TodoList(props) {

    // Estado para almacenar el nombre del usuario.
    const [userName, setUserName] = useState("");

    // Guardar datos en local storage cuando se hace clic en el botón "Guardar".
    const handleSave = () => {
        localStorage.setItem('cajon2', "medias");
    }

    // Función para eliminar el valor de local storage y el estado de userName.
    const handleRemove = () => {
        localStorage.removeItem('cajon2');
        setUserName("");
    }

    // useEffect para cargar el valor desde local storage cuando el componente se monta.
    useEffect(() => {
        const nombreDesdeLocalStorage = localStorage.getItem('cajon2');
        if (nombreDesdeLocalStorage) {
            setUserName(nombreDesdeLocalStorage);
        }
        console.log("esto es lo que tengo guardado desde local storage: ", nombreDesdeLocalStorage);
    }, []);

    return (
        <div>
            <ul>
                {props.children}
            </ul>
            <button onClick={handleSave}>Guardar TODO</button>
            <button onClick={handleRemove}>Eliminar Usuario</button>
            <p>{userName}</p>
        </div>
    );
}

export { TodoList };
