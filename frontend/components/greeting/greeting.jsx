import React from 'react';
import { Link } from 'react-router';

const personalGreeting = (currentUser, logout) => (
  <div className='header-group'>
    <h2 className='header-name'>{currentUser.fname}</h2>
    <button className='header-button-signout' onClick={logout}>Sign Out of Docflix</button>
  </div>
)

const sessionLink = () => (
  <nav className='login header-group'>
    <Link to='/login' activeClassName='current' className='header-button-login'>Sign In</Link>
  </nav>
)

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLink()
);

export default Greeting;

// this.props.location.pathname == '/' then render sessionLink, else don't
