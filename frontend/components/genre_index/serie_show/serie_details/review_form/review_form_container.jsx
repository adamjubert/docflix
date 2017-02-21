import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { fetchReview, createReview, updateReview, deleteReview } from '../../../../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  let userReview = ownProps.userReview;
  let review = { id: null, stars: 0, comment: "" };
  if(userReview) {
    review = userReview;
   }
  let formType = userReview ? 'edit' : 'new';
  let user_id = state.session.currentUser.id;
  let series_id = state.serie.id;

  let errors = (state.reviews.errors) ? state.reviews.errors : [];

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
    deleteReview: id => dispatch(deleteReview(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);

// fetchReview: id => dispatch(fetchReview(id)),
