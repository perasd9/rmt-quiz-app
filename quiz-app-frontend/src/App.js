import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Main from './Main.js';
import Quizzes from './Quizzes.js';
import Players from './Players.js';
import Questions from './Questions.js';
import LogIn from './LogIn.js';



function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LogIn/>}/>
    <Route path="/Main" element={<Main />} /> 
    <Route path="/Quizzes" element={<Quizzes />} />
    <Route path="/Players" element = {<Players/>}/>
    <Route path="/Questions" element={<Questions  />}/>
    </Routes>
  </Router>
  );
}

export default App;
