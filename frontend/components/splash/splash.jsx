import React from 'react';
import { Link, withRouter } from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  handleGuestLogin() {
    const user = {email: 'guest@docflix.tech', password: 'testing'};
    return (this.props.login(user));
  }

  render() {
    const user = {email: 'guest@docflix.tech', password: 'testing'};
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
