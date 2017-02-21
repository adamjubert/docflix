import * as ReviewApiUtil from '../util/review_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

export const fetchReviews = (id) => dispatch => (
  ReviewApiUtil.fetchReviews(id).then(reviews => dispatch(receiveReviews(reviews)))
);

export const fetchReview = id => dispatch => (
  ReviewApiUtil.fetchReview(id).then(review => dispatch(receiveReview(review)))
);

export const createReview = review => dispatch => (
  ReviewApiUtil.createReview(review).then(review => dispatch(receiveReview(review)),
      err => dispatch(receiveReviewErrors(err.responseJSON)))
);

export const updateReview = review => dispatch => (
  ReviewApiUtil.updateReview(review)
             .then(review => dispatch(receiveReview(review)),
                 err => dispatch(receiveReviewErrors(err.responseJSON)))
             .then(hashHistory.push('/'))
);

export const deleteReview = review => dispatch => (
  ReviewApiUtil.deleteReview(review).then(review => dispatch(removeReview(review)))
);

const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
})

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
});

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});
