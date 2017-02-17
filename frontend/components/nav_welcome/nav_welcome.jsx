import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SignedOutNav from './signed_out_nav';

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

export default connect(mapStateToProps, mapDispatchToProps)(SignedOutNav);
