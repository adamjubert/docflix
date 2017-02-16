import { RECEIVE_GENRE } from '../actions/genre_actions';

const GenreReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_GENRE:
      return action.genre;
    default:
      return state;
  }
};

export default GenreReducer;
