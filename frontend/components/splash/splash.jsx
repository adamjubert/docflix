import React from 'react';
import { Link, withRouter } from 'react-router';

class Splash extends React.Component {

  render() {
    return (
      <div className='splash-main'>
        <h1>Discover new stories.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <ul className='splash-buttons'>
          <Link to='/signup' className='splash-btn-signup'>Join free for a month</Link>
        </ul>

      </div>
    );
  }

}

export default Splash;

// NB: bonus / at the end: Can add link to log in as guest
// <Link to='/login' className='splash-btn-guest-login'>Log in as guest</Link>
