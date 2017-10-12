import {USER_SEARCH_SUCCESS } from "../constants/actionTypes";
import initialState from "./initialState";

export default function userReducer(state = initialState.users, action) {
  let users;

  switch (action.type) {
    case USER_SEARCH_SUCCESS:
      return action.users;

    default:
      return state;
  }
}