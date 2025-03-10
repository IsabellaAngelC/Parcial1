import React from "react";
import UserItem from './UserItem'

export default function Form (){

    const handleClick = () => {
        setCount(user + 1);
    }

    return (
    <>
    <h2>¿Agregar o editar ususario?</h2>

    <input placeholder="Agregue un usuario"></input>
    <button onClick={handleClick}>Agregar</button>

    <button>Editar un usuario</button>


    </>
    )
}

 