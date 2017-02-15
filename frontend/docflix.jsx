import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login } from './actions/session_actions';
import { fetchSeries, fetchSerie } from './util/serie_api_util';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.fetchSeries = fetchSeries;
  window.fetchSerie = fetchSerie;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
