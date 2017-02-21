import { connect } from 'react-redux';
import SerieDetails from './serie_details';
import { fetchReviews, fetchReview, createReview, updateReview } from '../../../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  let currentUserReview;
  return {
    reviews: Object.keys(state.reviews).map((id) => {
      let review = state.reviews[id];
      if (review.user_id === state.session.currentUser.id) { currentUserReview = review; }
      return (review);
    }),
    currentUserReview
   };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action =  createReview;
  return {
    action: review => dispatch(action(review)),
    fetchReviews: (id) => dispatch(fetchReviews(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SerieDetails);
