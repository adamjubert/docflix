import {  RECEIVE_SERIES } from '../actions/serie_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';



const SeriesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_SERIES:
      return action.series;
    case RECEIVE_LIKE:
      newState = state.concat(action.like.serie);
      return newState;
    case REMOVE_LIKE:
      newState = [...state];
      for (var i = 0; i < newState.length; i++) {
        if (newState[i].id === action.like.serie_id) { newState.splice(i, 1); }
      }
      return newState;
    default:
      return state;
  }
};

export default SeriesReducer;
