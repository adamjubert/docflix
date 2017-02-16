import { RECEIVE_SERIES} from '../actions/serie_actions';

const SeriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SERIES:
      return action.series;
    default:
      return state;
  }
};

export default SeriesReducer;
