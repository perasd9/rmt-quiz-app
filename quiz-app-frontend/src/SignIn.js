import React from 'react'
import {useState, useEffect} from "react";
import { useNavigate, Link } from 'react-router-dom'; 
import './Signup.css';






const SignIn = () => {

const navigate = useNavigate();
const[formValues, setFormValues] = useState({username: "", email : "", password: "", repeat_password : ""});
const[formErrors,setFormErrors] = useState({});
const[isSubmit, setIsSubmit] = useState(false);



const handleChange = (e) =>{
    
    const{name, value} = e.target;
    setFormValues({...formValues, [name]:value});
};

const handleSubmit =(e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    const errors = validate(formValues);
  setFormErrors(errors);


      if (Object.keys(errors).length === 0) {
        setRegistrationSuccess(true);
        setFormValues({ username: "", email: "", password: "", repeat_password: "" });
      }
};

const [registrationSuccess, setRegistrationSuccess] = useState(false);

useEffect(() =>{

    setFormErrors(validate(formValues));
    setIsSubmit(true);
    const errors = validate(formValues);
  setFormErrors(errors);

    console.log(formErrors);
    if(Object.keys(formErrors).length=== 0 && isSubmit){
       console.log(formValues); 
    }
},[formValues])

const validate = (values) => {
const errors = {};
const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

if (!values.username) {
    errors.username = 'Username is required!';
  } else if (values.username.length < 5) {
    errors.username = 'Username must have at least 5 characters';
  } else if (values.username.length > 50) {
    errors.username = 'Username must not exceed 50 characters';
  }



if(!values.email){
    errors.email = "Email is required!"
}else if(!regex.test(values.email)){
    errors.email = "This is not a valid email format!"
}else if (values.email.length > 50) {
      errors.email = 'Email must not exceed 50 characters';}

if(!values.password){
    errors.password = "Password is required!"
}else if(values.password.length < 4){
    errors.password = "Password must be more than 4 characters";
}

if (!values.repeat_password) {
    errors.repeat_password = 'Repeat password';
  } else if (values.repeat_password !== values.password) {
    errors.repeat_password = 'Passwords do not match';
  }
return errors;


  

};


  return (

 

    <div className='container1'>
        
        <div className='signup'>
            <div className='Box'>
            <h1>Create your account</h1>
            Already have an account? <Link to='/'><span>Login in!</span></Link> 
            </div>
            
          
            <form onSubmit={handleSubmit} id="registrationForm">


            <div className='Form1' >

            <div className='input'>
                <label for="username">Username: *</label>
                <input id="username" type="text" name="username" placeholder="username" value={formValues.username} onChange={handleChange}/>

            </div>

            <p>{formErrors.username}</p>
            <div className='input'>
                <label for="email">Email: *</label>
                <input id="email" type="text" name="email" placeholder="name.surname@mail.com" value={formValues.email} onChange={handleChange}/>
                
            </div>

            <p>{formErrors.email}</p>
            <div className='input'>
                <label for="password">Password: *</label>
                <input id="password" type="password" name="password" placeholder="*********" value={formValues.password} onChange={handleChange}/>
                
            </div>
            <p>{formErrors.password}</p>
            <div className='input'>
                <label for="repeat_password">Repeat password: *</label>
                    <input id="repeat_password" type="password" name="repeat_password" placeholder="*********"value={formValues.repeat_password} onChange={handleChange}/>
                
            </div>
            <p>{formErrors.repeat_password}</p>
            </div>
            
            <div>
            <button className ="signup_dugme" onClick={() => navigate('/')}>
              <p>Sign up</p>
            </button>
            </div>

            {registrationSuccess && (
                <div className='success-message'>
                    <p>Signed in successfully!</p>
                </div>
                )}
        </form>

           
        </div>
        <div className='Image1'>
            <img src= {require("./7647956.png")} alt=""/>
        </div>
        

      
     
    </div>
  )
}

export default SignIn;

