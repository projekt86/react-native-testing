import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { hardSet } from 'redux-persist/lib/stateReconciler/hardSet';

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['id', 'name', 'isLoggedIn'],
  stateReconciler: hardSet,
};

const AppReducer = combineReducers({
  nav: require('./nav'),
  user: persistReducer(userPersistConfig, require("./user")),
});

export default AppReducer;
