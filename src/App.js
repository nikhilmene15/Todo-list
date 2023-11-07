import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddTodo from './components/AddTodo';
import NewTodo from './components/NewTodo';

function App() {
  
  const[todos, setTodos] = useState([]);
  

  const handleTodo = (text)=>{
    const newItem = {
      title : text,
      id : new Date().toDateString() + text
    };

    setTodos([...todos, newItem]);
  }
  return (
   <>
     <h1>Todo list</h1>
    <NewTodo handleTodo={handleTodo}/>
  
     <ul>
       {todos.map((item)=>(
       <AddTodo {...item} />
        ))}
     </ul>
   </>
  );
}

export default App;
