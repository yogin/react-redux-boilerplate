var redux = require('redux');

export var configure = (initialState = {}) => {
  var reducer = f => f; //redux.combineReducers({reducer1, reducer2, ...});

  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
