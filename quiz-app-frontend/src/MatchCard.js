import React from 'react';
import './MatchCard.css'; 

function MatchCard({ player1, player2, result }) {
  return (
    <div className="match-card">
      <div className="match-players">
        <img src='../symbols 9.png'></img>
        <h3>Name{player1}</h3>
        <div className="match-result">
        <p>Result</p>
        <h4>{result}</h4>
      </div>
      
        <h3>Name{player2}</h3>
        <img src='../symbols 9.png'></img>
      </div>
     
    </div>
  );
}

export default MatchCard;
