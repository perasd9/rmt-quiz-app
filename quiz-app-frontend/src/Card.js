import React from 'react'
import './Card.css'
import player from './img/player.png'

function Card(props) {
  return (
   <div className='container3'>
    <div className='img-div'>
      <img src={player} className='img'></img>
    </div>
   
    <h1>Ime: {props.player.name}</h1>
    <h3>Broj pobeda: {props.player.victories}</h3>
   </div>  
  )
}

export default Card