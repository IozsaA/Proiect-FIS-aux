import React from "react"
import './Student.css'
function Student(props){
    return(
        <div className="todo-item">
            <div className="container">
                <div className="student-image-container">
                    <img src={props.img} className="student-image"/>
                </div>
                <div className="student-text">
                    <h3>{props.name}</h3>
                    <p>Phone:{props.phone}</p>
                    Email:{props.email}
                </div>
            </div>
        </div>
    )
}

export default Student