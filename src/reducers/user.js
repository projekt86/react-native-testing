/**
* @flow
*/


import type { Action } from "../actions/types";

export type State = {
  isLoggedIn: boolean,
  id?: string,
  name?: string,
  isLoading: boolean,
  error?: string
};

export const initialState = {
  isLoggedIn: false,
  id: null,
  name: null,
  isLoading: false,
  error: null,
};

function user(state: State = initialState, action: Action): State {
  if (action.type === "LOGGED_IN") {
    let { id, name } = action.data;
    return {
      isLoggedIn: true,
      id,
      name,
      isLoading: false,
      error: null,
    };
  }
  if (action.type === "LOGGED_OUT") {
    return { ...initialState };
  }
  if (action.type === 'LOGGING') {
    return { ...initialState, isLoading: true };
  }
  if (action.type === 'LOGGING_ERROR') {
    return { ...initialState, error: action.error };
  }
  return state;
}

module.exports = user;
