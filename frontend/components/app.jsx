import React from 'react';
import { Link } from 'react-router';
import NavWelcomeContainer from './nav_welcome/nav_welcome_container';
import NavMainContainer from './nav_main/nav_main_container';
import Footer from './footer/footer';

const App = (props) => {
  let currentNavbar;
  let navbarClass;
  let path = props.location.pathname;
  if (path === '/' || path === '/login' || path === '/signup') {
    currentNavbar = <NavWelcomeContainer path={path}/>;
    navbarClass = 'auth-navbar mobile-white';
  } else {
    currentNavbar = <NavMainContainer />;
    navbarClass = 'auth-navbar';
  }

  let bodyClass;
  if (path === '/') {
    bodyClass = 'splash-body';
  } else if (path === '/login' || path === '/signup') {
    bodyClass = 'auth-body';
  } else {
    bodyClass = 'signed-in-body';
  }

  return(
    <div className={bodyClass}>
      <div className={navbarClass}>
        { currentNavbar }
      </div>
      { props.children }
      < Footer />
    </div>
  );
};

export default App;
