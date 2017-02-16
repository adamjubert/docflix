import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import MainNavContainer from './main_nav/main_nav_container';
import Footer from './footer/footer';

const App = (props) => {
  let currentNavbar;
  let navbarClass;
  let path = props.location.pathname;
  if (path === '/' || path === '/login' || path === '/signup') {
    currentNavbar = <GreetingContainer path={path}/>;
    navbarClass = 'auth-navbar mobile-white';
  } else {
    currentNavbar = <MainNavContainer />;
    navbarClass = 'auth-navbar';
  }

  return(
    <div className='main-top'>
      <div className={navbarClass}>
        { currentNavbar }
      </div>
      { props.children }
      < Footer />
    </div>
  );
};

export default App;



// put footer after { props.children }

//
// will recieve logged in helper function from root, then determine which navbar to show



// <div className='navbar-header'>
//   <Link to='/' className='navbar-header-link'>
//     <h1 className='navbar-header-title'>DOCFLIX</h1>
//   </Link>
// </div>
// <div className='navbar-greeting'>
//   { currentNavbar }
// </div>
