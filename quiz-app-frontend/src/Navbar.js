import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LogIn from './LogIn';

function Navbar() {

  const navigate = useNavigate();

  const handleLogoutClick = () => {
    
    navigate('/');
  };
    return (
        
    <nav className="nav">

        <div class="logo">
            <div className="imageWrapper">
        <img src="../Rectangle 1.png"></img>
        </div>
        <h4>PSN</h4>
      </div>
      <div class="menu">
    <ul>
    <li><Link to="/Main">Home</Link></li>
    <li><Link to="/Players">Players</Link></li>
    <li><Link to="/Quizzes">Quizzes</Link></li>
      
    </ul>
    </div>

    <div class="button">
      <button onClick={handleLogoutClick}><p>Log out</p></button>
          
   </div>

                
  
               
            </nav>
        
    )
  }


  export default Navbar;