import { connect } from 'react-redux';
import SerieOverviewLeft from './serie_overview_left';
import { createLike, deleteLike } from '../../../../actions/like_actions.js';
import { arrayOfLikes } from '../../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    serie: state.serie,
    currentUser: state.session.currentUser,
    likes: arrayOfLikes(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: id => dispatch(deleteLike(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SerieOverviewLeft);
