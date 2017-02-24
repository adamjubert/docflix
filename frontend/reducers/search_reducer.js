import { FETCH_SEARCH_RESULTS_SUCCESS } from '../actions/search_actions';

const searchReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case FETCH_SEARCH_RESULTS_SUCCESS:
      return action.results;

    default:
      return oldState;
  }
};

export default searchReducer
