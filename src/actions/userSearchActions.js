import * as types from "../constants/actionTypes";
import {search} from '../api/userApi';

export function userSearchSuccess(users) {
  return { type: types.USER_SEARCH_SUCCESS, users };
}

// example of a thunk using the redux-thunk middleware
export function searchUsers(searchCriteria) {
  return function(dispatch) {
    search(searchCriteria).then( results => {
      const users = results;
      return dispatch(userSearchSuccess(users));
    }).catch( error => {
      return alert(error);
    });
  };
}