import React, {Component} from 'react';
import Student from './components/Student'
import STUDENTS from './students'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      students: STUDENTS
    }
  }

  render () {
    return (
      <div >
        <Student students={this.state.students} />
      </div>
    );
  }
}

export default App;
