import React from 'react';
import { Link, withRouter } from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/browse");
    }
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
        <h2><span>Watch anywhere.</span> <span>Cancel anytime.</span></h2>
        <ul className='splash-buttons'>
          <Link to='/signup' className='splash-btn-signup'>Join free for a lifetime</Link>
          <Link className='splash-btn-signup' onClick={this.handleGuestLogin.bind(this)}>Sign in as guest</Link>
        </ul>

      </div>
    );
  }

}

export default Splash;
