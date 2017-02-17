import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import SeriesReducer from './series_reducer';
import GenresReducer from './genres_reducer';
import SerieReducer from './serie_reducer';
import ReviewsReducer from './reviews_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  series: SeriesReducer,
  genres: GenresReducer,
  serie: SerieReducer,
  reviews: ReviewsReducer
});

export default RootReducer;
