import { RECEIVE_LIKE,
         REMOVE_LIKE,
         RECEIVE_LIKES } from '../actions/like_actions';
import merge from 'lodash/merge';

const LikesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_LIKES:
      return action.likes;
    case RECEIVE_LIKE:
      return merge({}, oldState, {[action.like.id]: action.like});
    case REMOVE_LIKE:
      let newState = merge({}, oldState);
      delete newState[action.like.id];
      return newState;
    default:
      return oldState;
  }
};

export default LikesReducer;
