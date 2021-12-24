import React from 'react';
import "./TodoItem.css";

export function TodoItem(par) {
    
    return (
        <li>
            <span>{par.completed.toString()}</span>
            <p>{par.text} </p>
            <button>Eliminar</button>
        </li>
    )
}
