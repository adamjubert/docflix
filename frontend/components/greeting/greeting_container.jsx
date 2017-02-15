import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = function({ session }) {
  return {
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
