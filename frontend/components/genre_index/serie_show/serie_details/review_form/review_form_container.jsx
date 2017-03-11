import { connect } from 'react-redux';
import ReviewForm from './review_form';
import {
  fetchReview,
  createReview,
  updateReview,
  deleteReview,
  receiveReviewErrors
} from '../../../../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  let userReview = ownProps.userReview;
  let review = { id: null, stars: 0, comment: "" };
  if(userReview) {
    review = userReview;
   }
  let formType = userReview ? 'edit' : 'new';
  let user_id = state.session.currentUser.id;
  let series_id = state.serie.id;

  let errors = (state.errors) ? state.errors : [];
  return {
    review,
    formType,
    user_id,
    series_id,
    errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.userReview ?  updateReview : createReview;
  return {
    action: review => dispatch(action(review)),
    deleteReview: review => dispatch(deleteReview(review)),
    clearErrors: () => dispatch(receiveReviewErrors([]))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
