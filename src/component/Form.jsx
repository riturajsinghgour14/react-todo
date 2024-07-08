import React, { useState } from 'react'

const Form = ({saveTodo}) =>{
   const [text, setText] = useState("")
 const handleSubmit=(e)=>{
  e.preventDefault()
  saveTodo(text);
  setText("")
 };
  
  return (
    <form className="my-2" onSubmit={(e)=>handleSubmit(e)}>
    <input type="text" placeholder="Enter text Here..." 
    className="form-control roundes-0"
    required
    value={text}
    onChange={(e)=> setText(e. target.value)}
    />
    <button className="btn btn-success my-3 w-100 rounded-0">Save</button>
    </form>
  );
};

export default Form;
