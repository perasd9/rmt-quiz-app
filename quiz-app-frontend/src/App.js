import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Main from './Main.js';
import Quizzes from './Quizzes.js';







function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Main />} /> 
    <Route path="/Quizzes" element={<Quizzes />} />
    </Routes>
  </Router>
  );
}

export default App;
