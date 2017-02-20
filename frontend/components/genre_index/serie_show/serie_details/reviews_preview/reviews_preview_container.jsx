import { connect } from 'react-redux';
import ReviewsPreview from './reviews_preview';
import { fetchReviews, fetchReview, createReview, updateReview } from '../../../../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    reviews: state.reviews
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
)(ReviewsPreview);

// fetchReview: id => dispatch(fetchReview(id)),
