import React from 'react';
import { Link, withRouter } from 'react-router';

class SignedOutNav extends React.Component {
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

export default SignedOutNav;
