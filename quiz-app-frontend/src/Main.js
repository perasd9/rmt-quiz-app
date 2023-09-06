import Navbar from './Navbar';
import './Navbar.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import style2 from "./Main.css";

function Main() {
  const navigate = useNavigate();

  const handleQuizzesClick = () => {
    
    navigate('/quizzes');
  };



  return (
    <div>
    
    <Navbar />
      <div class="hero">
      <div class="text">
        <h1>Welcome to our online quiz platform!</h1>
        <p>Are you ready to test your knowledge and show how well you know different subjects?
            Our quiz is the perfect way to have fun, expand your knowledge, and challenge yourself to achieve a high score.
            In our quiz, you will face a random selection of 10 questions from various fields. Answer quickly and accurately to earn as many points as possible.
            The goal is to answer at least 6 questions correctly and pass the quiz. Each question carries its own value, so strive to achieve the highest overall score.

        </p>
        <div class="btn2">
          <button class="b2" id='b2'>Start quiz</button>
          <button class="b2" id='b3' onClick={handleQuizzesClick}>Quizzes</button>
        </div>
      </div>
      <div class="image">
        <img src="../Rectangle 8.png"></img>
      </div>
    </div>
    </div>
    
  )
}

export default Main;
