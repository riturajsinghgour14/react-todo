import React from 'react'

function Listitem({theme,todo,deleteTodo}) {
  return (
    <li className={theme ? "list-group-item rounded-0 bg-secondary text-light" : "list-group-item rounded-0"}
    >
      {todo.text}
            <span className="float-end">
                <button className="btn mx-1 btn-warning btn-sm rounded-0">End</button>
                <button className="btn mx-1 btn-danger btn-sm rounded-0" 
                onClick={() => deleteTodo(todo.id)} >
                  Delete</button>
            </span>
        </li>
  )
}

export default Listitem;
