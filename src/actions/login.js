// @flow
import axios from 'axios';
import { ThunkAction, Action } from './types';


export const login = (email: string, password: string): Promise => {
  return (dispatch) => {
    dispatch({ type: 'LOGGING' });

    return axios
      .post('https://us-central1-test-21181.cloudfunctions.net/api/login', { email, password })
      .then(response => dispatch(loginSuccess(response.data)))
      .catch(error => dispatch(loginError('Invalid email or password')));
  }
}

const loginSuccess = (data: {id: string, name: string}): Action => {
    return {
      type: 'LOGGED_IN',
      data: { id: data.id, name: data.name }
    };
};

const loginError = (error: string): Action => {
  return {
    type: 'LOGGING_ERROR',
    error
  };
};

export const logout = (): Action => {
  return {
    type: 'LOGGED_OUT'
  };
};
