import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {
  logoutUser,
  signupUser,
  loginUser
} from './actions/session_actions';
import { fetchBenches } from './util/bench_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: window.currentUser
      },
      session: {
        id: Object.keys(window.currentUser)[0]
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchBenches = fetchBenches;


  ReactDOM.render(<Root store={store}/>, root);
});
