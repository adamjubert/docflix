import React from 'react';
import { Link, withRouter } from 'react-router';
//
// const MainNav = ({ currentUser, logout }) => (
//   <div className='navbar-header'>
//     <Link to='/' className='navbar-header-link'>
//       <h1 className='navbar-header-title'>DOCFLIX</h1>
//     </Link>
//     <div className='navbar-greeting'>
//       <div className='header-group'>
//         <h2 className='header-name'>{currentUser.fname}</h2>
//         <button className='header-button-signout' onClick={logout}>Sign Out of Docflix</button>
//       </div>
//     </div>
//   </div>
// );
//
// export default MainNav;
//
// //
// import React from 'react';
// import { Link, withRouter } from 'react-router';

class MainNav extends React.Component {

  logoutUser() {
    this.props.logout();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentUser === null) {
      this.props.router.push('/');
    }
  }

  render() {
    const user = this.props.currentUser === null ? '' : this.props.currentUser.fname;
    return (
      <div className='navbar-header'>
        <Link to='/' className='navbar-header-link'>
          <h1 className='navbar-header-title'>DOCFLIX</h1>
        </Link>
        <div className='navbar-greeting'>
          <div className='header-group'>
            <h2 className='header-name'>{user}</h2>
            <button className='header-button-signout' onClick={this.logoutUser.bind(this)}>Sign Out of Docflix</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MainNav);
