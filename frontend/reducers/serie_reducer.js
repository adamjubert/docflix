import { RECEIVE_SERIE } from '../actions/serie_actions';
import { RECEIVE_REVIEW } from '../actions/review_actions';


const SerieReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SERIE:
      return action.serie;

    default:
      return state;
  }
};

export default SerieReducer;

// case RECEIVE_REVIEW:
//   debugger
//  return Object.assign({}, state, { reviews: state.reviews.push(action.review) });
