import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import App from './components/App.jsx';

let nextTodoID = 0;

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,
        todos: [...state.todos, action.payload],
      };
      break;
    case 'REMOVE':
      break;
    case 'CLEAR':
      state = {
        todos: [],
      };
      nextTodoID = 0;
      break;
    case 'TOGGLE':
      break;

  }

  return state;
};

const store = createStore(todoReducer, {
  todos: [],
},
{},
applyMiddleware(logger()));

store.subscribe(() => {
  console.log('Store was updated!', store.getState());
});

store.dispatch({
  type: 'ADD',
  payload: {
    text: 'Hello',
    Toggle: false,
    id: nextTodoID += 1,
  },
});

store.dispatch({
  type: 'ADD',
  payload: {
    text: 'bye',
    Toggle: false,
    id: nextTodoID += 1,
  },
});

function clearF() {
  store.dispatch({
    type: 'CLEAR',
  });
}

render(
  <Provider store={store}>
    <App clear={clearF} />
  </Provider>,
  document.getElementById('root'));
