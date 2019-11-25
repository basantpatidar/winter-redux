import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import combineReducers from './reducers'

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV ==='development'
})

const store = createStore(combineReducers, applyMiddleware(thunk, loggerMiddleware));

ReactDOM.render(
  <Provider store = {store}>
  <App />
  </Provider>
  , document.getElementById('root'));
