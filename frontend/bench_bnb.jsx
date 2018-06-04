import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {
  logoutUser,
  signupUser,
  loginUser
} from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.loginUser = loginUser;
  window.signupUser = signupUser;


  ReactDOM.render(<Root store={store}/>, root);
});
