import React from 'react';

function Scores(props) {
  return (
    <div >
        {props.scores.map(score => 
          <div>
            <span>Score: {score.score}    [{score.date}]</span>
          </div>

        )}
    </div>
  );
}

export default Scores;