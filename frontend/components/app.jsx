import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container'

const App = ({ children }) => (
  <div className='main-top'>
    <div className='navbar'>
      <div className='navbar-header'>
        <Link to='/' className='navbar-header-link'>
          <h1 className='navbar-header-title'>DOCFLIX</h1>
        </Link>
      </div>
      <div className='navbar-greeting'>
        <GreetingContainer />
      </div>
    </div>
    { children }
  </div>
)

export default App;
