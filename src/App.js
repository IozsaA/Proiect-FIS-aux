import './App.css';
import studentData from './studentData'
import Student from './Student';
import React from 'react';

class App extends React.Component {
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

export default App;
