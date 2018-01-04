import user from '../user';
import { initialState } from '../user';
import { login } from '../../actions/login';

it('returns the same state on unhandled action ', () => {
  expect(user(initialState, { type: '_NULL'})).toMatchSnapshot();
});

it('handles LOGGING action', () => {
  expect(user(initialState, { type: 'LOGGING'})).toEqual({
    id: null, name: null, isLoggedIn: false, isLoading: true, error: null
  });
});

it('handles LOGGED_IN action', () => {
  expect(user(initialState, { type: 'LOGGED_IN', data: { id: 'A', name: 'B'}})).toEqual({
    id: 'A', name: 'B', isLoggedIn: true, isLoading: false, error: null
  });
});

it('handles LOGGING_ERROR action', () => {
  expect(user(initialState, { type: 'LOGGING_ERROR', error: 'A'})).toEqual({
    id: null, name: null, isLoggedIn: false, isLoading: false, error: 'A'
  });
});

it('handles LOGGED_OUT action', () => {
  expect(user(initialState, { type: 'LOGGED_OUT'})).toMatchSnapshot();
});
