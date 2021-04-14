
 import React, {useState} from 'react'
 import './App.css';
 import "../src/Styles/todoStyle.css"
 //Components
 import Form from "./Componets/Form"
 import TodoList from "./Componets/TodoList"

 function App() {

    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);

   return (
    <div>
        <h1>TODOS</h1>
        <div className="todos-container">
            <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
            <TodoList todos={todos} setTodos={setTodos}/>
        </div>
    </div>
  )
 }

export default App;
