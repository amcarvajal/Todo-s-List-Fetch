import React from "react";
import "../Styles/todoStyle.css"
//Components
import Todo from "./Todo"

function TodoList({todos, setTodos}){
console.log(todos)
    return(
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {todos.map((todo) => (
                        <Todo key={todo.id} todos={todos} todo={todo} setTodos={setTodos} text={todo.text}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList;