import { RECEIVE_REVIEW_ERRORS } from '../actions/review_actions';
import merge from 'lodash/merge';

const ErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      const errors = action.errors;
      return [...errors];
    default:
      return oldState;
  }
};

export default ErrorsReducer;
