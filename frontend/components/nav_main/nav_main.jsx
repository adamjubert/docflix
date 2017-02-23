import React from 'react';
import { Link, withRouter } from 'react-router';

class NavMain extends React.Component {

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
      <div className='all-nav-container'>
        <div className='all-nav-header'>
          <Link to='/' className='all-nav-header-link'>
            <img src={window.logo} />
          </Link>

          <ul className='nav-dropdown-root'>
            <p className='nav-browse'>Browse</p>
            <i className="fa fa-caret-down browse-caret" aria-hidden="true"></i>
            <div className='nav-dropdown-menu'>
              <Link to="/" className='nav-dropdown-item'>Home</Link><br/>
              <Link to="browse/genre/0" className='nav-dropdown-item'>My List</Link>
            </div>
          </ul>
        </div>

        <div className='nav-profile'>
          <ul className='nav-dropdown-profile'>
            <div className='user-icon'></div>
            <h2 className='header-name'>{user}</h2>
            <i className="fa fa-caret-down signout-caret" aria-hidden="true"></i>

            <div className='nav-dropdown-menu-signout'>
              <button className='header-button-signout' onClick={this.logoutUser.bind(this)}>Sign Out of Docflix</button>
            </div>
          </ul>

        </div>

      </div>
    );
  }
}

export default withRouter(NavMain);
