import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { persistStore } from "redux-persist";
import { PersistGate } from 'redux-persist/es/integration/react'
import AppReducer from './reducers';
import configureStore from "./store/configureStore";
import App from './App';


function setup(): ReactClass<{}> {

  class Root extends React.Component {
    state: {
      isLoading: boolean,
      store: any
    };

    constructor() {
      super();
      this.state = {
        storeCreated: false,
        storeRehydrated: false,
        store: null
      };
    }

    componentDidMount() {
      configureStore(
        // rehydration callback (after async compatibility and persistStore)
        _ => this.setState({ storeRehydrated: true })
      ).then(
        // creation callback (after async compatibility)
        store => this.setState({ store, storeCreated: true })
      );
    }

    render() {

      if (!this.state.storeCreated || !this.state.storeRehydrated) {
        return <View />;
      }
      return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
      );
    }

  }

  return Root;
}

module.exports = setup;
