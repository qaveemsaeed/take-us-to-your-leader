import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; // or createStore if using legacy Redux
import './index.css';
import Game from './container/Game/Game';  // Replace with your main App component
import reducer from './reducer'; // Your combined reducers or a single reducer
import reportWebVitals from './reportWebVitals';

const store = configureStore({
  reducer,  // This should be the reducer or combined reducers
  devTools: process.env.NODE_ENV !== 'production', // This enables Redux DevTools in non-production environments
});

ReactDOM.render(
  <Provider store={store}>  {/* Wrap your app with Provider and pass the store */}
    <Game />                 {/* Replace <Game /> with <App /> if that's your root component */}
  </Provider>,
  document.getElementById('root')
);

reportWebVitals(console.log);