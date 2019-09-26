import React from 'react';

function Scores(props) {
  return (
    <div >
        {props.scores.map(score => 
          <>
          <div>Date: {score.date}</div>
          <div>Score: {score.score}</div>
          </>
        )}
    </div>
  );
}

export default Scores;