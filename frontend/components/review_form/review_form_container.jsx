import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { fetchReview, createReview, updateReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  let review = { comment: "" };
  if(ownProps.params) {
    review = state.reviews[ownProps.params.reviewId];
  }
  let formType = ownProps.formType || "edit";
  return { review, formType };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.formType === "new" ? createReview : updateReview;
  return {
    fetchReview: id => dispatch(fetchReview(id)),
    action: review => dispatch(action(review))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
