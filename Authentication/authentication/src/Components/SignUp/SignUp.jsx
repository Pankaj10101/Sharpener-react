import React, { useState } from 'react';
import './SignupForm.css';
import { Link } from 'react-router-dom';

function SignUp() {

    const [data, setData] = useState({})
    const manageChange = (name, value)=>{
        setData((prev)=>({...prev, [name]:value}))
    }

    const submitForm = (e)=>{
        e.preventDefault()
        console.log(data)
    }
  return (
    <div className="signup-form">
      <h2>Create Account</h2>
      <form onSubmit={submitForm}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required onChange={(e)=>manageChange(e.target.name, e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required onChange={(e)=>manageChange(e.target.name, e.target.value)} />

        <button type="submit">Create Account</button>
        <p  className='login-option'> <Link to='/sign-in'>Login with existing Account </Link></p>
      </form>
    </div>
  );
}

export default SignUp;
