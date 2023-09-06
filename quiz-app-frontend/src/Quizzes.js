import MatchCard from './MatchCard';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from './Navbar.css';
import Navbar from './Navbar.js';

const Quizzes = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          setMatches(response.data);
          setLoading(false); 
        })
        .catch((error) => {
          console.error('Greška prilikom fetch-ovanja podataka:', error);
          setLoading(false);
        });
    }, []); 
    return (
      <div className="App">
        
        <Navbar/>
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
}

export default Quizzes
