import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware,compose} from 'redux';
import rootReducder from './redux/reducer';

import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {database} from './database/config';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(rootReducder,applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}> <BrowserRouter><App /></BrowserRouter></Provider>,
  document.getElementById('root')
);
