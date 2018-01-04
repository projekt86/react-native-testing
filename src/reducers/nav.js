import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';
import type { Action } from "../actions/types";

export type State = {

};

const initialState = AppNavigator.router.getStateForAction(NavigationActions.init());

function nav(state: State = initialState, action: Action): State {
  
  let nextState;
  switch (action.type) {
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
}

module.exports = nav;
