import React from 'react';
import App from './app';
import Splash from './splash/splash';
import Browse from './browse/browse';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session_form/session_form_container';
import FeaturedVid from './featured_vid/featured_vid';
import GenreShowContainer from './genre_show/genre_show_container';


const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/browse');
    }
  };
  const _redirectIfNotLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };


  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ Splash } onEnter={_redirectIfLoggedIn}/>
          <Route path='/login' component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path='/signup' component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path='/browse' component={ Browse } onEnter={_redirectIfNotLoggedIn }>
          </Route>
          <Route path='/browse/genre/:id' component={ GenreShowContainer } onEnter={ _redirectIfNotLoggedIn } />

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
