import { RECEIVE_GENRES, RECEIVE_GENRE } from '../actions/genre_actions';

const GenresReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_GENRES:
      return action.genres;
    case RECEIVE_GENRE:
      return action.genre;
    default:
      return state;
  }
};

export default GenresReducer;
