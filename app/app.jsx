var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var store = require('configureStore').configure();

store.subscribe(() => {
  var state = store.getState();
  console.log('New State', state);
});

// load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <p>boilerplate</p>
  </Provider>,
  document.getElementById('app')
);
