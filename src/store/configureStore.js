import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import AppReducer from "../reducers";
import { createLogger } from "redux-logger";
import { persistStore, persistCombineReducers } from "redux-persist";
import thunkMiddleware from 'redux-thunk';

const isDebuggingInChrome = false;


async function configureStore(onComplete: ?() => void) {



  const middlewares = [thunkMiddleware];
  if (__DEV__) {
    middlewares.push(createLogger());
  }

  const store = createStore(
    AppReducer,
    //undefined,
    applyMiddleware(...middlewares)

  );

  persistStore(
    store,
    null,
    () => onComplete(true)
  );

  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
}

module.exports = configureStore;
