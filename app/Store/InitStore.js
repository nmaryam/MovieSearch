var {applyMiddleware, createStore} = require('redux');
var thunk = require('redux-thunk').default
var promise = require('./promise');
var array = require('./array');
var reducers = require('./../Reducers');
import {createLogger} from 'redux-logger';
var {persistStore, autoRehydrate} = require('redux-persist');
// var {AsyncStorage} = require('react-native');
var {localForage} = require('localforage');

var isDebuggingInChrome = true;
var logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true
});

var createAppStore = applyMiddleware(promise, array, logger, thunk)(createStore);

function InitStore(onComplete: ?() => void) {
  // TODO(frantic): reconsider usage of redux-persist, maybe add cache breaker
  const store = autoRehydrate()(createAppStore)(reducers);
  persistStore(store, {storage: localForage}, onComplete);
  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
}

module.exports = InitStore;
