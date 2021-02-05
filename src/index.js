import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router as HistoryProvider } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';

import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';


export const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <HistoryProvider history={history}>
        <App />  
    </HistoryProvider>
  </Provider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
