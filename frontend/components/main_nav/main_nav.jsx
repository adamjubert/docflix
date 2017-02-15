import React from 'react';
import { Link, withRouter } from 'react-router';

const MainNav = (currentUser, logout) => (
  <div className='header-group'>
    <h2 className='header-name'>{currentUser.fname}</h2>
    <button className='header-button-signout' onClick={logout}>Sign Out of Docflix</button>
  </div>
);

export default MainNav;
