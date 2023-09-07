import React from 'react';
import './MatchCard.css'; 

function MatchCard({ player1, player2, result }) {
  return (
    <div className="match-card">
      <div className="match-players">
        <div className="player-info">
          <img src='../symbols 9.png' alt="Player 1" />
          <h3>{player1.username}</h3>
        </div>
        <div className="match-result">
          <h4>{result}</h4>
        </div>
        <div className="player-info">
          <img src='../symbols 9.png' alt="Player 2" />
          <h3>{player2.username}</h3>
        </div>
      </div>
    </div>
  );
}

export default MatchCard;
