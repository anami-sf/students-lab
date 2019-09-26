import React from 'react';
import Scores from './Scores'

function Student(props) {
  return (
    <div >
      {props.students.map(student =>
          <>
            <hr/>
            <h2 key={student.name}>{student.name}</h2>
            <hr/>
            <div key={student.name}>{student.bio}</div>
            <h3>Scores</h3>
            <Scores scores={student.scores} />
        </>
      )}
    </div>
  );
}

export default Student;