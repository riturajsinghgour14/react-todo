import React from 'react'
import Listitem from './Listitem';

function ListGroup ({theme,todos,deleteTodo})  {
 
   if(todos.length === 0){
    return (
        <h1 className="display-4 text-secondary text-center">No Todos Yet </h1>
    )
   }

  return (
    <ul className="my-3 list-group">
       {
        todos.map((todo) => {
          return<Listitem key={todo.id} theme={theme} todo={todo} deleteTodo={deleteTodo}/>
        })
       }
    </ul>
  )
}

export default ListGroup;
