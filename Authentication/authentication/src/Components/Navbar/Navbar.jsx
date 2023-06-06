import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
      <li className="navbar-item">
          <Link to='/' className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to='/sign-up' className="navbar-link">Sign Up</Link>
        </li>
        <li className="navbar-item">
          <Link to='/profile' className="navbar-link">Profile</Link>
        </li>
        <li className="navbar-item">
          <Link to='sign-in' className="navbar-link">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
