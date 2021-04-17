import React from 'react'

function ToDo({ todo , onDelete}) {
    return (
        <div className="container my-3">
            <h4>{todo.title}</h4>
            <p>{todo.description}</p>
            <button className="btn btn-sm btn-danger" onClick={() => {onDelete(todo)}}>Delete</button><hr/>
        </div>
    )
}

export default ToDo;
