import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import store from './store.jsx';
import App from './components/App.jsx';


store.subscribe(() => {
  console.log('Store was updated!', store.getState());
});

// store.dispatch({
//   type: 'ADD',
//   payload: {
//     text: '123',
//     id: 1,
//   },
// });
//
// store.dispatch({
//   type: 'ADD',
//   payload: {
//     text: '123',
//     id: 1,
//   },
// });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
