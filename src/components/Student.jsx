import React from 'react';
import Scores from './Scores'

function Student(props) {
  return (
    <div >
      {props.students.map(student =>
          <>
            <div key={student.name}>Name: {student.name}</div>
            <div key={student.name}>Bio: {student.bio}</div>
            <Scores scores={student.scores} />
        </>
      )}
    </div>
  );
}

export default Student;