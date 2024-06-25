import { useState } from "react";
import Form from "./component/Form";
import ListGroup from "./component/ListGroup";
import Navbar from "./component/Navbar";

const App = () => {
// let theme = true;
const [theme,setTheme]=useState(true)
 
 const changeTheme = () => {
  if (theme){
    // theme = false;
    setTheme(false);
  }
  else{
    // theme = true;
    setTheme(true);
  }
  console.log(theme);
 };
  
const [todos, setTodos] = useState([
  // { id : 1, text : "Task One"},
  // { id : 2, text : "Task Two"},
  // { id : 3, text : "Task Three"},
  // { id : 4, text : "Task Four"},
]);

const saveTodo = (text) =>{
 const newTodo = {
  id: crypto.randomUUID(),
  text : text,
 };
 setTodos([newTodo, ...todos]);
};

// Delete Todo

const deleteTodo = (id) => {

  setTodos(todos.filter(item => {
    if(item.id !== id) {
      return true;
    }
  })) 

}

 
 
  return (
    
    <>
   <Navbar theme={theme}  changeTheme={changeTheme}/>
   <div 
     style={{height : "100vh"}}
   className= {theme ? "container-fluid p-5 bg-dark" : "container-fluid p-5"}>
   <Form saveTodo={saveTodo}/> 
   <ListGroup theme={theme} todos={todos} deleteTodo={deleteTodo} /> 
   </div>
  
    </>
  );
};

export default App
