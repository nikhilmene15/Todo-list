import React from 'react'
import { useState } from 'react';

function NewTodo({handleTodo}) {
    const[text, setText] = useState("");
    const handleChange = (e)=>(
        setText(e.target.value)
      );

      const onclick =()=>{
        handleTodo(text);
    };

  return (
    <>
    <h2>{text}</h2>
    <input type='text' value={text} onChange={handleChange} placeholder=' Add item here'/>
    <button onClick={onclick}>ADD</button>
    </>
  )
}

export default NewTodo