import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { fetchReview, createReview, updateReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  let review = { stars: 0, comment: "" };
  let formType = 'new';
  let user_id = state.session.currentUser.id;
  let series_id = ownProps.serie.id;
  return { review, formType, user_id, series_id };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action =  createReview;
  return {
    action: review => dispatch(action(review))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);

// fetchReview: id => dispatch(fetchReview(id)),
