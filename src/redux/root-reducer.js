// Overall Reducers

import { combineReducers } from 'redux';  // combine reduce

import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer
});