import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = ({ session }) => {
  // debugger
  return {
    loggedIn: Boolean(session.currentUser)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // debugger
  return {
    login: user => dispatch(login(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
