import React from 'react';
import './Game.css'

function Game({ questionText, answers }) {
  return (
   
    <div className="question">
      <div className='div-q'>
        <h2>Pitanje:</h2>
      <p>{questionText}</p>
      </div>
      <div className='div-a'>
        <ul className="answers">
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
      </div>
      
    </div>
  );
}

export default Game;