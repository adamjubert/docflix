import * as APIUtil from '../util/genre_api_util';

export const RECEIVE_GENRES = 'RECEIVE_GENRES';
export const RECEIVE_GENRE = 'RECEIVE_GENRE';

export const fetchGenres = () => dispatch => {
  return APIUtil.fetchGenres().then(genres => {
    dispatch(receiveGenres(genres));
  });
};

export const fetchGenre = id => dispatch => {
  return APIUtil.fetchGenre(id).then(genre => dispatch(receiveGenre(genre)));
};

const receiveGenres = genres => ({
  type: RECEIVE_GENRES,
  genres
});

const receiveGenre = genre => ({
  type: RECEIVE_GENRE,
  genre
});
