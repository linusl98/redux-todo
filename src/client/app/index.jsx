import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import App from './components/App.jsx';

let nextTodoID = 0;

const initialState = { todos: [{ text: 'hey', id: 1 }] };

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

const store = createStore(todoReducer, initialState, applyMiddleware(createLogger()));

store.subscribe(() => {
  console.log('Store was updated!', store.getState());
});

store.dispatch({
  type: 'ADD',
  payload: {
    text: '123',
    id: 1,
  },
});

store.dispatch({
  type: 'ADD',
  payload: {
    text: '123',
    id: 1,
  },
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
