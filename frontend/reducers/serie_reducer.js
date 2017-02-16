import { RECEIVE_SERIE } from '../actions/serie_actions';

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
