import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'  // a component we get from react-redux
import './index.css';
import App from './App';

// import store
import store from './redux/store';

ReactDOM.render(
  // provider wrapper component to allow for access to store and pass in as prop
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root')
);
