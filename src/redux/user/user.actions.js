import { UserActionTypes } from "./user.types";

// User action
export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
})