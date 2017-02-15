import React from 'react';
import { Link, withRouter } from 'react-router';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

  }

  sessionLink() {
    return (
      <nav className='login header-group'>
        <Link to='/login' activeClassName='current' className='header-button-login'>Sign In</Link>
      </nav>
    );
  }

  render() {
    return(
      <div className='all-nav-container'>
        <div className='all-nav-header'>
          <Link to='/' className='all-nav-header-link'>
            <h1 className='navbar-header-title'>DOCFLIX</h1>
          </Link>
        </div>
        <div className='navbar-greeting'>
          { this.props.path === '/' ? this.sessionLink() : ''  }
        </div>
      </div>
    );
  }
}

export default Greeting;





// const handleLogout = (logout) => {
//   logout();
//   this.props.router.push('/');
// }

// const personalGreeting = (currentUser, logout) => (
//   <div className='header-group'>
//     <h2 className='header-name'>{currentUser.fname}</h2>
//     <button className='header-button-signout' onClick={logout}>Sign Out of Docflix</button>
//   </div>
// )

// const sessionLink = () => {
//   debugger
//   return (
//   <nav className='login header-group'>
//     <Link to='/login' activeClassName='current' className='header-button-login'>Sign In</Link>
//   </nav>
// )
// }
//
// const Greeting = ({ currentUser, logout }) => (
//   <div>
//     <div className='navbar-header'>
//       <Link to='/' className='navbar-header-link'>
//         <h1 className='navbar-header-title'>DOCFLIX</h1>
//       </Link>
//     </div>
//     <div className='navbar-greeting'>
//       {sessionLink()}
//     </div>
//
//   </div>
// );


// this.props.location.pathname == '/' then render sessionLink, else don't
