import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import GenresReducer from './genres_reducer';
import SerieReducer from './serie_reducer';
import SeriesReducer from './series_reducer';
import ReviewsReducer from './reviews_reducer';
import ErrorsReducer from './errors_reducer';
import LikesReducer from './likes_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  genres: GenresReducer,
  serie: SerieReducer,
  series: SeriesReducer,
  likes: LikesReducer,
  reviews: ReviewsReducer,
  errors: ErrorsReducer
});

export default RootReducer;
