// Overall Reducers

import { combineReducers } from 'redux';  // combine reduce

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});