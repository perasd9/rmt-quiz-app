import MatchCard from './MatchCard';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from './Navbar.css';
import Navbar from './Navbar.js';

const Quizzes = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const response = await axios.get('https://localhost:7026/quizzes');
        setMatches(response.data);

        
        const player1Promises = response.data.map(async (match) => {
          const playerResponse = await axios.get(`https://localhost:7026/players/${match.playerId1}`);
          return playerResponse.data;
        });

        const player2Promises = response.data.map(async (match) => {
          const playerResponse = await axios.get(`https://localhost:7026/players/${match.playerId2}`);
          return playerResponse.data;
        });

        const player1Data = await Promise.all(player1Promises);
        const player2Data = await Promise.all(player2Promises);

       
        const matchesWithPlayers = response.data.map((match, index) => ({
          ...match,
          player1: player1Data[index],
          player2: player2Data[index],
        }));

        setMatches(matchesWithPlayers);
        setLoading(false);
      } catch (error) {
        console.error('Greška prilikom fetch-ovanja podataka:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="container">
          {matches.map((match, index) => (
            <MatchCard
              key={index}
              player1={match.player1}
              player2={match.player2}
              result={match.result}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Quizzes;
