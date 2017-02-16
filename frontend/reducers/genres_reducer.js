import { RECEIVE_GENRES } from '../actions/genre_actions';

const GenresReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_GENRES:
      return action.genres;
    default:
      return state;
  }
};

export default GenresReducer;
