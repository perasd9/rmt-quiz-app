import React, { useEffect, useState } from 'react';
import Card from './Card';
import Navbar from './Navbar';
import './Players.css';
import axios from 'axios';

function Players() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/db/data.json");
        setPlayers(response.data);
      } catch (err) {
        setError(err.message); // Set the error message in case of an error
      }
    }

    fetchData();
  }, []);

  return (
    <div className='main'>
      <Navbar />
      <div className='hero-page'>
        {error ? (
          <p>Error: {error}</p>
        ) : (
          players.map((player) => {
            console.log(player);
            return <Card player={player} key={player.id} />;
          })
        )}
      </div>
    </div>
  );
}

export default Players;
