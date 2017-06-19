import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import todoApp from './reducers/index.jsx';


export default createStore(
  todoApp,
  {},
  applyMiddleware(createLogger()),
);
