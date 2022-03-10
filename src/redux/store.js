import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// Middleware setup
const middlewares = [logger];  // catches action to log 

// create store
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;