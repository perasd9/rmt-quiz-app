import './Questions.css';
import './Game.css'
import './Navbar.css'

import Navbar from './Navbar'
import Game from './Game';
import player from './img/player.png'

function Questions() {
  const questions = [
    {
      questionText: 'Ovo je prvo pitanje.',
      answers: ['Odgovor 1', 'Odgovor 2', 'Odgovor 3', 'Odgovor 4'],
    }
   
  ];

  return (
    <div>
    <Navbar/>
    <div className="App">
      <div className='img-wrapper'>
        <img src={player}></img>
          <img src={player}></img>
      </div>
      <table>
        <tbody>
          {questions.map((question, index) => (
            <tr key={index}>
              <td>
                <Game
                  questionText={question.questionText}
                  answers={question.answers}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Questions;
