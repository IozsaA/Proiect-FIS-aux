import React from "react"
import './Student.css'
import studentData from './studentData'
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

class Students extends React.Component {
    constructor(){
      super()
      this.state = {
        student: studentData
      }
    }
    
    render(){
    const studentComponents = this.state.student.map(
      student => <Student 
                    id={student.id}
                    img={student.img}
                    name={student.name}
                    phone={student.phone}
                    email={student.email} 
                  />)
      return (
        <div className="todo-list">
          {studentComponents}
        </div>
      );
    }
  }

export default Students