import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import todoReducer from './reducers/todoReducer.jsx';


export default createStore(
  todoReducer,
  {
    todos: [],
  },
  applyMiddleware(createLogger()),
);
