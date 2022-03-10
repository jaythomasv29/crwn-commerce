import { UserActionTypes } from "./user.types";

// initial redux state
const INITIAL_STATE = {
  currentUser: null
}

// user Reducer with default parameter
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
      
    default:
      return state;
  }
}

export default userReducer;