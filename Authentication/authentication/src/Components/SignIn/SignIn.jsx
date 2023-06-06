import React, { useState } from 'react';
import './SignInForm.css';
import { Link } from 'react-router-dom';

function SignUp() {

    const [loginData, setLoginData] = useState({})
    const manageChange = (name, value)=>{
        setLoginData((prev)=>({...prev, [name]:value}))
    }

    const submitForm = (e)=>{
        e.preventDefault()
        console.log(loginData)
    }
  return (
    <div className="signup-form">
      <h2>Sign In</h2>
      <form onSubmit={submitForm}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required onChange={(e)=>manageChange(e.target.name, e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required onChange={(e)=>manageChange(e.target.name, e.target.value)} />

        <button type="submit">Sign In</button>
        <p  className='login-option'> <Link to='/sign-up'>Create a new Account </Link></p>
      </form>
    </div>
  );
}

export default SignUp;
