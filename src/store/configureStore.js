import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import { createLogger } from 'redux-logger';

import taxReducer from '../reducers/tax';

const loggerMiddleWare = createLogger();
const reducers = combineReducers({
  tax: taxReducer
});

const createStoreWithMiddleware = applyMiddleware(
  loggerMiddleWare)(createStore);


const configureStore = () => {
  return createStoreWithMiddleware(reducers);
};

export default configureStore;