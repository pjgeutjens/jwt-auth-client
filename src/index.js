import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, BrowserHisory } from 'react-router'
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Signin from "./components/auth/signin";
import Signout from './components/auth/signout';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={BrowserHisory}>
      <Route path='/' component={App}>
        <Route path='/signin' component={Signin}>
        </Route>
        <Route path='/signout' component={Signout}>
        </Route>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
