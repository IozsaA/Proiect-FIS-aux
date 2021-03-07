import React from "react"

function TodoItem(props){
    return(
        <div className="todo-item">
            <img src={props.img} width="50%" height="50%"/>
            <h3>{props.name}</h3>
            <p>Phone:{props.phone}</p>
            <p>Email:{props.email}</p>
        </div>
    )
}

export default TodoItem