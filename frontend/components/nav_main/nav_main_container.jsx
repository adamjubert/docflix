import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavMain from './nav_main';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavMain);
