import React from 'react';
import Scores from './Scores'

function Student(props) {
  return (
    <div >
      {props.students.map(student =>
          <>
          <hr/>
            <div key={student.name}>Name: {student.name}</div>
        <hr/>
            <div key={student.name}>Bio: {student.bio}</div>
            <h3>Scores</h3>
            <Scores scores={student.scores} />
        </>
      )}
    </div>
  );
}

export default Student;