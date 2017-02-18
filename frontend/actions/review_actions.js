import * as ReviewApiUtil from '../util/review_api_util';
import { hashHistory } from 'react-router';

// export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

// export const fetchReviews = () => dispatch => (
//   ReviewApiUtil.fetchReviews().then(reviews => dispatch(receiveAllReviews(reviews)))
// );
//
export const fetchReview = id => dispatch => (
  ReviewApiUtil.fetchReview(id).then(review => dispatch(receiveReview(review)))
);

export const createReview = review => dispatch => (
  ReviewApiUtil.createReview(review).then(review => dispatch(receiveReview(review)))
);

export const updateReview = review => dispatch => (
  ReviewApiUtil.updateReview(review)
             .then(review => dispatch(receiveReview(review)))
             .then(hashHistory.push('/'))
);

export const deleteReview = review => dispatch => (
  ReviewApiUtil.deleteReview(review).then(review => dispatch(removeReview(review)))
);

// const receiveAllReviews = reviews => ({
//   type: RECEIVE_ALL_REVIEWS,
//   reviews
// });

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
});
