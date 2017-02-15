import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container'

const App = (props) => {
  let _isRoot = props.location.pathname === '/' ? 'root-navbar' : 'auth-navbar';
  return(
  <div className='main-top'>
    <div className={ _isRoot }>
      <div className='navbar-header'>
        <Link to='/' className='navbar-header-link'>
          <h1 className='navbar-header-title'>DOCFLIX</h1>
        </Link>
      </div>
      <div className='navbar-greeting'>
        <GreetingContainer />
      </div>
    </div>
    { props.children }
  </div>
  );
};

export default App;
// if this.props.location.pathname = '/login' : /signup :
