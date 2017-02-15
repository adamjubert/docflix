import * as APIUtil from '../util/bench_api_util';

export const RECEIVE_SERIES = 'RECEIVE_SERIES';

export const fetchSeries = () => dispatch => (
  APIUtil.fetchSeries()
);
