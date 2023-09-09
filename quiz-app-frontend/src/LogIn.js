import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';
import Main from './Main';
import slicica from './img/slicica.png';


const LogIn = () => {
 
const navigate = useNavigate(); 
 const handleLogInClick = () => {
  navigate('/Main');
};

    return (
    <div className='hero'>
        <div className='hero--image'>
            <img src={slicica} ></img>
      </div>
      
      <div className='right' >
       <h1>Welcome back!</h1>
       <h2>Log <span className='yellow'>in!</span></h2>
       <h5>Don't have an account? <span className='yellow'>Sign up</span></h5>
       <div className='form'>
            <div className='input'>
                <label for="username">Username: *</label>
                <input id="username" type="text" name="korisnicko_ime" placeholder="name_surname"/>

            </div>
            
            <div className='input'>
                <label for="password">Password: *</label>
                <input id="password" type="password" name="register_lozinka" placeholder="*********"/>
                
            </div>
            </div>
            <div>
                <button className='btn' onClick={handleLogInClick}><p>Log in</p></button>
            </div>

            <h6>By submiting this form you agree to our Privacy Policy</h6>
            </div>
      </div>
     

   
  )
}

export default LogIn