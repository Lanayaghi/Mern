import React from "react";

const Todo = (props) => {
    return(
        <div>
        <div > 
        <input onChange = {()=> { props.handelStatus(props.i)

        }} checked = {props.todo.status} type= "checkbox" />
            <span style={{ textDecoration: props.todo.status && 'line-through' }}>{props.todo.text}</span> 
            <button onClick = {(e) => {props.handelTodoDelete(props.i)}}>Delete</button>
        </div>
    
    
    </div>
    );
}

export default Todo;