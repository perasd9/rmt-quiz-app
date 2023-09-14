import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import slicica from './img/slicica.png';
import './LogIn.css';
import axios from 'axios';

const LogIn = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
  });
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleLogInClick = async () => {
    const { username, password } = formValues;

    try {
      const response = await axios.get('https://localhost:7026/players');

      if (response.status === 200) {
        const players = response.data;
        const userExists = players.some((player) => {
          return player.username === username && player.password === password;
        });

        if (userExists) {
          console.log('You are logged in!');
          navigate('/Main');
        } else {
          alert('Incorrect username or password');
          setLoginError('Incorrect username or password');
        }
      } else {
        console.log('Error during login');
        setLoginError('Error during login');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginError('Error during login');
    }
  };

  const handleSignUpClick = () => {
    navigate('/SignIn');
  };

  return (
    <div className='hero'>
      <div className='hero--image'>
        <img src={slicica} alt='Slicica' />
      </div>

      <div className='right'>
        <h1>Welcome back!</h1>
        <h2>
          Log <span className='yellow'>in!</span>
        </h2>
        <h5>
          Don't have an account?{' '}
          <span className='yellow' onClick={handleSignUpClick}>
            Sign up
          </span>
        </h5>

        <div className='form'>
          <div className='input'>
            <label htmlFor='username'>Username: *</label>
            <input
              id='username'
              type='text'
              name='korisnicko_ime'
              placeholder='username'
              value={formValues.username}
              onChange={(e) =>
                setFormValues({ ...formValues, username: e.target.value })
              }
            />
          </div>

          <div className='input'>
            <label htmlFor='password'>Password: *</label>
            <input
              id='password'
              type='password'
              name='register_lozinka'
              placeholder='*********'
              value={formValues.password}
              onChange={(e) =>
                setFormValues({ ...formValues, password: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <button className='dugme' onClick={handleLogInClick}>
            <p>Log in</p>
          </button>
        </div>

        <h6>By submitting this form you agree to our Privacy Policy</h6>
      </div>
    </div>
  );
};

export default LogIn;